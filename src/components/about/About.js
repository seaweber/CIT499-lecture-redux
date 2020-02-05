import React from 'react';
import { connect } from 'react-redux';

function About ( props ) {

    return (
        <div>
            Name: { props.user.firstName } { props.user.lastName }
            <br/>
            Country: { props.user.country }
        </div>
    );
}

const mapStateToProps = state => {

    return {
        user: state.user
    }
};

export default connect( mapStateToProps )( About );
