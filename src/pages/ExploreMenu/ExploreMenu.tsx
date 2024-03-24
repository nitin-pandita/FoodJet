import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore Menu</h1>
        <p className="explore-menu-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eos
          eveniet sapiente.
        </p>

        <div className="explore-menu-list">
          {menu_list.map((menu, index) => {
            return (
              <div
                onClick={() => setCategory((prev) => prev === menu.menu_name ? "all" : menu.menu_name)}
                className="explore-menu-list-item"
                key={index}
              >
                <img className={category === menu.menu_name ? 'active': ''} src={menu.menu_image} alt="menu image" />
                <p>{menu.menu_name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
