import {
  getFirestore,
  doc,
  setDoc,
  Timestamp,
  getDoc,
  DocumentData,
} from "firebase/firestore";

const db = getFirestore();

export const postUserInfo = async (
  UserId: string,
  UserName: string,
  UserIcon: string,
  RegiPositionPre: string,
  RegiPositionCity: string,
  regiDate: Timestamp[],
  RainyPercentTh: number
): Promise<void> => {
  await setDoc(doc(db, "user", UserId), {
    UserId: UserId,
    UserName: UserName,
    UserIcon: UserIcon,
    RegiPositionPre: RegiPositionPre,
    RegiPositionCity: RegiPositionCity,
    regiDate: regiDate,
    RainyPercentTh: RainyPercentTh,
  });
};

export const fetchUserInfo = async (
  userId: string
): Promise<DocumentData | null> => {
  const docRef = doc(db, "user", userId);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    return null;
  } else {
    return docSnap.data();
  }
};
