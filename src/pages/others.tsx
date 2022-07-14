import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

import { VSpacer } from "@/components/common/Spacer/VSpacer";
import { Header } from "@/components/header/Header";
import { CommonSelect } from "@/components/common/CommonSelect";

const Others = () => {
  const [tempData, setTempData] = useState<string>("");

  return (
    <Box>
      <Header headerText={"その他"} />
      <VSpacer size={3} />
      <CommonSelect
        placeholderData={"Q&A"}
        selectDataList={["Option1", "Option2", "Option3"]}
        setSelectedData={setTempData}
      />
      <VSpacer size={3} />
      <CommonSelect
        placeholderData={"地点変更/削除"}
        selectDataList={["Option1", "Option2", "Option3"]}
        setSelectedData={setTempData}
      />
    </Box>
  );
};

export default Others;
