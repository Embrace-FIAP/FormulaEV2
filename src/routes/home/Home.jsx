import React from 'react'
import './home.css'

const Home = () => {
    return (
        <>
            <section className='homeSection'>
                <div>
                    <h1>Bem vindo a Formula E</h1>
                    
                    <p>Descubra nossa mais nova simulação de corrida.</p>
                    <button className='lightButton'>Conhecer</button>
                </div>
            </section>
            <section className='productSection'>
                <div className="productContent">
                    <div className='leftSection'>
                        <p>Simulação de Corrida 2D</p>
                        <h2>Nossa Simulação</h2>
                        <p>Faça o download e junte-se à nossa comunidade de pilotos, competindo com pessoas de todos os países ao redor do mundo. Mostre suas habilidades e participe de eventos emocionantes!</p>
                        <a href="/downloads/Car-Racing-Game-main.zip" download>
                            <button className='darkButton'>Download</button>
                        </a>
                        
                        <p>O <span>Placar de Líderes</span> exibe os melhores pilotos do mês, 
                        ano e de todos os tempos. Confira!</p>
                    </div>

                    <div className='rightSection'></div>
                </div>
            </section>
        </>
    )
}

export default Home