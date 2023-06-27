import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Currency from './Currency';

function Currencies() {
    const { currencies } = useSelector((store) => store.currencies);

    const [ filterItem, setFilterItem] = useState('')

  const filteredCurrencies = currencies.filter(curr=>curr.name.toLowerCase().includes(filterItem.toLowerCase()))
  console.log(filteredCurrencies);
  let myCurrencies = [];
  (filteredCurrencies.length > 0)
    ? (myCurrencies = filteredCurrencies)
    : (myCurrencies = currencies);
    console.log(currencies);
  return (
    <div>
      <div>
        <input type="text" onChange={(e)=>setFilterItem(e.target.value)}/>
      </div>
      {myCurrencies.map(currency=>(
        <Currency currency={currency}/>
      ))}
    </div>
  )
}

export default Currencies