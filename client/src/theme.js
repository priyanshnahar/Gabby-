// color design tokens export
export const colorTokens = {
    grey: {
      0: "#FFFFFF",
      10: "#F6F6F6",
      50: "#F0F0F0",
      100: "#E0E0E0",
      200: "#C2C2C2",
      300: "#A3A3A3",
      400: "#858585",
      500: "#666666",
      600: "#4D4D4D",
      700: "#333333",
      800: "#1A1A1A",
      900: "#0A0A0A",
      1000: "#000000",
    },
  //   primary: {
  //     50: "#E6FBFF",
  //     100: "#CCF7FE",
  //     200: "#99EEFD",
  //     300: "#66E6FC",
  //     400: "#33DDFB",
  //     500: "#00D5FA",
  //     600: "#00A0BC",
  //     700: "#006B7D",
  //     800: "#00353F",
  //     900: "#001519",
  //   },
  // };

//   primary: {
//     50: "#FFFBE6",
//     100: "#FFF7CC",
//     200: "#FFEE99",
//     300: "#FFE666",
//     400: "#FFDD33",
//     500: "#FFD500",
//     600: "#BCA000",
//     700: "#7D6B00",
//     800: "#3F3500",
//     900: "#191500",
//     }

// primary: {
//     50: "#FFF6E6",
//     100: "#FFECCC",
//     200: "#FFD999",
//     300: "#FFC266",
//     400: "#FF9933",
//     500: "#FF8000",
//     600: "#BC5E00",
//     700: "#7D3D00",
//     800: "#3F1F00",
//     900: "#191000",
//     }
//   }
primary: {
    50: "#F7E9FF",
    100: "#E0CFFF",
    200: "#C9B4FF",
    300: "#B29AFF",
    400: "#9B7FFF",
    500: "#8465FF",
    600: "#553DCC",
    700: "#32287D",
    800: "#1A143F",
    900: "#0A0819",
    }
  }

// primary: {
//     50: "#FFF0F0",
//     100: "#FFD1D1",
//     200: "#FFA3A3",
//     300: "#FF7575",
//     400: "#FF4747",
//     500: "#FF1919",
//     600: "#BC1313",
//     700: "#7D0C0C",
//     800: "#3F0606",
//     900: "#190101",
//     }
//   }
  
  // mui theme settings
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                dark: colorTokens.primary[200],
                main: colorTokens.primary[500],
                light: colorTokens.primary[800],
              },
              neutral: {
                dark: colorTokens.grey[100],
                main: colorTokens.grey[200],
                mediumMain: colorTokens.grey[300],
                medium: colorTokens.grey[400],
                light: colorTokens.grey[700],
              },
              background: {
                default: colorTokens.grey[900],
                alt: colorTokens.grey[800],
              },
            }
          : {
              // palette values for light mode
              primary: {
                dark: colorTokens.primary[700],
                main: colorTokens.primary[500],
                light: colorTokens.primary[50],
              },
              neutral: {
                dark: colorTokens.grey[700],
                main: colorTokens.grey[500],
                mediumMain: colorTokens.grey[400],
                medium: colorTokens.grey[300],
                light: colorTokens.grey[50],
              },
              background: {
                default: colorTokens.grey[10],
                alt: colorTokens.grey[0],
              },
            }),
      },    
      typography: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    }
};  