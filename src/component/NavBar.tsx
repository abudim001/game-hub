import { HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/Logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searhText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Link href="./" boxSize="60px" objectFit="cover">
        <Image borderRadius={"2xl"} src={logo} />
      </Link>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
