import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null); //empty object as the data returned from fetch is an object.
  // const params = useParams();
  // const {id} = params; also written as:
  const { resId } = useParams();

  useEffect(() => {
    getRestaurantInfo();
  },[]);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=" + resId
    );
    const json = await data.json();
    setRestaurant(json?.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurant?.cards?.[0]?.card?.card?.info?.name}</h2>
        <img
          src={
            IMG_CDN_URL +
            restaurant?.cards?.[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt=""
        />
        <h3>{restaurant?.cards?.[0]?.card?.card?.info?.areaName}</h3>
        <h3>{restaurant?.cards?.[0]?.card?.card?.info?.city}</h3>
        <h3>{restaurant?.cards?.[0]?.card?.card?.info?.avgRating} stars</h3>
        <h3>{restaurant?.cards?.[0]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {restaurant &&
              Object.values(
                restaurant
              )?.[1]?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards?.map(
                (item) =>(
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                  )
              )
            }
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
