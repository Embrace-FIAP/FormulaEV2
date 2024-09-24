import React from 'react'
import logo from '../../assets/image/logoWhite.png';
import './footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footerContent">
                    <div className="footerSection">
                        <h4 className='titleFooter'>
                            <img src={logo} alt="logo" id='logoFooter'/>
                        </h4>
                        <p>Nossa visão é proporcionar interatividade e diversão para todos os amantes de corrida.</p>
                    </div>

                    <div className="footerSection">
                        <h4>Sobre</h4>
                        <ul>
                            <li>Política de Privacidade</li>
                            <li>Termos de Serviço</li>
                            <li>Política de Cookies</li>
                        </ul>
                    </div>

                    <div className="footerSection">
                        <h4>Comunidade</h4>
                        <ul>
                            <li>Eventos</li>
                            <li>Podcast</li>
                            <li>Empresas Parceiras</li>
                        </ul>
                    </div>

                    <div className="footerSection">
                        <h4>Social</h4>
                        <ul>
                            <li>Instagram</li>
                            <li>Youtube</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                </div>

                <div className='line'></div>

                <div className='footerBottom'>
                    <div className='copyright'>
                        <h5>
                            <i className="fa-regular fa-copyright"></i> 2024 Todos os direitos reservados
                        </h5>
                    </div>

                    <div className='policiesAndTerms'>
                        <p>Políticas de Privacidade</p>
                        <p>Termos e Condições</p>
                    </div>
                </div>
            
            </footer>
        </>
    )
}

export default Footer;