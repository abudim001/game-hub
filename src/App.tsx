import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./component/NavBar";

function App() {
  const isLargScreen = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" `,
        lg: `"nav nav" "aside main" `,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show when={isLargScreen}>
        <GridItem area="aside" bg="gray">
          aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="blue">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
