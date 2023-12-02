export const ProgressStyles = {
  baseStyle: {
    track: { bg: "#4F4F52", h: "2px" },
    filledTrack: { bg: "#F1C4A4", h: "2px" },
  },
  sizes: {
    xs: { track: { h: "2px", fontSize: "8px" } },
    md: { track: { h: "2px", fontSize: "8px" } },
  },
  variants: {
    pending: (props) => {
      return {
        track: { bg: "#4F4F52", h: "2px" },
        filledTrack: { bg: "#F1C4A4", h: "2px" },
      };
    },
    error: (props) => {
      return {
        bg: "#282828",
        height: "2px",
        colorScheme: "taygenTheme.error",
        roundedBottom: "8px",
      };
    },
    success: (props) => {
      return {
        track: {
          bg: "transparent",
          h: "2px",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
        },
        filledTrack: { bg: "taygenTheme.success", h: "8px" },
      };
    },
  },
};
