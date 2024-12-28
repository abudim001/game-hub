import useGenres from "@/hooks/usegenres";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <div>
      {data.map((genre) => (
        <Text>{genre.name}</Text>
      ))}
    </div>
  );
};

export default GenreList;
