import theme from "@/styles";
import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  text: string;
}

const PrimaryButton = ({ text }: Props) => {
  return (
    <Button
      bg={theme.colors.greenPrimary}
      wordBreak="break-word"
      rounded="5px"
      color="white"
      fontSize="15px"
      fontWeight="600"
      w="100%"
      h="40px"
      m="10px"
      maxW="100%"
      px="5px"
      pt="0"
      textAlign="center"
      border="none"
      transition="250ms ease"
      _hover={{ cursor: "pointer", background: "#9ecc5e" }}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
