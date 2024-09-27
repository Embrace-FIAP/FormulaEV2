// SubHeader.jsx
import React, { useState } from 'react';
import './subHeader.css';

const SubHeader = ({ tabs, setActiveTab }) => {
  const [activeButton, setActiveButton] = useState(tabs[0].id);

  const handleClick = (tabId) => {
    setActiveTab(tabId);
    setActiveButton(tabId);
  };

  return (
    <section className='subHeaderSection'>
      <nav>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeButton === tab.id ? 'active' : ''}
            onClick={() => handleClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </section>
  );
};

export default SubHeader;