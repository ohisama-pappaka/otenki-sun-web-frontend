import React from "react";
import { Button } from "@chakra-ui/react";

import { useAuth } from "@/hooks/useAuth";

const Home = () => {
  const { login } = useAuth();

  return (
    <>
      {/* TODO: ログイン機能の確認用ボタンのため後に削除 */}
      <Button onClick={login} colorScheme="blue">
        Login
      </Button>
    </>
  );
};

export default Home;
