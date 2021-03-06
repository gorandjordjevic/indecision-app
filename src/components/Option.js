import React from 'react';

/**
 * 
 * Stateless | Option
 * 
 * @param {*} props 
 */
const Option = (props) => (
    <div>
        {props.optionText}
        <button
            onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}
        >remove</button>
    </div>
);

export default Option;