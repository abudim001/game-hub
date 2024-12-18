import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./component/NavBar";

function App() {
  const isLargScreen = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show when={isLargScreen}>
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="cyan">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
