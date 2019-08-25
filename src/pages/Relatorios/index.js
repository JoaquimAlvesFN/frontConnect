import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import api from '../../services/api';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/logo_login_connect.png';
import avatar from '../../assets/avatar.png';
import '../Dashboard/styles.css';

export default class Relatorios extends Component {
  constructor() {
    super();
    this.state = {
      reports: [
        {id: 1, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido'},
        {id: 2, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido'},
        {id: 3, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido'},
        {id: 4, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido'},
        {id: 5, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido'},
        {id: 6, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido'},
        {id: 7, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido'},
        {id: 8, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido'},
        {id: 9, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido'},
        {id: 10, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido'}
      ],
      response: false,
      endpoint: "http://localhost:3002",
      saldo: 0,
      conta: 0,
      agent: '',
    };
  }

  handleBack = () => {
    this.props.history.push('/');
  }

  handleProfile = () => {
    this.props.history.push('/profile');
  };

  async componentDidMount(){
    const conta = '001983';
    const report = await api.get('/report');
    this.setState({reports: report.data});
  }

  render() {
    const {reports} = this.state;
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
            
          <div onClick={this.handleProfile} className="profile">
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
          <div className="contentBetween">
            <div className="formBetween">
              <form>
                <label>Data Inicial
                  <input placeholder="00/00/0000"/>
                </label>
                <label>Data Final
                  <input placeholder="00/00/0000"/>
                </label>
                <label>Origem
                  <input placeholder="Ramal/Número"/>
                </label>
                <label>Destino
                  <input placeholder="Ramal/Número"/>
                </label>
                <button>Visualizar</button>
              </form>
            </div>
            <div className="reportBetween">
              <BootstrapTable data={reports} options={{noDataText: 'Sem registro no momento...'}} bordered={true} striped hover condensed version="4">
                <TableHeaderColumn dataField='id' isKey={true}>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='calldate'>Data</TableHeaderColumn>
                <TableHeaderColumn dataField='src'>Origem</TableHeaderColumn>
                <TableHeaderColumn dataField='dst'>Destino</TableHeaderColumn>
                <TableHeaderColumn dataField='billsec'>Tempo</TableHeaderColumn>
                <TableHeaderColumn dataField='disposition'>Status</TableHeaderColumn>
              </BootstrapTable>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
