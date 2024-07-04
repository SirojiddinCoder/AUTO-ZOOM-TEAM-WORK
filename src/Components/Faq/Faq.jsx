import styles from "../Faq/Faq.module.css";
import Accordion from "./Accordian/Accordian";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();

  const items = t("faq.items", { returnObjects: true });

  console.log(items); // Add this line to see what items looks like

  return (
    <div className={styles.big_container}>
      <div className={styles.faq_container}>
        <h2 className={styles.title}>{t("faq.title")}</h2>
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default Faq;
