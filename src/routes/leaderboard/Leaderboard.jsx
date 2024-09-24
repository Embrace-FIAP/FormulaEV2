import React from 'react';

const Leaderboard = () => {
    const Races = [
        { id: 1, date: '17/09/2024', day: 'Ter', hour: '19:00 - 21:00', locality: 'São Paulo', bet: true },
        { id: 2, date: '24/09/2024', day: 'Ter', hour: '19:00 - 21:00', locality: 'Rio de Janeiro', bet: false },
    ];
    
    const users = [
        { id: 1, name: 'João Silva', turn: 'Manhã', points: 150 },
        { id: 2, name: 'Maria Oliveira', turn: 'Tarde', points: 200 },
        { id: 3, name: 'Carlos Pereira', turn: 'Noite', points: 120 },
    ];
    
    const profile = [
        { id: 1, name: 'João Silva', turn: 'Manhã', points: 150 },
        { id: 2, name: 'Maria Oliveira', turn: 'Tarde', points: 200 },
    ];
    
    const annualBestPilots = [
        { id: 1, name: 'Lucas Santos', points: 1200 },
        { id: 2, name: 'Ana Costa', points: 1150 },
        { id: 3, name: 'Fernanda Lima', points: 1100 },
    ];
    
    const monthlyBestPilots = [
        { id: 1, name: 'João Silva', points: 300 },
        { id: 2, name: 'Carlos Pereira', points: 250 },
        { id: 3, name: 'Maria Oliveira', points: 230 },
    ];    

    return (
        <>
            <section>
                <div className='headerTitle'>
                    <h1>Placar de Líderes</h1>
                    <p>Saiba quem são os maiores vencedores e qual sua posição no placar.</p>
                </div>

                <div>
                    <div className='bestPilots'>
                        <h2>Melhores Pilotos do Ano</h2>
                        {annualBestPilots.map(pilot => (
                            <div key={pilot.id} className='pilot'>
                                <span>{pilot.name}</span>
                                <span>Pontos: {pilot.points}</span>
                            </div>
                        ))}
                    </div>

                    <div className='featuredUsers'>
                        <h2>Usuários em Destaque</h2>
                        {users.map(user => (
                            <div key={user.id} className='user'>
                                <span>{user.name} - {user.turn}</span>
                                <span>Pontos: {user.points}</span>
                            </div>
                        ))}
                    </div>

                    <div className='personalProfile'>
                        <h2>Seu Perfil</h2>
                        {profile.map(userProfile => (
                            <div key={userProfile.id} className='profile'>
                                <span>{userProfile.name} - {userProfile.turn}</span>
                                <span>Pontos: {userProfile.points}</span>
                            </div>
                        ))}
                    </div>

                    <div className='nextRaces'>
                        <h2>Próximas Corridas</h2>
                        {Races.map(race => (
                            <div key={race.id} className='race'>
                                <span>{race.date} ({race.day})</span>
                                <span>Hora: {race.hour}</span>
                                <span>Localidade: {race.locality}</span>
                                <span>Aposta: {race.bet ? 'Sim' : 'Não'}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Leaderboard;