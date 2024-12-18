import { extendTheme, ThemeConfig,  } from "@chakra-ui/react";

// 1. Define theme configuration with dark mode as default
const config : ThemeConfig = {
    initialColorMode: "dark",
  };
  
  
  
  // 2. Extend the theme
  const theme = extendTheme({ config });

  export default theme;