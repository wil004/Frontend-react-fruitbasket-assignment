import React from 'react';

function Submit ({input, onClick, disabled}) {
    return (
    <section>
        <button className={'submit'} type={'submit'} disabled={disabled} onClick={onClick}>{input}</button>
    </section>
    );
}




export default Submit;