
import { useEffect } from "react";
import "../Privacy/terms.css"
import { useTranslation } from "react-i18next";

export const Terms = () => {
const {t, i18n} = useTranslation()

  const handleChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };
  handleChange


  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return null;
  };


  return (
    <div className="terms_wrapper">
      <ScrollToTop />
      <div className="terms_container">
        <div className="terms_info">
          <h1 className="terms_title">{t("termsTitle")}</h1>
          <p className="terms_text">{t("termsText")}</p>
          <h3 className="terms_subtitle">{t("termsSubtitle_first")}</h3>
          <p className="terms_subScript">{t("termsSubScript_first")}</p>
          <h3 className="terms_subtitle">{t("termsSubtitle_second")}</h3>
          <p className="terms_subScript">{t("termsSubScript_second")}</p>
          <h3 className="terms_subtitle">{t("termsSubtitle_third")}</h3>
          <p className="terms_subScript">{t("termsSubScript_third")}</p>
          <h3 className="terms_subtitle">{t("termsSubtitle_fourth")}</h3>
          <p className="terms_subScript">{t("termsSubScript_third")}</p>
          <h3 className="terms_subtitle">{t("termsSubtitle_fifth")}</h3>
          <p className="terms_subScript">{t("termsSubScript_fifth")}</p>
        </div>
      </div>
    </div>
  );
}