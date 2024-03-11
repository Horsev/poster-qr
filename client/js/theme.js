/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */
(() => {
  const getStoredTheme = () => localStorage.getItem("theme");
  const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const setTheme = (theme) => {
    if (
      theme === "auto" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
  };

  setTheme(getPreferredTheme());

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      const storedTheme = getStoredTheme();
      if (storedTheme !== "light" && storedTheme !== "dark") {
        setTheme(getPreferredTheme());
      }
    });

  const initializeThemeSwitchers = () => {
    document
      .querySelectorAll("[data-bs-theme-switch]")
      .forEach(assignThemeSwitchListener);
  };

  const assignThemeSwitchListener = (toggle) => {
    const switchTheme = () => {
      const currentTheme = getPreferredTheme();
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      setStoredTheme(newTheme);
      setTheme(newTheme);
    };

    toggle.addEventListener("click", switchTheme);
  };

  window.addEventListener("DOMContentLoaded", initializeThemeSwitchers);
})();
