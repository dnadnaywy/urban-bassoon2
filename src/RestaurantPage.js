import { useState, useEffect } from 'react'
import DishCard from "./components/cards/DishCard";
import "./styles/pages/RestaurantPage.css";
import Header from "./components/common/Header.js";
import OrderCard from './components/cards/OrderWithCard';

import HeartWrapEmpty from "./images/icons/heartWrappedEmptyIcon.svg";


const RestaurantPage = ({ restaurant }) => {

    const [restaurantData, setRestaurantData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8090/api/v1/restaurants/1')
            .then(response => response.json())
            .then(data => {
                setRestaurantData(data);
                setIsLoading(false);
            })
            .catch(error => console.error(error));
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Header />

            <div className="restaurant_page">

                <div className='restaurant_img'>
                    <img src="src/images/pictures/restaurants/MammaMia.png" alt="sorry" className='cover' />
                    <div className='shadow'></div>
                    <p>{restaurantData.name}</p>
                    <div className='heart_img'>
                        <img src={HeartWrapEmpty} alt='sorrynoemptyheart'></img>
                    </div>
                </div>

                <div className='elements'>
                    <div className='categories'>
                        <label>Categories</label>
                        <div className='types_of_food'>
                            {restaurantData.categories?.map((categoryItem) => (
                                <label key={categoryItem.category} onClick={() => handleClickScroll(categoryItem.category)}>
                                    {categoryItem.category}
                                </label>
                            ))} 
                        </div>
                    </div>

                    <div className='middlecontent'>
                        <div className='order_offers'>
                            <div className='order'>
                                <p className='order-with-title'>Order with:</p>
                                <div className='order_options'>
                                    <OrderCard />
                                </div>
                            </div>
                            <div className='offers'>
                                <p>Today's offers</p>
                                <div className='offers_box'></div>
                            </div>
                        </div>

                        <div className='outOfCategories'>
                            {restaurantData.categories?.map((categoryItem) => (
                                <div key={categoryItem.category}>
                                    <p id={categoryItem.category}>{categoryItem.category}</p>
                                    <div className='the_dishes'>
                                        {categoryItem.products?.map((product) => (
                                            <DishCard key={product.id} dish={product} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantPage;
