import React from 'react';

function Userdata ({id, forId, labelInput, type, value, onChange}) {
    return (
        <div className={'userData'}>
            <label htmlFor={forId}>{labelInput}</label>
            <input id={id} type={type} value={value} onChange={onChange}/>
        </div>

    );
}




export default Userdata;