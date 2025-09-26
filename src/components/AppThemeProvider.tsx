"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

type AppThemeProviderProps = {
  children: ReactNode;
};

export default function AppThemeProvider({ children }: AppThemeProviderProps) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const updateMode = () => setMode(media.matches ? "dark" : "light");
    updateMode();
    media.addEventListener("change", updateMode);
    return () => media.removeEventListener("change", updateMode);
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: mode === "light" ? "#2563eb" : "#60a5fa" },
          secondary: { main: mode === "light" ? "#1d4ed8" : "#93c5fd" },
          background: {
            default: mode === "light" ? "#ffffff" : "#0b1020",
            paper: mode === "light" ? "#ffffff" : "#0f172a",
          },
        },
        typography: {
          fontFamily:
            "var(--font-geist-sans), Arial, Helvetica, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif",
        },
        shape: { borderRadius: 10 },
        components: {
          MuiButton: {
            defaultProps: { disableElevation: true },
          },
          MuiPaper: {
            defaultProps: { elevation: 1 },
          },
          MuiChip: {
            styleOverrides: {
              root: { borderRadius: 8 },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}


