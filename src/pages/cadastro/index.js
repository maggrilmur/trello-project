import React, {Component} from 'react';
import './styles.css';
import logoTrello from '../../assets/img/Trello136-43.png';

class Cadastro extends Component {
    render () {
        return (
            <div className="container">
                <img src={logoTrello} className="logoTrello" alt="logo-trello" />
                <div className="cadastro-box">
                    <h1 className="title">Cadastrar-se no Trello</h1>
                    <input className="email-input" type="text" placeholder="Insira o seu e-mail" />
                    <input className="password-input" type="text" placeholder="Insera a sua senha" />
                    <a className="cadastro-button" href="/">Registre-se</a>
                    <div className="footer-div">
                        <a href="/">Já tem uma conta da Atlassian? Entrar</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cadastro;