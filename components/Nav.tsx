import theme from "@/styles";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import NavButton from "./NavButton";
import NavButtonSmall from "./NavButtonSmall";
import chessComLogoSrc from "@/images/chesscom-logo-dark.png";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

interface Props {
  navWidth: string;
}

const Nav = ({ navWidth }: Props) => {
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
          w="100%"
          p="10px 16px 10px 16px"
          _hover={{ bg: theme.colors.bg3 }}
        >
          <Image
            src={chessComLogoSrc}
            style={{ width: "100%", height: "auto" }}
            alt="Chess"
          />
        </Button>
        <NavButton text="Play" href="/play" leftIcon="black" />
        <NavButton text="Puzzles" href="/puzzles" leftIcon="black" />
        <NavButton text="Learn" href="/learn" leftIcon="black" />
        <NavButton text="Watch" href="/watch" leftIcon="black" />
        <NavButton text="News" href="/news" leftIcon="black" />
        <NavButton text="Social" href="/social" leftIcon="black" />
        <NavButton text="More" href="/more" leftIcon="black" />
        <NavButton
          text="Free Trial"
          href="/freetrial"
          leftIcon="black"
          color={theme.colors.blue}
        />
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
            rounded="3px"
            color="hsla(0, 0%, 100%, .72)"
            fontSize="13px"
            fontWeight="400"
            _placeholder={{ color: "hsla(0, 0%, 100%, .5)" }}
          />
        </Box>
        <PrimaryButton text="Log In" />
      </Flex>
      <Flex flexDir="column" textAlign="left" m="auto 0 2.5rem">
        <NavButtonSmall text="Light UI" href="/home" leftIcon="black" />
        <NavButtonSmall text="Collapse" href="/home" leftIcon="black" />
        <NavButtonSmall text="Settings" href="/home" leftIcon="black" />
        <NavButtonSmall text="Help" href="/home" leftIcon="black" />
      </Flex>
    </Flex>
  );
};

export default Nav;
