import React from 'react';

function Button ({product, amount, clickHandlerAdd, clickHandlerSubtract, disabled, className}) {
    return (
        <section className={className} id={'section'}>
            <p>{product}</p>
            <input type="button" value={'-'} disabled={disabled} onClick={clickHandlerSubtract} />
            <p>{amount}</p>
            <input type="button" value={'+'} onClick={clickHandlerAdd} />
        </section>
    );
}




export default Button;