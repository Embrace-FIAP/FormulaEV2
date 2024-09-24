import React from 'react'
import './home.css'

const Home = () => {
    return (
        <>
            <section className='homeSection'>
                <div>
                    <h1>Bem vindo a Formula E</h1>
                    <p>Descubra nossa mais nova simulação de corrida.</p>
                    <button>Conhecer</button>
                </div>
            </section>

            <section className='productSection'>
                <div>
                    <p>Simulação de Corrida 2D</p>
                    <h2>Nossa Simulação</h2>
                    <p>Faça o download e participe da nossa comunidade de pilotos,
                    disputando com pessoas de todos os países ao redor do mundo.</p>
                    <button>Download</button>
                    <p>O <span> Placar de Líderes</span> exibe os melhores pilotos do mês, 
                    ano e de todos os tempos. Confira!</p>
                </div>

                <div>
                    <img src="#" alt="" />
                </div>
            </section>
        </>
    )
}

export default Home