import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";

function App() {
  return (
    <>
      <Grid
        gridTemplateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        gridTemplateColumns={{
          base: "1fr", // Full width for smaller screens
          lg: "200px 1fr", // Sidebar 200px and main area takes the rest
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <Show above="lg">
          <GridItem paddingX={5} area="aside">
            <GenreList />
          </GridItem>
        </Show>

        <GridItem paddingX={6} area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
