import { extendTheme, theme as base } from "@chakra-ui/react";
export const themeStyles = extendTheme({
  // By default poppings will be applied, if it can not be loaded on user's browser than rest of font families will be applied
  fonts: {
    heading: `inter, ${base.fonts?.body}`,
    body: `inter, ${base.fonts?.body}`,
  },

  // Consume the text styles in your component by writing textStyle="14Regular" in component
  textStyles: {},

  // Consume colors by writing: bg="neutral.50" or color="accent.green" in your component
  colors: {
    accent: {
      purple: "#4035DA",
      salmonPink: "#FFA4A4",
      lightPurple: "#C7BFE3",
      lightBlue: "#D0E5F5",
      yellow: "#FFEE00",
      red: "#DE2323",
    },
    badge: {
      success: "#39B990",
      pending: "#E68619",
      error: "#E34850",
      profit: "#39B990",
    },
    brand: {
      50: "#FF0000",
      500: "#4035DA",
      900: "#171923",
    },
  },
});
