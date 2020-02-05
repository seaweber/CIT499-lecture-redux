import React from 'react';
import { connect } from "react-redux";


function Products ( props ) {

    const items = props.products.map(( product, index ) => {

        return  <div key={ index }>
                    <h3>{ product.name }</h3>
                    <h4>{ `Cost in ${ props.user.country } ${ product.cost[ props.user.country ] }` }</h4>
                    <br/>
                </div>

    });

    return (
        <div>
            Products

            { items }
        </div>
    );
}

const mapStateToProps = state => {

    return {
        products: state.products,
        user: state.user
    }
};

export default connect( mapStateToProps )( Products );
