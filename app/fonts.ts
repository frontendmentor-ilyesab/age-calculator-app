import localFont from "next/font/local";

export const myFont = localFont({
    src: [
        {
            path: "../assets/fonts/Poppins-Regular.ttf",
            style: "normal",
            weight: "400",
        },
        {
            path: "../assets/fonts/Poppins-Italic.ttf",
            style: "italic",
            weight: "400",
        },
        {
            path: "../assets/fonts/Poppins-Bold.ttf",
            style: "normal",
            weight: "700",
        },
        {
            path: "../assets/fonts/Poppins-BoldItalic.ttf",
            style: "italic",
            weight: "700",
        },
        {
            path: "../assets/fonts/Poppins-ExtraBold.ttf",
            style: "normal",
            weight: "800",
        },
        {
            path: "../assets/fonts/Poppins-ExtraBoldItalic.ttf",
            style: "italic",
            weight: "800",
        },
    ],
    display: "swap",
})