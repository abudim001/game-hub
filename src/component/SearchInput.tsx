import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftAddon borderLeftRadius={20} children={<BsSearch />} />
      <Input placeholder="Search games..." borderRadius={20} variant="filled" />
    </InputGroup>
  );
};

export default SearchInput;
