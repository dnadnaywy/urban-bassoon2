import React from 'react'
import Header from "./components/common/HeaderRestPg.js"
import DishCard from "./components/cards/DishCard";
import "./styles/pages/FavouritesPage.css";
// import HeartWrapFull from "./images/icons/heartWrappedFullIcon.svg";
import restaurantData from "./restaurants.json";
import RGL, { WidthProvider } from 'react-grid-layout';


function FavouritesPage ()
{
    function RestaurantCard(props) {
        return (
            <div className='restaurantCard' key={props.index}>
                <div className='restaurantCardImage'>
                    <img src={props.image} alt='restaurant' />
                </div>
                <div className='restaurantCardData'>
                    <div className='restaurantCardName'>
                        {props.name}
                    </div>
                   
                    
                </div>
    
            </div>
        );
    }

    

    const dish = {
        "Name": "Hummus",
        // "Heart": HeartWrapFull,
        "Price": "$12.00", 
        "Description":"Chickpea paste spread on our freshly baked flatbread.",
        "Image":"https://static.wixstatic.com/media/89b018_294b8dac5a284580bf33a81b5eefa407~mv2.png/v1/crop/x_84,y_0,w_302,h_220/fill/w_180,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Libanesa-Hummus-garbanzo-01.png"
      
      }
    
      const GridLayout = WidthProvider(RGL);
    
        function importAll(r) {
            return r.keys().map(r);
        }
    
        const restaurantImages = importAll(require.context('./images/pictures/restaurants', false, /\.(png|jpe?g|svg)$/));
        restaurantImages.forEach((restaurant) => {
            let currentRestaurant = restaurantData.find(rest => rest.image === restaurant.substring(14, restaurant.indexOf('.')) + ".png")
            if (currentRestaurant) {
                currentRestaurant.image = restaurant;
            }
        });

    const restaurantCards = restaurantData.map((restaurant, index) => (
        <RestaurantCard
            key={index}
            index={restaurant.index}
            name={restaurant.name}
            // deliveryFee={restaurant.deliveryFee}
            // deliveryTime={restaurant.deliveryTime}
            // rating={restaurant.rating}
            image={restaurant.image}
            // priceRange={restaurant.priceRange}
        />
    ));

    
    const colNumber = 2;

    const layout = restaurantData.map((restaurant, index) => ({
        i: index.toString(),
        x: index % colNumber,
        y: Math.floor(index / 3),
        w: 1,
        h: 1,
        static: true
    }));

    const grid = (
        <GridLayout className="grid" layout={layout} cols={colNumber} rowHeight={400} draggable={false}>
            {restaurantCards}
        </GridLayout>
    );
    return (
        <div className='favourites_page'>
            <div className='header'>
                <Header />
            </div>

            <div className='restaurants'>
                <p>Restaurants</p>
                <div className='the_restaurants'>
                    {grid}
                </div>
            </div>

            <div className='products'>
                <p>Products</p>
                
                <div className='the_dishes'>

                    <DishCard dish={dish}/> 
                    <DishCard dish={dish}/> 
                    <DishCard dish={dish}/> 
                    <DishCard dish={dish}/> 
                    <DishCard dish={dish}/> 
                    <DishCard dish={dish}/> 

                </div>
            </div>
        </div>

    );
}

export default FavouritesPage;