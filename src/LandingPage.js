import Header from "./components/common/Header.js";
import './styles/pages/LandingPage.css';
// import address from "./images/icons/rightArrow.png";
import React, { useState, useEffect } from "react";
//import restaurantData from "./restaurants.json";
import RGL, { WidthProvider } from 'react-grid-layout';
import { useMediaQuery } from "react-responsive";
import { DropdownList } from "react-widgets";
import '../node_modules/react-widgets/styles.css';
import axios from 'axios';
import bgImg from './images/pictures/restaurants/LaBella.png';
import {ReactComponent as HeartWrappedEmptyIcon} from './images/icons/heartWrappedEmptyIcon.svg';
import {ReactComponent as HeartWrappedFullIcon} from './images/icons/heartWrappedFullIcon.svg';



const ratingData = [
    { id: 0, name: 'Any' },
    { id: 1, name: '1+' },
    { id: 2, name: '2+' },
    { id: 3, name: '3+' },
    { id: 4, name: '4+' },
    { id: 5, name: '5' }
]

const priceData = [
    { id: 3, name: 'Any' },
    { id: 1, name: '$' },
    { id: 2, name: '$$' },
    { id: 3, name: '$$$' }
]

const deliveryTimeData = [
    { id: 999, name: 'Any' },
    { id: 20, name: '20min' },
    { id: 30, name: '30min' },
    { id: 40, name: '40min' },
    { id: 50, name: '50min' },
    { id: 60, name: '1h' },
    { id: 90, name: '1h 30min' }
]



function LandingPage() {
    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8090/api/v1/restaurants')
            .then(response => setRestaurantData(response.data.content))
            .catch(error => console.log(error));
    }, []);

    const isMob = useMediaQuery({ query: '(max-width: 1200px)' });
    const [rating, setRating] = useState(0);
    const [priceRange, setPriceRange] = useState(3);
    const [deliveryTime, setDeliveryTime] = useState(999);
    const restaurantCards = restaurantData ? restaurantData.filter(restaurant => {
        return restaurant.rating >= rating;
    })
    .map((restaurant,index) => (
        <div key={index}>
          <RestaurantCard
              key={index}
            id={restaurant.id}
            name={restaurant.name}
            rating={restaurant.rating}
            platform={restaurant.platform}
            isFavclicked={restaurant.isFavClicked}
            handleFavClick={restaurant.handleFavClick}
          />
        </div>
      )) : null;
    const colNumber = isMob ? 1 : 3;

    const [isRatingOpen, setIsRatingOpen] = useState(false);
    const toggleRating = () => setIsRatingOpen(!isRatingOpen);
    const ratingSelector = (
        <div className='filterSelector'>
            <div className='filterName'>Rating:</div>
            <DropdownList
                data={ratingData}
                valueField='id'
                textField='name'
                defaultValue='Any'
                onChange={value => {
                    setRating(value.id)
                    toggleRating()
                }}
            />
        </div>

    );

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(999);

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
        console.log(event.target.value);
    }

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
        console.log(event.target.value);
    }

    const minPriceInput = (
        <div className='priceInput'>
            <div className="priceBox">
                <label>Min price:</label>
                <input type="number" value={minPrice} onChange={handleMinPriceChange} />
            </div>
            <div className="priceBox">
                <label>Max price:</label>
                <input type="number" value={maxPrice} onChange={handleMaxPriceChange} />
            </div>
        </div>);

    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const togglePrice = () => setIsPriceOpen(!isPriceOpen);
    const priceRangeSelector = (
        <div className='filterSelector'>
            <div className='filterName'>Price:</div>
            <DropdownList
                data={priceData}
                valueField='id'
                textField='name'
                defaultValue='Any'
                onChange={value => {
                    setPriceRange(value.id)
                    togglePrice()
                }}
            />
        </div>
    );

    const [isDeliveryTimeOpen, setIsDeliveryTimeOpen] = useState(false);
    const toggleDeliveryTime = () => setIsDeliveryTimeOpen(!isDeliveryTimeOpen);
    const deliveryTimeSelector = (
        <div className='filterSelector'>
            <div className='filterName'>Delivery time:</div>
            <DropdownList
                data={deliveryTimeData}
                valueField='id'
                textField='name'
                defaultValue='Any'
                onChange={value => {
                    setDeliveryTime(value.id)
                    toggleDeliveryTime()
                }}
            />
        </div>
    );


    const GridLayout = WidthProvider(RGL);

    const filterSelectorContainer = (
        <div className="filterSelectorContainer">
            {ratingSelector}
            {minPriceInput}
            {deliveryTimeSelector}
        </div>
    );

    function RestaurantCard(props) {
        return (
            <div className='restaurantCard' key={props.index}>

  <div className='ribbon'>Best with - 
  <span className="app-name">
    {props.platform}
    </span></div>
                <div className='restaurantCardImage'>
                    <img src={bgImg} alt='restaurant' />
                </div>
                <div className='restaurantCardData'>
                    <div className='restaurantCardName'>
                        {props.name}
                    </div>
                    {/*  
                    <div className='restaurantCardDelivery'>
                        <div className='restaurantCardDeliveryFee'>
                            Delivery from {props.deliveryFee} lei &nbsp;• &nbsp;
                        </div>
                        <div className='restaurantCardDeliveryTime'>
                            {props.deliveryTime} min &nbsp;• &nbsp;
                        </div> 
                        <div className="restaurantCardPriceRange">
                            {'$'.repeat(parseInt(props.priceRange))}
                        </div>
                    </div> */}
                    <div className='restaurantCardRating'>
                        {props.rating}
                    </div>
                    <div className='favouriteButton'>
                        <button onClick={props.handleFavClick}>
                            {props.isFavClicked ? <HeartWrappedFullIcon/> : <HeartWrappedEmptyIcon/>}
                        </button>
                    </div>
                </div>

            </div>
        );
    }

    const layout = restaurantData.map((restaurant, id) => ({
        i: id.toString(),
        x: (id % 3),
        y: Math.floor(id / 3),
        w: 1,
        h: 1,
        static: true
    }));


    const grid = (
        <GridLayout className="grid" layout={layout} cols={colNumber} rowHeight={400} draggable={false}>
            {restaurantCards}
        </GridLayout>
    );


    const slogan = (
        <div className='slogan'>
            Get <span className='sloganColored'>the best</span> out of your order
        </div>

    );

    const subtitle = (
        <div className='subtitle'>
            Find the best delivery deals of today for your favorite restaurants
        </div>
    );

    const welcomeText = (
        <div className='welcomeText'>
            {slogan}
            {subtitle}
        </div>
    );

    const orderButton = (
        <div className='orderButton'>
            Order now
        </div>
    );

    const productFilter = (
        <div className='productFilter'>

        </div>
    );
    
    return (
        <div>
            <Header />
            <div className='banner'>
                {welcomeText}
                {/* {orderButton} */}
            </div>
            <div className='productFilter'>
                <div className='filterContainer'>
                    <section id="browsehere" />
                    <div className="findFoodText"> Find the best food! </div>
                    {filterSelectorContainer}
                </div>

            </div>
            <div className='restaurantsBody'>
                {grid}


            </div>
        </div>);
};

export default LandingPage;