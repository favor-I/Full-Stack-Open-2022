import React from "react";

const Cards = (props) => {
    return (
        <>
            <h1>{props.name}</h1>
            <button>{props.button}</button>
        </>
    );
}

export default Cards;