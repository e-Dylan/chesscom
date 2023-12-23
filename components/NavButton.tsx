import theme from "@/styles";
import { Box, Flex, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  leftIcon?: any;
  href?: string;
  color?: string;
}

const NavButton = ({ text, leftIcon, href, color }: Props) => {
  return (
    <Flex
      as="a"
      href={href}
      fontWeight="700"
      fontSize="16px"
      color={color || theme.colors.offwhite}
      minH="44px"
      p="6px 0 6px 10px"
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

export default NavButton;
