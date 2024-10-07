import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faBolt } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import SubHeader from '../../components/subHeader/SubHeader';
import DataItems from '../../components/dataItems/DataItems';
import './leaderboard.css';

import gamerpic1 from '../../assets/image/randomGamerpic01.jpg';
import gamerpic2 from '../../assets/image/randomGamerpic02.jpg';
import gamerpic3 from '../../assets/image/randomGamerpic03.jpg';
import gamerpic4 from '../../assets/image/randomGamerpic04.jpg';
import gamerpic5 from '../../assets/image/randomGamerpic05.jpg';
import gamerpic6 from '../../assets/image/randomGamerpic06.jpg';

const usersGamerpic = [
  { id: 1, image: gamerpic1 },
  { id: 2, image: gamerpic2 },
  { id: 3, image: gamerpic3 },
  { id: 4, image: gamerpic4 },
  { id: 5, image: gamerpic5 },
  { id: 6, image: gamerpic6 }
];

const tabOptions = [
  { id: 'best', label: 'Melhores' },
  { id: 'worst', label: 'Piores' },
];

const profile = [
  { id: 1, name: 'João Silva', lap: 12, points: 150, ranking: 1, gamerpic: gamerpic6 }
];

const races = [
  { id: 2, dayWeek: 'Ter', dayMonth: '18', hour: '19:00 - 21:00', place:'São Paulo - Brasil', bet: 1923 }
];

const Leaderboard = () => {
  const [usersApi, setUsersApi] = useState([]);
  const [topUsers, setTopUsers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('best');

  useEffect(() => {
    const apiUrl = activeTab === 'best' ? '/api/all_users_top' : '/api/all_users_bottom';
    axios.get(apiUrl)
      .then(response => {
        setUsersApi(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [activeTab]);

  useEffect(() => {
    axios.get('/api/top_users')
      .then(response => {
        setTopUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  const renderPilotItem = (pilot) => (
    <div id='pilotItem'>
      <p>{pilot.name_user}</p>
      <p>Pontos: {pilot.speedpoints}</p>
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
            <h2>Todos os Usuários</h2>
            <SubHeader tabs={tabOptions} setActiveTab={setActiveTab} />
            <DataItems
              data={usersApi}
              renderItem={renderPilotItem}
            />
          </div>
        </div>

        <div className='rightSection'>
          <div className='featuredUsers'>
            <h2>Usuários em Destaque</h2>
            <div id='featuredUsersContent'>
              {topUsers.map((userApi, index) => (
                <div key={userApi.id} className='user'>
                  <div className='userContent'>
                    <img src={usersGamerpic[index % usersGamerpic.length].image} alt="gamerpic" className='gamerpic' />
                    <div className="userDetails">
                      <p className="userName">{userApi.name_user}</p>
                    </div>
                  </div>
                  <div className='userStats'>
                    <p className="points">
                      {userApi.speedpoints}
                      <FontAwesomeIcon icon={faBolt} />
                    </p>
                    <p className="lap">Voltas: {userApi.total_laps}</p>
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