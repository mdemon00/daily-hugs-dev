import { extendTheme } from "@chakra-ui/react";
import { themeStyles } from "./styles";
import { ModalStyles as Modal } from "./ComponentStyle/modal";
import { ProgressStyles as Progress } from "./ComponentStyle/Progress";
import { DrawerStyles as Drawer } from "./ComponentStyle/drawer";

export const dailyHugsTheme = extendTheme({
  ...themeStyles,
  components: { Modal: Modal, Progress: Progress, Drawer: Drawer },
});
