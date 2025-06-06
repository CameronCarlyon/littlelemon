import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const CartEmpty = () => {

    const basketMessages = [
        "Your basket’s feeling a little lonely… why not add something tasty?",
        "Nothing in here yet, but your next Mediterranean feast is just a click away!",
        "Craving something delicious? Check out our specials and fill up your basket.",
        "Your cart tells us you're a minimalist, but our falafel would disagree!",
        "An empty basket? Not on our watch! Let’s add some flavour to your day.",
        "Your basket is empty. Might we tempt you with our famous Shakshuka?",
        "Like an olive grove without olives, your basket is empty. Let’s fix that!",
    ];

    let randomBasketMessage = basketMessages[Math.floor(Math.random() * basketMessages.length)];

    return (
        <div className='no-page'>
            <FontAwesomeIcon icon={faShoppingBasket} size="5x" className='no-page-code'/>
            <p className='no-page-message'>{randomBasketMessage}</p>
            <Link to="/menu"><div className='btn-primary'>Check Out The Menu</div></Link>
        </div>
    );
};

export default CartEmpty;