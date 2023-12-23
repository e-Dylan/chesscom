import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  username?: string;
  rating?: string;
}

const UserChip = ({ username, rating }: Props) => {
  return (
    <Flex>
      <Box
        backgroundImage={
          username
            ? "https://www.chess.com/bundles/web/images/noavatar_l.84a92436.gif"
            : "https://www.chess.com/bundles/web/images/black_400.png"
        }
        backgroundSize="100%"
        w="40px"
        h="40px"
        objectFit="cover"
        flex-shrink="0"
        mr=".8rem"
        overflow="hidden"
        pos="relative"
      />
      <Flex align="flex-start" gap=".4rem" maxW="100%" pos="relative">
        <Text
          maxW="30rem"
          fontWeight="600"
          fontSize="14px"
          lineHeight="1.3"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          color="#fff"
          fontFamily="Segoe UI"
        >
          {username ? username : "Opponent"}
        </Text>
        {rating && (
          <Text
            maxW="30rem"
            fontWeight="600"
            fontSize="14px"
            lineHeight="1.3"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            color="rgba(255, 255, 255, 0.6)"
            fontFamily="Segoe UI"
          >
            ({rating})
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default UserChip;
