import React from 'react';
import './racingItems.css'

const RacingItems = ({ data }) => {
  return (
    <div className="racingItems">
      {data.map((item) => (
        <div className="blockRacingItem" key={item.id}>
          <h3>{item.day}</h3>
          <p>{item.hour}</p>
          {item.bet ? <span>Apostas abertas</span> : <span>Sem apostas</span>}
        </div>
      ))}
    </div>
  );
};

export default RacingItems;