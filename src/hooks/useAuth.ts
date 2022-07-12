import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
  User,
} from "firebase/auth";

import { currentUserActions } from "@/store/currentUserState";
import { auth } from "@/utils/firebase";
import { useEffect, useState } from "react";
import { fetchUserInfo, postUserInfo } from "@/firebase/firebase";

export const useAuth = () => {
  const updateCurrentUser = currentUserActions.useUpdateCurrentUser();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const provider = new GoogleAuthProvider();

  // 認証に関する副作用
  // auth はFirebaseApp の Auth インスタンスであり、認証情報が変わるたびに呼び出される
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      isRegistered(user);
    });
  }, [auth, currentUser]);

  // ユーザー登録を行う関数
  const RegiUser = async () => {
    if (currentUser != null && currentUser) {
      await postUserInfo(
        currentUser?.uid,
        currentUser?.displayName as string,
        currentUser?.photoURL as string,
        "山口県",
        "宇部市",
        [],
        20
      );
    }
  };

  /**
   * Firestoreにユーザーが登録してあるかをチェックして登録してない場合に登録する関数
   * @param user Firestoreから取得したユーザー情報
   */
  const isRegistered = async (user: User | null): Promise<void> => {
    if (user) {
      const userInfo = await fetchUserInfo(user.uid);
      if (!userInfo) {
        await RegiUser();
      }
    }
  };

  const login = () => {
    signInWithRedirect(auth, provider);
  };

  const logout = () => {
    signOut(auth);
    updateCurrentUser({
      isSignedIn: false,
      username: "",
      accessToken: "",
    });
  };

  return { login, logout };
};
