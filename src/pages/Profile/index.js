import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import api from '../../services/api';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/logo_login_connect.png';
import avatar from '../../assets/avatar.png';
import '../Dashboard/styles.css';

export default class Profile extends Component {
    handleBack = () => {
        this.props.history.push('/');
    }
  render() {
    return (
        <div className="container">
        <header>
        <div className="headerContent">
          <div className="logo">
            <img src={logo} alt="Connect"/>
            <div onClick={this.handleBack} className="backPage">
              <FontAwesomeIcon icon={faArrowLeft} size="1x" className="iconBack"/>
              Voltar
            </div>
          </div>
            
          <div className="profile">
            <div className="infoProfile">
              <div className="">
                Joaquim Alves
              </div>
              <div>
                Cód: 020991
              </div>
            </div>
            <div>
              <img className="photoProfile" src={avatar} alt="Perfil"/>
            </div>
          </div>
        </div>
        </header>
        <main>
          <div className="profileContent">
            <div className="options">
                <img src={avatar}/>
                <span>Joaquim Alves</span>
             </div>
             <span className="fixBar"/>
            <div className="formProfile">
                <h2>Meu Perfil</h2>
                <form>
                    <label>Código</label>
                    <input />
                    <label>Nome Completo</label>
                    <input />
                    <label>E-mail</label>
                    <input />
                    <label>Senha</label>
                    <input />
                    <label>CPF/CNPJ</label>
                    <input />
                    <label>CEP</label>
                    <input />
                    <label>Logradouro</label>
                    <input />
                    <label>Nº</label>
                    <input />
                </form>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
