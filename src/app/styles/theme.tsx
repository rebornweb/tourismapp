import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({

  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        'baseGold': {
          bg: 'primary.default',
          border:'1px', 
          borderColor:'header.100',
          color: 'secondary.default'
        },
        'baseBlue': {
          bg: 'secondary.50',
        
        },
        'defaultOutline':{

          border:'1px', 
          borderColor:'header.100',
          color:'header.100'
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: 'lg', // default is md
        variant: 'sm', // default is solid
        colorScheme: 'green', // default is gray
      },
    },
  },
  colors: {
    primary: {
      'default': '#ffb301',
      50: "#FFF7E5",
      100: "#FFEAB8",
      200: "#FFDC8A",
      300: "#FFCE5C",
      400: "#FFC02E", //Gold
      500: "#FFB300",
      600: "#CC8F00",
      700: "#996B00",
      800: "#664700",
      900: "#332400",
    },
    secondary: {
      'default': '#131c55',
      50: "#EBEDFA",
      100: "#C6CBF0",
      200: "#A2AAE7",
      300: "#7E89DD",
      400: "#5968D4", //Blue
      500: "#3547CA",
      600: "#2A39A2",
      700: "#202A79",
      800: "#151C51",
      900: "#0B0E28",
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
    header:{
      100: 'white'
    }
  },
});

export default theme;


