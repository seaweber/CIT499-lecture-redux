import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggle, changeCountry } from '../../redux/actions/setActions';

function Product ( props ) {

    const dispatch = useDispatch();

    const toggle = useSelector( state => state.toggle );
    const user = useSelector( state => state.user );
    const products = useSelector( state => state.products );

    const data = products.find( product => product.id === parseInt( props.match.params.id ) );

    return(
        <div>
            <h1>{ data ? data.name : 'Product does not exist' }</h1>
            <h1>{ data ? data.cost[user.country] : '' }</h1>
            <h3>{ toggle ? "I am on" : "My existence is damned" }</h3>

            <button
                onClick={ () => dispatch( setToggle() ) }>
                Toggle Power
            </button>
            <button
                onClick={ () => dispatch( changeCountry('USA') ) }>
                USA
            </button>
            <button
                onClick={ () => dispatch( changeCountry('CAN') ) }>
                CANADA
            </button>
        </div>
    );
}

export default Product;
