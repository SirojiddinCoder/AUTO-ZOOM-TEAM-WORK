import { useEffect, useState } from "react";
import { getBrands, getCars, getCategories, getModels } from "../../getData/getData";
import "./CarsFilter.css";
import CarsCard from "./CarsCard";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";

const CarsFilter = () => {
  const [brands, setBrands] = useState([]);
  const [cars, setCars] = useState([]);
  const [carsFilter, setCarsFilter] = useState([]);
  const [models, setModels] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const cars = await getCars();
    const brands = await getBrands();
    setBrands(brands?.data);
    setCars(cars?.data);
    setCarsFilter(cars?.data);
    const models = await getModels();
    setModels(models?.data);
    const categories = await getCategories();
    setCategories(categories?.data);
    console.log(categories?.data);
  };
  const [offers, setOffers] = useState([
    { id: 1, text: "3 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE", checked: false },
    { id: 2, text: "3 DAYS RENT = 1300 AED🔥 ()", checked: false },
    { id: 3, text: "3 DAYS RENT = 1800 AED🔥", checked: false },
    { id: 4, text: "NO DEPOSIT", checked: false },
    { id: 5, text: "5000 AED🔥 ALL INCLUSIVE", checked: false },
    { id: 6, text: "2 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE", checked: false },
    { id: 7, text: "Rent Ferrari Dubai", checked: false },
    { id: 8, text: "4 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE", checked: false },
  ]);
  const [carType, setCarType] = useState([
    { id: 9, text: "SUV", checked: false },
    { id: 10, text: "Sports Cars", checked: false },
    { id: 11, text: "Luxury Cars", checked: false },
    { id: 12, text: "Convertible Cars", checked: false },
    { id: 13, text: "Budget Cars", checked: false },
    { id: 14, text: "American Brands", checked: false },
  ]);
  const [activeModel, setActiveModel] = useState("");
  let activeBrands = []
  let value = JSON.parse(localStorage.getItem("brands"))
  if (value) {
    activeBrands = value
  }
  const handleBrands = (item) => {
    console.log(item);
    activeBrands.push(item?.title)
    localStorage.setItem("brands", JSON.stringify(activeBrands))
    console.log(activeBrands);
  };
  const handleModels = (e) => {
    console.log(e.target.value);
    setActiveModel(e.target.value);
  };
  const applyFilter = () => {
    let filterCars = carsFilter.filter(
      (item) =>
        activeBrands.includes(item?.brand?.title) || item?.models?.name === activeModel
    );
    console.log(filterCars);
    setCars(filterCars)
  };
  const PreventDefault = (e) => {
    e.preventDefault()
  }
  const resetAll = () => {
    localStorage.removeItem("brands")
    getData()
  }
  const [sidebarVisible, setSideBarVisible] = useState(false);
  return (
    <div className="cars__filter">
      <button
        onClick={() => setSideBarVisible(!sidebarVisible)}
        className={sidebarVisible ? "close__cars-sidebar" : "none"}
      >
        <FaArrowLeftLong />
      </button>
      <button
        onClick={() => setSideBarVisible(!sidebarVisible)}
        className={sidebarVisible ? "none" : "cars__filter-visible"}
      >
        <GiSettingsKnobs className="settings__icon" />
      </button>
      <aside className={sidebarVisible ? "block" : "cars__sidebar"}>
        <h2 className="cars__sidebar-title">Filter by</h2>
        <h3 className="cars__sidebar-title2">Offers</h3>
        <form onSubmit={PreventDefault}>
          <div className="cars__sidebar-filter">
            {offers?.map((item, index) => {
              return (
                <div key={index}>
                  <input type="checkbox" id={item?.id} />
                  <label htmlFor={item?.id}>{item?.text}</label>
                </div>
              );
            })}
          </div>
          <div className="cars__sidebar-filter">
            <h2>Car type</h2>
            {categories?.map((item, index) => {
              return (
                <div key={index}>
                  <input type="checkbox" id={item?.id} />
                  <label htmlFor={item?.id}>{item?.name_en}</label>
                </div>
              );
            })}
          </div>
          <div className="cars__sidebar-filter">
            <h2>Brands</h2>
            {brands?.map((item, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={item?.id}
                    onChange={() => handleBrands(item)}
                  />
                  <label htmlFor={item?.id}>{item?.title}</label>
                </div>
              );
            })}
          </div>
          <div className="cars__sidebar-filter">
            <h2>Models</h2>
            <select onChange={handleModels}>
              {models?.map((item, index) => {
                return (
                  <option value={item?.name} key={index}>
                    {item?.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="cars__sidebar-buttons">
            <button className="cars__sidebar-reset" type="reset" onClick={resetAll}>Reset</button>
            <button className="cars__sidebar-filter-btn" onClick={applyFilter}>
              Apply Filter
            </button>
          </div>
        </form>
      </aside>
      <div className="cars__right">
        <h1 className="cars__right-title">
          Luxury Cars for Rent in Dubai / Hire the latest super car
        </h1>
        <div className="cars__cards">
          {cars?.length > 0 ? cars?.map((item, index) => {
            return <CarsCard key={index} item={item} />;
          }) : <h3>Not found</h3>}
        </div>
      </div>
    </div>
  );
};

export default CarsFilter;
