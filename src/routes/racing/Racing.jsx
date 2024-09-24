import React, { useState } from 'react';
import NavTabs from '../../components/subHeader/SubHeader';
import RacingItems from '../../components/racingItems/RacingItems';
import '../../styles/index.css';
import './racing.css';

const nextRaces = [
  { id: 1, date: '17/09/2024', day: 'Ter', hour: '19:00 - 21:00', locality: '', bet: true },
  { id: 2, date: '17/09/2024', day: 'Ter', hour: '19:00 - 21:00', locality: '', bet: true },
];

const pastRaces = [
  { id: 1, date: '16/09/2024', day: 'Seg', hour: '19:00 - 21:00', locality: '', bet: false },
  { id: 2, date: '16/09/2024', day: 'Seg', hour: '19:00 - 21:00', locality: '', bet: false },
];

const canceledRaces = [
  { id: 1, date: '15/09/2024', day: 'Dom', hour: '19:00 - 21:00', locality: '', bet: false },
  { id: 1, date: '15/09/2024', day: 'Dom', hour: '19:00 - 21:00', locality: '', bet: false },
];

const Racing = () => {
  const [activeTab, setActiveTab] = useState('proximas');

  const getData = () => {
    switch (activeTab) {
      case 'passadas':
        return pastRaces;
      case 'canceladas':
        return canceledRaces;
      case 'proximas':
      default:
        return nextRaces;
    }
  };

  return (
    <section className="racingSection">
      <div className='headerTitle'>
        <h1>Corridas</h1>
        <p>Veja os detalhes das corridas que já acabaram e das que estão por vir!</p>
      </div>

      <div className="subHeader">
        <NavTabs setActiveTab={setActiveTab} />
      </div>

      <RacingItems data={getData()} />
    </section>
  );
};

export default Racing;