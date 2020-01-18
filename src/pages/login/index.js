import React, { Component } from 'react';
import './style.css';


export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="login-box">
                    <h1 className="title">Fazer Login</h1>
                    <input className="email-input" type="text" placeholder="Insira o e-mail" />
                    <input className="password-input" type="text" placeholder="Inserir a senha" />
                    <a className="login-button" href="/">Fazer Login</a>
                    <div className="footer-div">
                        <a href="/">Não conseguiu entrar?</a>
                        <div className="dot"></div>
                        <a href="/">Criar uma conta</a>
                    </div>
                </div>
            </div>
        )
    }
}