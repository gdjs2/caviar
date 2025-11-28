export default function LanguageSwitcher({ lang, setLang }) {
  return (
    <div className="lang-switcher">
      <button
        className={lang === "zh" ? "active" : ""}
        onClick={() => setLang("zh")}
      >
        中文
      </button>
      <button
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
      >
        English
      </button>
    </div>
  );
}
