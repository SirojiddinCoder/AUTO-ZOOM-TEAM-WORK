import { BsWhatsapp } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { LuPhone } from "react-icons/lu";

const carsData = [
  {
    component: BsWhatsapp,
    style: "#5AEC5A",
  },
  {
    component: BiLogoTelegram,
    style: "#2374F8",
  },
  {
    component: LuPhone,
    style: "#FFB630",
  },
];

const formInputs = [
  {
    type: "text",
    placeholder: "Name",
    classname: "inputName"
  },
  {
    type: "text",
    placeholder: "Phone",
    classname: "inputName"
  },
  {
    type: "text",
    placeholder: "Period",
    classname: "inputName"
  },
  {
    type: "text",
    placeholder: "Details",
    classname: "inputName"
  },
];
export { carsData, formInputs} ;
