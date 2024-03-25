import { useState } from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../ExploreMenu/ExploreMenu";
import "./Home.css";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
const Home = () => {
  const [category, setCategory] = useState("all");
  console.log(category);
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  );
};

export default Home;
