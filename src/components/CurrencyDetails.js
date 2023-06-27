import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getCurrency } from '../redux/Currencies/currenciesSlice';

function CurrencyDetails() {
      const  {symbols}  = useParams();
      const dispatch= useDispatch();
       const { currencies, currency} = useSelector((store) => store.currencies);
          let currencyDetail ='';
           currencies.forEach((curr) => {
            if(curr.symbol===symbols){
              currencyDetail= curr.name;
            }
           });

      useEffect(() => {
        dispatch(getCurrency(symbols))
      }, [])
      
  return (
    <div>
      <ul>
        <li>
          One {currencyDetail} is worth {currency.usd} US dollars
        </li>
        <li>
          One {currencyDetail} is worth {currency.usd} Canadian dollars
        </li>
        <li>
          One {currencyDetail} is worth {currency.eur} euros
        </li>
        <li>
          One {currencyDetail} is worth {currency.btc} bitcoin
        </li>
        <li>
          One {currencyDetail} is worth {currency.chf} Swiss franc
        </li>
        <li>
          One {currencyDetail} is worth {currency.sek} Swedish krona
        </li>
        <li>
          One {currencyDetail} is worth {currency.nok} Norwegian Krone
        </li>
        <li>
          One {currencyDetail} is worth {currency.dkk} Danish Krone
        </li>
        <li>
          One {currencyDetail} is worth {currency.aud} Australian dollars
        </li>
        <li>
          One {currencyDetail} is worth {currency.nzd} New Zealand dollars
        </li>
        <li>
          One {currencyDetail} is worth {currency.hkd} Hong Kong dollars
        </li>
        <li>
          One {currencyDetail} is worth {currency.twd} New Taiwan dollars
        </li>
        <li>
          One {currencyDetail} is worth {currency.sgd} Singapore dollars
        </li>
        <li>
          One {currencyDetail} is worth {currency.cny} Chinese renminbi
        </li>
        <li>
          One {currencyDetail} is worth {currency.jpy} Japanese yen
        </li>
        <li>
          One {currencyDetail} is worth {currency.krw} South Korean won
        </li>
        <li>
          One {currencyDetail} is worth {currency.inr} Indian rupee
        </li>
        <li>
          One {currencyDetail} is worth {currency.mxn} Mexican peso
        </li>
        <li>
          One {currencyDetail} is worth {currency.brl} Brazilian real
        </li>
        <li>
          One {currencyDetail} is worth {currency.kyd} Cayman Island dollar
        </li>
        <li>
          One {currencyDetail} is worth {currency.gip} Gibraltar pound
        </li>
        <li>
          One {currencyDetail} is worth {currency.jod} Jordanian dinar
        </li>
        <li>
          One {currencyDetail} is worth {currency.omr} Omani rial
        </li>
        <li>
          One {currencyDetail} is worth {currency.bdh} Bahraini dinar
        </li>
        <li>
          One {currencyDetail} is worth {currency.kwd} Kuwaiti dinar
        </li>
      </ul>
      <ul>
        <li>
          One {currencyDetail} is worth {currency.pln} Polish złoty
        </li>
        <li>
          One {currencyDetail} is worth {currency.thb} Thai baht
        </li>
        <li>
          One {currencyDetail} is worth {currency.ils} Israeli new shekel
        </li>
        <li>
          One {currencyDetail} is worth {currency.idr} Indonesian rupiah
        </li>
        <li>
          One {currencyDetail} is worth {currency.czk} Czech koruna
        </li>
        <li>
          One {currencyDetail} is worth {currency.aed} UAE dirham
        </li>
        <li>
          One {currencyDetail} is worth {currency.try} Turkish lira
        </li>
        <li>
          One {currencyDetail} is worth {currency.huf} Hungarian forint
        </li>
        <li>
          One {currencyDetail} is worth {currency.clp} Chilean peso
        </li>
        <li>
          One {currencyDetail} is worth {currency.sar} Saudi riyal
        </li>
        <li>
          One {currencyDetail} is worth {currency.php} Philippine peso
        </li>
        <li>
          One {currencyDetail} is worth {currency.myr} Malaysian ringgit
        </li>
        <li>
          One {currencyDetail} is worth {currency.cop} Colombian peso
        </li>
        <li>
          One {currencyDetail} is worth {currency.rub} Russian ruble
        </li>
        <li>
          One {currencyDetail} is worth {currency.ron} Romanian leu
        </li>
        <li>
          One {currencyDetail} is worth {currency.pen} Peruvian sol
        </li>
        <li>
          One {currencyDetail} is worth {currency.bgn} Bulgarian lev
        </li>
        <li>
          One {currencyDetail} is worth {currency.ars} Argentine peso
        </li>
      </ul>
    </div>
  );
}

export default CurrencyDetails