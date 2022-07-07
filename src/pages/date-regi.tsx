import React, { useEffect, useRef, useState } from "react";
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
import {
  dayDataTwentyEight,
  dayDataThirty,
  dayDataThirtyOne,
  monthData,
  yearData,
} from "@/data/dateData";

const DateRegi = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // FIXME: 警告を回避するために一時的に any 型としている
  const cancelRef = useRef<any>();
  const router = useRouter();

  const [dayDataList, setDayDataList] = useState<string[]>([]);
  const [selectYearData, setSelectYearData] = useState<string>("");
  const [selectMonthData, setSelectMonthData] = useState<string>("");
  const [selectDayData, setSelectDayData] = useState<string>("");
  const [isSelectValidation, setIsSelectValidation] = useState<boolean>(false);

  const handleRegi = () => {
    console.log(selectYearData, selectMonthData, selectDayData);
    console.log(selectYearData, selectMonthData, selectDayData);
    if (
      selectYearData !== "" &&
      selectMonthData !== "" &&
      selectDayData !== ""
    ) {
      setIsSelectValidation(true);
    } else {
      setIsSelectValidation(false);
    }
    onOpen();
  };

  const handleAfterRegi = () => {
    onClose();

    // 予定日の登録処理

    router.push("/");
  };

  // 入力された「月」をもとに選択肢の「日」のデータを変更
  useEffect(() => {
    if (
      selectMonthData == "1" ||
      selectMonthData == "3" ||
      selectMonthData == "5" ||
      selectMonthData == "7" ||
      selectMonthData == "8" ||
      selectMonthData == "10" ||
      selectMonthData == "12"
    ) {
      setDayDataList(dayDataThirtyOne);
    } else if (
      selectMonthData == "4" ||
      selectMonthData == "6" ||
      selectMonthData == "9" ||
      selectMonthData == "11"
    ) {
      setDayDataList(dayDataThirty);
    } else if (selectMonthData == "2") {
      setDayDataList(dayDataTwentyEight);
    }
  }, [selectMonthData]);

  return (
    <Box>
      <Header headerText={"予定日の登録"} />
      <VSpacer size={3} />
      <CommonSelect
        placeholderData={"年"}
        selectDataList={yearData}
        setSelectedData={setSelectYearData}
      />
      <VSpacer size={3} />
      <CommonSelect
        placeholderData={"月"}
        selectDataList={monthData}
        setSelectedData={setSelectMonthData}
      />
      <VSpacer size={3} />
      <CommonSelect
        placeholderData={"日"}
        selectDataList={dayDataList}
        setSelectedData={setSelectDayData}
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
                    {selectYearData}年{selectMonthData}月{selectDayData}
                    日を登録しますか？
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
                    日付が正しく選択されていません
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

export default DateRegi;
