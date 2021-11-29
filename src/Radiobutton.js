import React from 'react';

function Radiobutton ({id, forId, labelInput, type, value, name, onChange}) {
    return (
        <div id='radio'>
            <input id={id} type={type} value={value} name={name} onChange={onChange}/>
            <label htmlFor={forId}>{labelInput}</label>
        </div>

    );
}




export default Radiobutton;