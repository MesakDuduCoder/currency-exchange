import React from 'react'
import { useNavigate } from 'react-router-dom';

function Currency({currency}) {
  const navigate = useNavigate();
  const {name, symbol} = currency
  return (
    <div>
        <div onClick={()=>navigate(`/details/${symbol}`)}>{name}</div>
    </div>
  );
}

export default Currency