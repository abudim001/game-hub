import useGenres from "@/hooks/usegenres";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <div>
      {genres.map((genre) => (
        <Text>{genre.name}</Text>
      ))}
    </div>
  );
};

export default GenreList;
