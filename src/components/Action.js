import React from 'react';

/**
 * Statelsess | Action
 * 
 * @param {*} props 
 */
const Action = (props) => (
    <div>
        <button
            onClick={props.handlePick}
            disabled={!props.hasOptions}>
            What should I do?
      </button>
    </div>
);

export default Action;