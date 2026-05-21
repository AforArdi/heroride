"use client";
import { ThemeProvider } from "next-themes";

const HeroThemeProviders = ({children}) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            {children}
        </ThemeProvider>
    );
}

export default HeroThemeProviders;