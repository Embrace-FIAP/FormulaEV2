import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faBolt } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import SubHeader from '../../components/subHeader/SubHeader';
import DataItems from '../../components/dataItems/DataItems';
import gamerpic1 from '../../assets/image/randomGamerpic01.jpg';
import gamerpic2 from '../../assets/image/randomGamerpic02.jpg';
import gamerpic3 from '../../assets/image/randomGamerpic03.jpg';
import gamerpic6 from '../../assets/image/randomGamerpic06.jpg';
import './leaderboard.css';

const monthlyBestPilots = [
  { id: 1, name: 'João Silva', points: 300 },
  { id: 2, name: 'Carlos Pereira', points: 250 },
  { id: 3, name: 'Maria Oliveira', points: 230 },
];

const annualBestPilots = [
  { id: 1, name: 'Lucas Santos', points: 1200 },
  { id: 2, name: 'Ana Costa', points: 1150 },
  { id: 3, name: 'Fernanda Lima', points: 1100 },
];

const tabOptions = [
  { id: 'monthly', label: 'Mensal' },
  { id: 'annual', label: 'Anual' },
];

const users = [
  { id: 1, name: 'João Silva', lap: 12, points: 150, ranking: 1, gamerpic: gamerpic1 },
  { id: 2, name: 'Maria Oliveira', lap: 53, points: 200, ranking: 2, gamerpic: gamerpic2 },
  { id: 3, name: 'Carlos Pereira', lap: 23, points: 120, ranking: 3, gamerpic: gamerpic3 },
];

const profile = [
  { id: 1, name: 'João Silva', lap: 12, points: 150, ranking: 1, gamerpic: gamerpic6 }
];

const races = [
  { id: 2, dayWeek: 'Ter', dayMonth: '18', hour: '19:00 - 21:00', place:'São Paulo - Brasil', bet: 1923 }
];

const Leaderboard = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [activeTab, setActiveTab] = useState('monthly');

  useEffect(() => {
    axios.get('#')
    .then(response => {
      setUser(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.error(error);
      setLoading(false);
    });
  }, []);

  if(loading) {
    return <p>Carregando...</p>
  }

  const renderPilotItem = (pilot) => (
    <div id='pilotItem'>
      <p>{pilot.name}</p>
      <p>Pontos: {pilot.points}</p>
    </div>
  );

  return (
    <section className='leaderboardSection'>
      <div className='leaderboardHeader'>
        <h1>Placar de Líderes</h1>
        <p>Saiba quem são os maiores vencedores e qual sua posição no placar.</p>
      </div>

      <div className='leaderboardContent'>
        <div className='leftSection'>
          <div className='bestPilots'>
            <h2>Melhores Pilotos ({activeTab === 'monthly' ? 'Mensal' : 'Anual'})</h2>
            <SubHeader tabs={tabOptions} setActiveTab={setActiveTab} />
            <DataItems
              data={activeTab === 'monthly' ? monthlyBestPilots : annualBestPilots}
              renderItem={renderPilotItem}
            />
          </div>
        </div>

        <div className='rightSection'>
          <div className='featuredUsers'>
            <h2>Usuários em Destaque</h2>
            <div id='featuredUsersContent'>
              {users.map(user => (
                <div key={user.id} className='user'>
                  <div className='userContent'>
                    <img src={user.gamerpic} alt="gamerpic" className='gamerpic' />
                    <div className="userDetails">
                      <p className="userName">{user.name}</p>
                    </div>
                  </div>
                  <div className='userStats'>
                    <p className="points">
                      {user.points}
                      <FontAwesomeIcon icon={faBolt} />
                    </p>
                    <p className="lap">Voltas: {user.lap}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='personalProfile'>
            <h2>Seu Perfil</h2>
            {profile.map(profile => (
              <div key={profile.id} className='user'>
                <div className='userContent'>
                  <img src={profile.gamerpic} alt="gamerpic" className='gamerpic' />
                  <div className="userDetails">
                    <p className="userName">{profile.name}</p>
                  </div>
                </div>
                <div className='footerUserContent'>
                  <div className='userStats'>
                    <p className="points">
                    {profile.points}
                    <FontAwesomeIcon icon={faBolt} />
                    </p>
                    <p className="lap">Voltas: {profile.lap}</p>
                  </div>

                  <div>
                    <button className='darkButton'>Ver mais</button>
                  </div>

                </div>

              </div>
            ))}
          </div>

          <div className='nextRaces'>
            <h2>Próximas Corridas</h2>
            <div className="racingItems">
              {races.map((item) => (
                <div key={item.id} className="racerItem">
                  <div>
                    <p id="dayWeek">{item.dayWeek}</p>
                    <p id="dayMonth">{item.dayMonth}</p>
                  </div>

                  <div id="locate">
                    <p>
                      <FontAwesomeIcon icon={faLocationDot} />
                      {item.place}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faClock} />
                      {item.hour}
                    </p>
                  </div>

                  <div id="bet">
                    <p>Aposta Total:</p>
                    <p>
                      {item.bet}
                      <FontAwesomeIcon icon={faBolt} />
                    </p>
                  </div>

                  <div>
                    <button className="darkButton">Editar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Leaderboard;