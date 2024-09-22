import React from 'react'
import logo from '../../assets/image/logoBlack.png';
import './login.css'

const Login = () => {
    return (
        <>
            <section className='loginSection'>
                <div className='logoWrapper'>
                    <img src={logo} alt="logo" id='logoBlack'/>
                </div>

                <div className='headerContainer'>
                    <h1>Bem-vindo de volta</h1>
                </div>

                <div className='loginContent'>
                    <form action="">
                        <div className='formGroup'>
                            <label htmlFor="">Nome do Usuário</label>
                            <input type="text" />
                        </div>

                        <div className='formGroup'>
                            <label htmlFor="">Senha</label>
                            <input type="text" />
                        </div>

                        <div>
                            <button>Entrar</button>
                            <hr />
                            <button>Fazer login com Google</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login