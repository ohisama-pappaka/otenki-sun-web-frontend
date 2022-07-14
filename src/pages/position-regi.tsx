import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { VSpacer } from "@/components/common/Spacer/VSpacer";
import { Header } from "@/components/header/Header";
import { CommonSelect } from "@/components/common/CommonSelect";

export const PositionRegi = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // FIXME: 警告を回避するために一時的に any 型としている
  const cancelRef = useRef<any>();
  const router = useRouter();

  const [selectPrefectureData, setSelectPrefectureData] = useState<string>("");
  const [selectCityData, setSelectCityData] = useState<string>("");
  const [isSelectValidation, setIsSelectValidation] = useState<boolean>(false);

  const handleRegi = () => {
    console.log(selectPrefectureData, selectCityData);
    if (selectPrefectureData !== "" && selectCityData !== "") {
      setIsSelectValidation(true);
    } else {
      setIsSelectValidation(false);
    }
    onOpen();
  };

  const handleAfterRegi = () => {
    onClose();

    // 地点の登録処理

    router.push("/");
  };

  return (
    <Box>
      <Header headerText={"地点登録"} />
      <VSpacer size={3} />
      <CommonSelect
        placeholderData={"都道府県"}
        selectDataList={["北海道", "青森", "岩手"]}
        setSelectedData={setSelectPrefectureData}
      />
      <VSpacer size={3} />
      <CommonSelect
        placeholderData={"市町村"}
        selectDataList={["札幌", "根室", "釧路"]}
        setSelectedData={setSelectCityData}
      />
      <VSpacer size={3} />
      <Box display="flex" alignItems="center" justifyContent="center">
        <Button colorScheme="twitter" onClick={handleRegi}>
          登録する
        </Button>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <VSpacer size={4} />

              {isSelectValidation === true ? (
                <>
                  <AlertDialogBody>
                    {selectPrefectureData}
                    {selectCityData}市を登録しますか？
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={handleAfterRegi}>
                      登録する
                    </Button>
                    <Button colorScheme="red" onClick={onClose} ml={3}>
                      キャンセル
                    </Button>
                  </AlertDialogFooter>
                </>
              ) : (
                <>
                  <AlertDialogBody>
                    都道府県名または市町村名が正しく選択されていません
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      戻る
                    </Button>
                  </AlertDialogFooter>
                </>
              )}
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    </Box>
  );
};

export default PositionRegi;
