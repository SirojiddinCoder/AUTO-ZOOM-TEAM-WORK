import React, { useEffect, useState } from "react";
import "./Footer.css";
import Logo from "../../assets/LOGO.svg";
import { getCars, getCategories } from "../../getData/getData";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Footer = ({setCars}) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const category = await getCategories();
    console.log(category?.data);
    setCategories(category?.data);
  };
  const handleScrollToTop = async(category) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const res = await getCars()
    console.log(res);
    setCars(res?.data?.filter(item=> item?.category?.id === category))
  };
  const scrollToTop = async() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { t, i18n } = useTranslation();
  useEffect(()=> {
    const handleChange = (selectedLanguage) => {
      i18n.changeLanguage(selectedLanguage);
    };
    handleChange()
  },[])
  return (
    <footer className="footer">
      <div className="footer__items">
        <div className="footer__left">
          <img src={Logo} alt="logo" className="footer__left-logo" />
          <h2 className="footer__left-title">{t("footer.title")}</h2>
          <p className="footer__subtitle">
          {t("footer.desc")}
          </p>
          <button className="footer__left-btn">{t("footer.btn")}</button>
        </div>
        <div className="footer__right">
          <div className="footer__right-items">
            <div className="footer__right-item">
              <Link className="footer__item-title" onClick={scrollToTop} to="/cars">{t("footer.title1")}</Link>
              {categories?.map((item, index) => {
                return (
                  <Link
                    to={`/cars/${item?.id}`}
                    key={index}
                    className="footer__subtitle"
                    onClick={() => handleScrollToTop(item?.id)}
                  >
                    {item?.name_en}
                  </Link>
                );
              })}
            </div>
            <div className="footer__item">
              <Link className="footer__item-title" to="/blog" onClick={scrollToTop}>{t("footer.title2")}</Link>
              <Link className="footer__item-title" to="/services" onClick={scrollToTop}>{t("footer.title3")}</Link>
              <div>
                <Link className="footer__item-title" to="/contact" onClick={scrollToTop}>{t("footer.title4")}</Link>
                <p className="footer__subtitle">{t("footer.desc1")}</p>
                <p className="footer__subtitle">{t("footer.desc2")}</p>
                <p className="footer__subtitle">{t("footer.desc3")}</p>
              </div>
            </div>
            <div className="footer__item">
              <div className="footer__right-end">
                <Link className="footer__item-title" to="/aboutus" onClick={scrollToTop}>{t("footer.title5")}</Link>
                <Link className="footer__subtitle">{t("footer.title6")}</Link>
                <Link className="footer__subtitle">{t("footer.title7")}</Link>
              </div>
              <div className="footer__right-end">
                <h2>{t("footer.title8")}</h2>
                <div className="footer__social">
                  <a href="#">
                    <FaInstagram />
                  </a>
                  <a href="#">
                    <FaFacebook />
                  </a>
                  <a href="#">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__right-bottom">
            <p>© 2024 Auto Zoom Car Rental. United Arab Emirates.</p>

            <Link to="/termsCondition" className="privacy">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
