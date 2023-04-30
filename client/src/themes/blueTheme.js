import {createTheme} from '@mui/material/styles'

export const tokens = (mode)=>({
    ...(mode === 'light'
    ? {
        AzulPrimario: {
            100: "#dce8f2",
            200: "#bad1e6",
            300: "#97b9d9",
            400: "#75a2cd",
            500: "#528bc0",
            600: "#426f9a",
            700: "#315373",
            800: "#21384d",
            900: "#101c26"
        },
        AzulSecundario: {
            100: "#dae5e8",
            200: "#b5ccd1",
            300: "#91b2ba",
            400: "#6c99a3",
            500: "#477f8c",
            600: "#396670",
            700: "#2b4c54",
            800: "#1c3338",
            900: "#0e191c"
        },
        Gris: {
            100: "#f9f9f6",
            200: "#f3f3ed",
            300: "#eeede5",
            400: "#e8e7dc",
            500: "#e2e1d3",
            600: "#b5b4a9",
            700: "#88877f",
            800: "#5a5a54",
            900: "#2d2d2a"
        },
        AzulTerciario: {
            100: "#d7d9e2",
            200: "#aeb3c4",
            300: "#868da7",
            400: "#5d6789",
            500: "#35416c",
            600: "#2a3456",
            700: "#202741",
            800: "#151a2b",
            900: "#0b0d16"
        },
        Negro: {
            100: "#d1d3d4",
            200: "#a3a7a9",
            300: "#767b7d",
            400: "#484f52",
            500: "#1a2327",
            600: "#151c1f",
            700: "#101517",
            800: "#0a0e10",
            900: "#050708"
        },
    } : {
        AzulPrimario: {
            100: "#101c26",
            200: "#21384d",
            300: "#315373",
            400: "#426f9a",
            500: "#528bc0",
            600: "#75a2cd",
            700: "#97b9d9",
            800: "#bad1e6",
            900: "#dce8f2",
        },
        AzulSecundario: {
            100: "#0e191c",
            200: "#1c3338",
            300: "#2b4c54",
            400: "#396670",
            500: "#477f8c",
            600: "#6c99a3",
            700: "#91b2ba",
            800: "#b5ccd1",
            900: "#dae5e8",
        },
        Gris: {
            100: "#2d2d2a",
            200: "#5a5a54",
            300: "#88877f",
            400: "#b5b4a9",
            500: "#e2e1d3",
            600: "#e8e7dc",
            700: "#eeede5",
            800: "#f3f3ed",
            900: "#f9f9f6",
        },
        AzulTerciario: {
            100: "#0b0d16",
            200: "#151a2b",
            300: "#202741",
            400: "#2a3456",
            500: "#35416c",
            600: "#5d6789",
            700: "#868da7",
            800: "#aeb3c4",
            900: "#d7d9e2",
        },
        Negro: {
            100: "#050708",
            200: "#0a0e10",
            300: "#101517",
            400: "#151c1f",
            500: "#1a2327",
            600: "#484f52",
            700: "#767b7d",
            800: "#a3a7a9",
            900: "#d1d3d4",
        },

    }
    )
})

 const themeSettings = (mode)=>{
    const colors = tokens(mode)
    return {
        palette: {
            mode: mode,
            ...(mode === "light" 
            ? {
                primary: {
                    main: colors.AzulPrimario[500],
                },
                secondary: {
                    main: colors.AzulSecundario[500]
                },
                neutral: {
                    dark: colors.Gris[700],
                    main: colors.Gris[500],
                    light: colors.Gris[100],
                },
                background: {
                    default: "#fcfcfc"
                }
            } : {
                primary: {
                    main: colors.AzulPrimario[100],
                },
                secondary: {
                    main: colors.AzulSecundario[500]
                },
                neutral: {
                    dark: colors.Gris[700],
                    main: colors.Gris[500],
                    light: colors.Gris[100],
                },
                background: {
                    default: colors.AzulPrimario[500]
                }
            })
        }
    }

}

export const blueTheme = createTheme(themeSettings)