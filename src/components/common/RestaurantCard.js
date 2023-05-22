import React from "react";
import {ReactComponent as HeartWrappedEmptyIcon} from '../../images/icons/heartWrappedEmptyIcon.svg';
import {ReactComponent as HeartWrappedFullIcon} from '../../images/icons/heartWrappedFullIcon.svg';

function RestaurantCard(props) {

    const setIsFavClicked = useState (false);

    const handleFavClick = () => {
        setIsFavClicked(! props.isFavClicked);
    };

    return (
        <div className='restaurantCard' key={props.index}>
            <div className='restaurantCardImage'>
                <img src={props.imagesData[props.index]} alt='restaurant' />
            </div>
            <div className='restaurantCardData'>
                <div className='restaurantCardName'>
                    {props.name}
                </div>
                <div className='restaurantCardDelivery'>
                    <div className='restaurantCardDeliveryFee'>
                        {props.deliveryFee} delivery fee &nbsp;• &nbsp;
                    </div>
                    <div className='restaurantCardDeliveryTime'>
                        {props.deliveryTime}
                    </div>
                </div>
                <div className='restaurantCardRating'>
                    {props.rating}
                </div>
                <div className='favouriteButton'>
                        <button onClick={handleFavClick}>
                            {props.isFavClicked ? <HeartWrappedFullIcon/> : <HeartWrappedEmptyIcon/>}
                        </button>
                </div>
            </div>

        </div>
    );
}

export default RestaurantCard;