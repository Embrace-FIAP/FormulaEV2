import React, { useState } from 'react';
import './subHeader.css';

const SubHeader = ({ setActiveTab }) => {
  const [activeButton, setActiveButton] = useState('proximas');

  const handleClick = (tab) => {
    setActiveTab(tab);
    setActiveButton(tab);
  };

  return (
    <section className='subHeaderSection'>
      <nav>
        <button
          className={activeButton === 'proximas' ? 'active' : ''}
          onClick={() => handleClick('proximas')}
        >
          Próximas
        </button>
        <button
          className={activeButton === 'passadas' ? 'active' : ''}
          onClick={() => handleClick('passadas')}
        >
          Passadas
        </button>
        <button
          className={activeButton === 'canceladas' ? 'active' : ''}
          onClick={() => handleClick('canceladas')}
        >
          Canceladas
        </button>
      </nav>
    </section>
  );
};

export default SubHeader;