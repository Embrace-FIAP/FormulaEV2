import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/image/logoBlack.png';
import logoGoogle from '../../assets/image/logoGoogle.png';
import './login.css';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <section className='loginSection'>
                <div className='logoWrapper'>
                    <NavLink to="/">
                        <img src={logo} alt="logo" id='logoLogin'/>
                    </NavLink>
                </div>

                <div className='headerContainer'>
                    <h1>Bem-vindo de volta</h1>
                </div>

                <div className='loginContent'>
                    <form action="">
                        <div className='formGroup'>
                            <label htmlFor="username">Nome do Usuário</label>
                            <input type="text" id="username" />
                        </div>

                        <div className='formGroup passwordWrapper'>
                            <label htmlFor="password">Senha</label>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                            />
                            <button
                                type="button"
                                className="togglePassword"
                                onClick={togglePasswordVisibility}
                            >
                                <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
                            </button>
                        </div>

                        <div className='buttonsGroup'>
                            <button className='darkButton'>Entrar</button>
                            <hr />
                            <button id='buttonGoogle'>
                                <img src={logoGoogle} alt="logo" id='logoGoogle'/>
                                Fazer login com Google
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Login;