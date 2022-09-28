import React from 'react'


function OptionCard(props){
    return (
    <div className='option' onClick={() => props.handleOptionSelect(props.name)} data-testid='option'>
        {props.name}
    </div>
    )
}

export default OptionCard