import theme from "@/styles";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import NavButton from "./NavButton";
import NavButtonSmall from "./NavButtonSmall";

const Nav = () => {
  const [navWidth, setNavWidth] = useState<string>("10rem");
  return (
    <Flex
      fontFamily="Segoe UI"
      w={navWidth}
      flexDir="column"
      h="100%"
      bg={theme.colors.bg2}
      alignContent="space-between"
      justifyContent="space-between"
    >
      <Flex flexDir="column">
        <Button
          as="a"
          href="/home"
          userSelect="none"
          minH="50px"
          color={theme.colors.offwhite}
          m="4px 0 0"
        >
          Chess.com
        </Button>
        <NavButton text="Play" href="/play" leftIcon="black" />
        <NavButton text="Puzzles" href="/puzzles" leftIcon="black" />
        <NavButton text="Learn" href="/learn" leftIcon="black" />
        <NavButton text="Watch" href="/watch" leftIcon="black" />
        <NavButton text="News" href="/news" leftIcon="black" />
        <NavButton text="Social" href="/social" leftIcon="black" />
        <NavButton text="More" href="/more" leftIcon="black" />
        <NavButton text="Free Trial" href="/freetrial" leftIcon="black" />
        <Box m="4px 10px 12px 10px">
          <Input
            placeholder="Search"
            w="100%"
            p="4px 4px 4px 8px"
            minH="32px"
            bg="hsla(0,0%,100%,.1)"
            border="1px solid hsla(0,0%,100%,.1)"
            _hover={{ borderColor: "hsla(0,0%,100%,.3)" }}
            _focus={{ borderColor: "hsla(0,0%,100%,.3)" }}
            outline="none"
            rounded="2px"
            color="hsla(0, 0%, 100%, .72)"
            fontSize="12px"
          />
        </Box>
      </Flex>
      <Flex flexDir="column" textAlign="left">
        <NavButtonSmall text="Light UI" href="/home" leftIcon="black" />
        <NavButtonSmall text="Collapse" href="/home" leftIcon="black" />
        <NavButtonSmall text="Settings" href="/home" leftIcon="black" />
        <NavButtonSmall text="Help" href="/home" leftIcon="black" />
      </Flex>
    </Flex>
  );
};

export default Nav;
