import React, { useState } from 'react';
import NavTabs from '../components/navTabs';
import RacingItems from '../components/RacingItems';
import '../styles/index.css'
import '../styles/racing.css';

const data01 = [
  { id: 1, date: '17/09/2024', day: 'Ter', hour: '19:00 - 21:00', locality: '', bet: true },
  { id: 2, date: '17/09/2024', day: 'Ter', hour: '19:00 - 21:00', locality: '', bet: true },
];

const data02 = [
  { id: 1, date: '16/09/2024', day: 'Seg', hour: '19:00 - 21:00', locality: '', bet: false },
  { id: 2, date: '16/09/2024', day: 'Seg', hour: '19:00 - 21:00', locality: '', bet: false },
];

const data03 = [
  { id: 1, date: '15/09/2024', day: 'Dom', hour: '19:00 - 21:00', locality: '', bet: false },
  { id: 1, date: '15/09/2024', day: 'Dom', hour: '19:00 - 21:00', locality: '', bet: false },
];

const Racing = () => {
  const [activeTab, setActiveTab] = useState('proximas');

  const getData = () => {
    switch (activeTab) {
      case 'passadas':
        return data02;
      case 'canceladas':
        return data03;
      case 'proximas':
      default:
        return data01;
    }
  };

  return (
    <section className="racingSection">
      <div>
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