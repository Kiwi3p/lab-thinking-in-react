import React from 'react';

function ProductRow(props) {
    return(
        <tr>
            {props.stocked 
            ? <td>{props.name}</td>
            : <td style={{color: "red"}}>{props.name}</td>
             }
            <td 
            style={{color: props.stocked ?
            "black"
            :
            "red"}}>{props.price}</td>
        </tr>
    )
}

export default ProductRow;