"use client";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#E0E9F0",
      100: "#B3CCE1",
      200: "#809FCD",
      300: "#4D72B8",
      400: "#2655AA",
      500: "#003049", // Dark Blue
      600: "#002941",
      700: "#002138",
      800: "#001830",
      900: "#000F26",
    },
    secondary: {
      50: "#FFE5E5",
      100: "#FFBFBF",
      200: "#FF8F8F",
      300: "#FF6060",
      400: "#FF3A3A",
      500: "#D62828", // Red
      600: "#B71C1C",
      700: "#931313",
      800: "#700D0D",
      900: "#570808",
    },
    accent1: {
      50: "#FFF2E6",
      100: "#FFD1BF",
      200: "#FFAD99",
      300: "#FF895F",
      400: "#FF7326",
      500: "#F77F00", // Orange
      600: "#D16F00",
      700: "#B65A00",
      800: "#994B00",
      900: "#7D3D00",
    },
    accent2: {
      50: "#FFFAE6",
      100: "#FFF2BF",
      200: "#FFE999",
      300: "#FFDE5C",
      400: "#FFD61F",
      500: "#FCBF49", // Yellow
      600: "#D99A2F",
      700: "#B67E23",
      800: "#946519",
      900: "#7A5211",
    },
    background: {
      light: "#EAE2B7", // Light Yellow
    },
  },
});

export default theme;


//Color Choices