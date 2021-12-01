import React from 'react';
import './App.css';
import Button from './Button'
import Submit from "./Submit";
import Userdata from "./Userdata";
import Radiobutton from "./Radiobutton";

function App() {
    const [strawberries, setStrawberries] = React.useState(0);
    const [bananas, setBananas] = React.useState(0);
    const [apples, setApples] = React.useState(0);
    const [kiwis, setKiwis] = React.useState(0);
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [age, setAge] = React.useState(0);
    const [zipCode, setZipCode] = React.useState('');
    const [delivery, setDelivery] = React.useState('Iedere week');
    const [deliveryTime, setDeliveryTime] = React.useState('');
    const [comments, setComments] = React.useState('');
    const [checkedTerms, toggleCheckedTerms] = React.useState(false);


    function addUp(fruit, setFruit) {
        return setFruit(fruit + 1);
    }
    function subtract(fruit, setFruit) {
        if (fruit === 0) {
            return 0
        } else {
            return setFruit(fruit - 1);
        }
    }
    function reset() {
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setKiwis(0);
    }

    const preventDefault = (e) => {
        e.preventDefault()
    }

  return ( <>

          {/*Opdracht 1*/}
         <form>
             <div className={'fruit'}>
              <Button
                  clickHandlerSubtract={() => {subtract(strawberries, setStrawberries)}}
                  clickHandlerAdd={() => {addUp(strawberries,setStrawberries)}}
                  product={'🍓 Aardbeien'}
                  disabled={strawberries === 0}
                  amount={strawberries}
                  className={strawberries > 0 ? "red" : ''}
              />
              <Button
                  clickHandlerSubtract={() => {subtract(bananas, setBananas)}}
                  clickHandlerAdd={() => {addUp(bananas,setBananas)}}
                  product={'🍌 Bananen'}
                  disabled={bananas === 0}
                  amount={bananas}
                  className={bananas > 0 ? "yellow" : ''}
              />
              <Button
                  clickHandlerSubtract={() => {subtract(apples, setApples)}}
                  clickHandlerAdd={() => {addUp(apples, setApples)}}
                  product={'🍏 Appels'}
                  disabled={apples === 0}
                  amount={apples}
                  className={apples > 0 ? "green" : ''}
              />
              <Button
                  clickHandlerSubtract={() => {subtract(kiwis, setKiwis)}}
                  clickHandlerAdd={() => {addUp(kiwis,setKiwis)}}
                  product={'🥝 Kiwi`s'}
                  disabled={kiwis === 0}
                  amount={kiwis}
                  className={kiwis > 0 ? "darkgreen" : ''}
              />
             <Submit input='Reset'
                     disabled={(strawberries + bananas + kiwis + apples === 0)}
                     onClick={(e) => {
                 preventDefault(e);
                 reset();
             }}
             />
             </div>

        {/*Opdracht 2*/}
        <div className={'userInput'}>
            <Userdata
                type='text'
                id={'firstName'}
                forId={'firstName'}
                labelInput={'Voornaam'}
                onChange={(e) => {
                    // Makes sure the user can only input alphabetical letters (and is also able to remove them
                    // because of the else statement.
                    if (e.target.value.charAt(0)) {
                        if (e.target.value.match(/^[A-Za-z]+$/)) {
                            setFirstname(e.target.value);
                        }
                    } else {
                        setFirstname(e.target.value);
                    }
                }
                }
                value={firstname}
                />


             <Userdata
                 type={'text'}
                 id={'lastName'}
                 forId={'lastName'}
                 labelInput={'Achternaam'}
                 onChange={(e) => {
                     // Makes sure the user can only input alphabetical letters (and is also able to remove them
                     // because of the else statement.
                     if(e.target.value.charAt(0)) {
                         if (e.target.value.match(/^[A-Za-z]+$/)) {
                             setLastname(e.target.value)
                         }
                     }
                     else {
                         setLastname(e.target.value);
                     }
             }}
                 value={lastname}
             />
             <Userdata
                 type={'text'}
                 id={'age'}
                 forId={'age'}
                 labelInput={'Leeftijd (max 99)'}
                 value={age < 100 ? age : 0}
                 onChange={(e) => {
                     setAge(e.target.value);
                 }}
                 />

             <Userdata
                type={'text'}
                id={'zipcode'}
                forId={'zipcode'}
                labelInput={'Postcode 4 cijfers 2 letters: '}
                value={zipCode}
                onChange={(e) => {
                    //Makes sure that the user can only put in 4 numbers and 2 letters (dutch zipcodes)
                    if (e.target.value.charAt(0) < 10 && e.target.value.charAt(1) < 10
                        && e.target.value.charAt(2) < 10 && e.target.value.charAt(3) < 10 &&
                        e.target.value.length < 5) {
                        setZipCode(e.target.value);
                    }
                    //The else if statements below where necessary otherwise after charAt 4 the user could've
                    // always typed anything he wanted.
                    else if (e.target.value.charAt(4).match(/^[A-Za-z]+$/) && e.target.value.length < 6) {
                        setZipCode(e.target.value);
                } else if (e.target.value.charAt(5).match(/^[A-Za-z]+$/) && e.target.value.length < 7) {
                        setZipCode(e.target.value);
                    }
                }
                }
                 />
             <p>BezorgFrequentie</p>
             <select onChange={(e) => {
                 setDelivery(e.target.value);
             }}>
                 <option value='Iedere week'>Iedere week</option>
                 <option value='Om de week'>Om de week</option>
                 <option value='Om de maand'>Om de maand</option>
             </select>

            <div className={'radio'}>
             <Radiobutton
                 type={'radio'}
                 name={'deliveryTime'}
                 id={'radio1'}
                 forId={'radio1'}
                 labelInput={'Overdag'}
                 onChange={(e) => {
                     setDeliveryTime(e.target.value);
                 }}
                 value='Overdag'
                 />

             <Radiobutton
                 type={'radio'}
                 name={'deliveryTime'}
                 id={'radio2'}
                 forId={'radio2'}
                 labelInput={'`S avonds'}
                 value='`S avonds'
                 onChange={(e) => {
                     setDeliveryTime(e.target.value);
                 }}
             />
            </div>

             <p>Opmerkingen</p>
             <textarea rows="5" cols="40" value={comments} onChange={(e) => {
                 setComments(e.target.value);
             }}> </textarea>

            <p><a href={''} target={'_blank'}> Read terms and conditions</a></p>
             <input
                 type="checkbox"
                 name="terms-and-conditions"
                 id="terms-and-conditions"
                 checked={checkedTerms}
                 onChange={() => toggleCheckedTerms(!checkedTerms)}
             />
             <label htmlFor={'terms-and-conditions'}>Ik ga akkoord met de voorwaarden!</label>
            <Submit
                input={'Verzenden!'}
                disabled={checkedTerms === false ?? 'disabled'}
                onClick={(e) => {
                    preventDefault(e);
                    // A lot of console.logs to log it neat in the console.
                    console.log('De gegevens van de geplaatste bestelling:')
                    console.log(strawberries + ' aardbeien');
                    console.log(bananas + ' bananen');
                    console.log(kiwis + ' kiwis');
                    console.log(apples + ' appels');
                    console.log('Voornaam: ' + firstname);
                    console.log('Achternaam: ' + lastname);
                    console.log('Leeftijd: ' + age);
                    console.log('postcode: ' + zipCode);
                    console.log('bezorgen: ' + delivery);
                    console.log('bezorgtijd: ' + deliveryTime);
                    console.log('opmerkingen: ' + comments);
                    console.log('checkedTerms: ' + checkedTerms);
                }}
            />
        </div>
        </form>
      </>
  );
}

export default App;
