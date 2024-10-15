import React from 'react'
import './home.css'
import FormulaE from '../../assets/image/formulae.png'

const Home = () => {
    return (
        <>
            <section className='homeSection'>
                <div className='formula'>
                    <h3>Bem-vindo à</h3>
                    <img src={FormulaE} className='formulaImg' />
                </div>
                <div>
                    <p>Compita na nossa mais nova <span className='blue'>simulação de corrida.</span></p>
                    <button className='lightButton'>Iniciar</button>
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