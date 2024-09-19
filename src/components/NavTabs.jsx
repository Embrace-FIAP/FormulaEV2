import React from 'react'

const NavTabs = ({ setActiveTab }) => {
    return (
      <nav>
        <button onClick={() => setActiveTab('proximas')}>Próximas</button>
        <button onClick={() => setActiveTab('passadas')}>Passadas</button>
        <button onClick={() => setActiveTab('canceladas')}>Canceladas</button>
      </nav>
    );
  };

export default NavTabs