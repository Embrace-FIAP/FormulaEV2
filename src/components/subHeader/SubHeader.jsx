import React from 'react'
import './subHeader.css'

const SubHeader = ({ setActiveTab }) => {
  
    return (
      <section className='subHeaderSection'>
        <nav>
          <button onClick={() => setActiveTab('proximas')}>Próximas</button>
          <button onClick={() => setActiveTab('passadas')}>Passadas</button>
          <button onClick={() => setActiveTab('canceladas')}>Canceladas</button>
        </nav>
      </section>
      
    );
  };

export default SubHeader