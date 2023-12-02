export const DrawerStyles = {
  parts: [
    "body",
    "dialog",
    "footer",
    "header",
    "overlay",
    "closeButton",
    "dialogContainer",
    "content",
  ],
  baseStyle: {},
  variants: {
    dailyHugsDesktopDrawer: {
      body: {
        borderRadius: "0px",
        paddingTop: "0px",
        paddingBottom: "0px",
        px: "0px",
      },
      dialog: {
        bg: "neutral.900",
        color: "neutral.50",
        padding: "0px",
        borderWidth: "1px",
        position: "absolute",
        borderRadius: "0px",
        borderColor: "neutral.850",
        boxShadow: "0px 16px 28px rgba(0, 0, 0, 0.3)",
      },
      content: {},
      overlay: { bg: "#000000B3", padding: "0px" },
      closeButton: {},
      header: {
        px: "0px",
        py: "0px",
        borderBottom: "1px",
        borderColor: "neutral.850",
      },
      footer: {
        bg: "neutral.800",
        py: "0px",
        px: "0px",
        justifyContent: "start",
      },
    },
  },
};
