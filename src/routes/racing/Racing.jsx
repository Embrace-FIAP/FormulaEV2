import React, { useState } from 'react';
import SubHeader from '../../components/subHeader/SubHeader';
import DataItems from '../../components/dataItems/DataItems';
import '../../styles/index.css';
import './racing.css';

const raceData = {
  proximas: [
    { id: 1, day: 'Ter', hour: '19:00 - 21:00', bet: true },
    { id: 2, day: 'Ter', hour: '19:00 - 21:00', bet: true },
  ],
  passadas: [
    { id: 1, day: 'Seg', hour: '19:00 - 21:00', bet: false },
    { id: 2, day: 'Seg', hour: '19:00 - 21:00', bet: false },
  ],
  canceladas: [
    { id: 1, day: 'Dom', hour: '19:00 - 21:00', bet: false },
    { id: 2, day: 'Dom', hour: '19:00 - 21:00', bet: false }, 
  ],
};

const tabOptions = [
  { id: 'proximas', label: 'Próximas' },
  { id: 'passadas', label: 'Passadas' },
  { id: 'canceladas', label: 'Canceladas' },
];

const Racing = () => {
  const [activeTab, setActiveTab] = useState('proximas');

  const renderRaceItem = (item) => (
    <>
      <h3>{item.day}</h3>
      <p>{item.hour}</p>
      {item.bet ? <p>Apostas abertas</p> : <p>Sem apostas</p>}
    </>
  );

  return (
    <section className="racingSection">
      <div className='headerTitle'>
        <h1>Corridas</h1>
        <p>Veja os detalhes das corridas que já acabaram e das que estão por vir!</p>
      </div>

      <div className="subHeader">
        <SubHeader tabs={tabOptions} setActiveTab={setActiveTab} />
        <DataItems data={raceData[activeTab]} renderItem={renderRaceItem} />
      </div>

    </section>
  );
};

export default Racing;