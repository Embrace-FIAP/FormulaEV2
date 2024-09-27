import React from 'react';
import './dataItems.css';

const DataItems = ({ data, renderItem }) => {
  return (
    <div className="dataItems">
      {data.map((item) => (
        <div className="blockDataItem" key={item.id}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};

export default DataItems;