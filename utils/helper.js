import toast from "react-hot-toast";

export const themeToast = (title, icon) => {
  toast(title ? title : "Something went wrong", {
    icon: icon,
    style: {
      fontFamily: "work-sans, inter, sans-serif",
      fontWeight: 600,
      borderRadius: "12px",
      background: "#FFA4A4",
      color: "#000",
      fontSize: "14px",
      marginTop: "28px",
      border: "1px solid #4035DA",
      paddingLeft: icon ? "16px" : "",
    },
    position: "top-center",
  });
};
