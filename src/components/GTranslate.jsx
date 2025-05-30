// GTranslateDropdown.jsx
import React, { useState, useRef, useEffect } from "react";
import { Box, ClickAwayListener, Typography } from "@mui/material";

const languages = [
  { code: "en", name: "English", flag: "https://cdn.gtranslate.net/flags/24/en-us.png" },
  { code: "fr", name: "French", flag: "https://cdn.gtranslate.net/flags/24/fr.png" },
  { code: "de", name: "German", flag: "https://cdn.gtranslate.net/flags/24/de.png" },
  { code: "it", name: "Italian", flag: "https://cdn.gtranslate.net/flags/24/it.png" },
  { code: "es", name: "Spanish", flag: "https://cdn.gtranslate.net/flags/24/es.png" },
  { code: "nl", name: "Dutch", flag: "https://cdn.gtranslate.net/flags/24/nl.png" },
  { code: "pt", name: "Portuguese", flag: "https://cdn.gtranslate.net/flags/24/pt.png" },
  { code: "zh-CN", name: "Chinese (Simplified)", flag: "https://cdn.gtranslate.net/flags/24/zh-CN.png" },
  { code: "tr", name: "Turkish", flag: "https://cdn.gtranslate.net/flags/24/tr.png" },
  { code: "ar", name: "Arabic", flag: "https://cdn.gtranslate.net/flags/24/ar.png" },
  { code: "ko", name: "Korean", flag: "https://cdn.gtranslate.net/flags/24/ko.png" },
  { code: "zh-TW", name: "Chinese (Traditional)", flag: "https://cdn.gtranslate.net/flags/24/zh-TW.png" },
  { code: "ja", name: "Japanese", flag: "https://cdn.gtranslate.net/flags/24/ja.png" },
  { code: "ru", name: "Russian", flag: "https://cdn.gtranslate.net/flags/24/ru.png" },
  { code: "hi", name: "Hindi", flag: "https://cdn.gtranslate.net/flags/24/hi.png" },
  { code: "pl", name: "Polish", flag: "https://cdn.gtranslate.net/flags/24/pl.png" },
  { code: "cs", name: "Czech", flag: "https://cdn.gtranslate.net/flags/24/cs.png" },
  { code: "hu", name: "Hungarian", flag: "https://cdn.gtranslate.net/flags/24/hu.png" },
  { code: "id", name: "Indonesian", flag: "https://cdn.gtranslate.net/flags/24/id.png" },
  { code: "bg", name: "Bulgarian", flag: "https://cdn.gtranslate.net/flags/24/bg.png" },
  { code: "th", name: "Thai", flag: "https://cdn.gtranslate.net/flags/24/th.png" },
  { code: "ro", name: "Romanian", flag: "https://cdn.gtranslate.net/flags/24/ro.png" },
  { code: "vi", name: "Vietnamese", flag: "https://cdn.gtranslate.net/flags/24/vi.png" },
  { code: "sk", name: "Slovak", flag: "https://cdn.gtranslate.net/flags/24/sk.png" },
];

const GTranslate = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const wrapperRef = useRef(null);

  // Close dropdown on click away
  const handleClickAway = () => {
    setOpen(false);
  };

  // Toggle dropdown
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  // When a language is clicked, update selection and close dropdown
  const handleSelect = (lang) => (e) => {
    e.preventDefault();
    setSelected(lang);
    setOpen(false);

    // If GTranslate widget is already initialized, trigger its language switch
    try {
      const el = document.querySelector(`.nturl[data-gt-lang="${lang.code}"]`);
      if (el) {
        el.click();
      }
    } catch (err) {
      // swallow, to avoid console errors if widget isn't loaded yet
    }
  };

  useEffect(() => {
    // Define the global callback **before** appending <script>
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
            includedLanguages: languages.map((l) => l.code).join(","),
          },
          "google_translate_element"
        );
      }
    };

    // Only append the script if it’s not already loaded
    if (!window.google || !window.google.translate) {
      const existingScript = document.getElementById("gtranslate-script");
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "gtranslate-script";
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        // Add onerror so it doesn’t throw uncaught exceptions if loading fails
        script.onerror = () => {
          /* silently fail */
        };
        document.body.appendChild(script);
      }
    }
  }, []);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        ref={wrapperRef}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 999999,
          width: 200,
          bgcolor: "transparent",
        }}
      >
        {/* Hidden GTranslate element where Google’s widget renders */}
        <div id="google_translate_element" style={{ display: "none" }} />

        {/* Selected language button */}
        <Box
          onClick={handleToggle}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            p: 1,
            borderRadius: 1,
            bgcolor: "rgba(70, 67, 67, 0.6)",
            "&:hover": { bgcolor: "rgba(153, 148, 148, 0.75)" },
          }}
        >
          <Box
            component="img"
            src={selected.flag}
            alt={selected.code}
            sx={{ width: 24, height: 24, mr: 1 }}
          />
          <Typography variant="body2" sx={{ color: "#fff",  margin:"0 auto"}}>
                   {selected.name}⮟
          </Typography>
        </Box>

        {/* Dropdown menu */}
        {open && (
          <Box
            sx={{
              mt: 1,
              maxHeight: 260,
              overflowY: "auto",
              bgcolor: "rgba(0, 0, 0, 0.85)",
              borderRadius: 1,
              boxShadow: 3,
            }}
          >
            {languages.map((lang) => (
              <Box
                key={lang.code}
                component="a"
                href="#"
                onClick={handleSelect(lang)}
                data-gt-lang={lang.code}
                className="nturl"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: 1,
                  py: 0.75,
                  textDecoration: "none",
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
                }}
              >
                <Box
                  component="img"
                  src={lang.flag}
                  alt={lang.code}
                  loading="lazy"
                  sx={{ width: 24, height: 24, mr: 1 }}
                />
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  {lang.name}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </ClickAwayListener>
  );
};

export default GTranslate;
