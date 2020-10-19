import React from 'react';


const Addition = (props) => {
    return (
        <>
        <p>
            { props.numberOne } + { props.numberTwo } = { props.numberOne + props.numberTwo }
        </p>
        </>
    )
}

export default Addition;