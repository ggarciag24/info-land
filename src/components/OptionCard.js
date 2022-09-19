import React from 'react'


function OptionCard(props){
    return (
    <div className='option' onClick={() => props.handleOptionSelect(props.name)}>
        {props.name}
    </div>
    )
}

export default OptionCard