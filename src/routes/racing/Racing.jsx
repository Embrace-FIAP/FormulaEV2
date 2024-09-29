import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faBolt } from '@fortawesome/free-solid-svg-icons';
import SubHeader from '../../components/subHeader/SubHeader';
import DataItems from '../../components/dataItems/DataItems';
import '../../styles/index.css';
import './racing.css';

const raceData = {

  proximas: [
    { id: 1, dayWeek: 'Qua', dayMonth: '17', hour: '19:00 - 21:00', place:'São Paulo - Brasil' ,bet: 2576},
    { id: 2, dayWeek: 'Ter', dayMonth: '18', hour: '19:00 - 21:00', place:'São Paulo - Brasil', bet: 1923},
  ],
  passadas: [
    { id: 1, dayWeek: 'Ter', dayMonth: '21', hour: '19:00 - 21:00', place:'São Paulo - Brasil' ,bet: 2576},
    { id: 2, dayWeek: 'Sex', dayMonth: '01', hour: '19:00 - 21:00', place:'São Paulo - Brasil', bet: 1923},
  ],
  canceladas: [
    { id: 1, dayWeek: 'Sab', dayMonth: '12', hour: '19:00 - 21:00', place:'São Paulo - Brasil' ,bet: 2576},
    { id: 2, dayWeek: 'Dom', dayMonth: '15', hour: '19:00 - 21:00', place:'São Paulo - Brasil', bet: 1923},
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
      <div className='racerItem'>
        <div>
          <p id='dayWeek'>{item.dayWeek}</p>
          <p id='dayMonth'>{item.dayMonth}</p>
        </div>
        
        <div id='locate'>
          <p>
            <FontAwesomeIcon icon={faLocationDot} />
            {item.place}
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} />
            {item.hour}
          </p>
        </div>

        <div id='bet'>
          <p>Aposta Total:</p>
          <p>
            {item.bet}
            <FontAwesomeIcon icon={faBolt} />
          </p>
        </div>

        <div>
          <button className='darkButton'>Editar</button>
        </div>
      </div>
      
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