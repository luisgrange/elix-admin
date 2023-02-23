import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { ThemeProvider } from "@pankod/refine-mui";
import { DarkTheme, LightTheme } from "@pankod/refine-mui";

type ColorModeContextType = {
  mode: string;
  setMode: () => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const colorModeFromLocalStorage = localStorage.getItem("colorMode");
  const isSystemPreferenceDark = window?.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const systemPreference = isSystemPreferenceDark ? "dark" : "light";
  const [mode, setMode] = useState(
    colorModeFromLocalStorage || systemPreference
  );

  useEffect(() => {
    window.localStorage.setItem("colorMode", mode);
  }, [mode]);

  const setColorMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const overridedLightTheme = {
    ...LightTheme,
    palette: {
        ...LightTheme.palette,
          primary: {
            main: "#67be23",
            contrastText: "#fff",
        },
        secondary: {
            main: "#fcfcfc",
            contrastText: "#fff",
        },
        background: {
            default: "#f0f0f0",
            paper: "#ffffff",
        },
        success: {
            main: "#67be23",
            contrastText: "#fff",
        },
        error: {
            main: "#fa541c",
            contrastText: "#fff",
        },
        warning: {
            main: "#fa8c16",
            contrastText: "#fff",
        },
        info: {
            main: "#0b82f0",
            contrastText: "#fff",
        },
        divider: "rgba(0,0,0,0)",
        text: {
            primary: "#626262",
            secondary: "#9f9f9f",
            disabled: "#c1c1c1",
        },
      },
  };

  const overridedDarkTheme = {
    ...DarkTheme,
    palette: {
        ...DarkTheme.palette,
        primary: {
          main: "#67be23",
          contrastText: "#fff",
        },
        secondary: {
            main: "#242424",
            contrastText: "#fff",
        },
        background: {
            default: "#212121",
            paper: "#242424",
        },
        success: {
            main: "#67be23",
            contrastText: "#fff",
        },
        error: {
            main: "#ee2a1e",
            contrastText: "#fff",
        },
        warning: {
            main: "#fa8c16",
            contrastText: "#fff",
        },
        info: {
            main: "#1890ff",
            contrastText: "#fff",
        },
        divider: "rgba(0,0,0,0)",
        text: {
            primary: "#fff",
            secondary: "rgba(255,255,255,0.7)",
            disabled: "#d1d1d1",
        },
      },
  };

  return (
    <ColorModeContext.Provider
      value={{
        setMode: setColorMode,
        mode,
      }}
    >
      <ThemeProvider theme={mode === "light" ? overridedLightTheme : overridedDarkTheme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
