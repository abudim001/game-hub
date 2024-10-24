import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/GameLogo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image boxSize="60px" src={logo} />
      <Text color="black">NavBar</Text>
    </HStack>
  );
};

export default NavBar;
