import theme from "@/styles";
import { Box, Flex, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  leftIcon?: any;
  href?: string;
}

const NavButtonSmall = ({ text, leftIcon, href }: Props) => {
  return (
    <Flex
      as="a"
      href={href}
      fontWeight="700"
      fontSize="11px"
      color={theme.colors.transparentWhite}
      minH="32px"
      p="0 0 0 10px"
      min-width="4rem"
      alignItems="center"
      _hover={{ bg: theme.colors.bg3 }}
      transition="background-color 25ms linear"
    >
      {leftIcon == "black" && (
        <Box w="25px" h="25px" bg="black" marginInlineEnd="1rem" />
      )}
      <Text>{text}</Text>
    </Flex>
  );
};

export default NavButtonSmall;
