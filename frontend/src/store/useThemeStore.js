import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "coffee",

  setTheme: (theme) => {
    console.log("Saving theme:", theme);
    localStorage.setItem("chat-theme", theme);
    set({ theme });
  },
}));