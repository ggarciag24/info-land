import React from 'react'


function OptionCard(props){
    return (
    <div className='option' onClick={props.handleSelect}>
        {props.name}
    </div>
    )
}

export default OptionCard