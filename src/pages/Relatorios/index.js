import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import api from '../../services/api';

//import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
        {id: 1, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido', linkedid: "gravavao.mp3"},
        {id: 2, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido', linkedid: "gravavao.mp3"},
        {id: 3, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido', linkedid: "gravavao.mp3"},
        {id: 4, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido', linkedid: "gravavao.mp3"},
        {id: 5, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido', linkedid: "gravavao.mp3"},
        {id: 6, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido', linkedid: "gravavao.mp3"},
        {id: 7, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido', linkedid: "gravavao.mp3"},
        {id: 8, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido', linkedid: "gravavao.mp3"},
        {id: 9, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido', linkedid: "gravavao.mp3"},
        {id: 10, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido', linkedid: "gravavao.mp3"},
        {id: 11, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido', linkedid: "gravavao.mp3"},
        {id: 12, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido', linkedid: "gravavao.mp3"},
        {id: 13, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido', linkedid: "gravavao.mp3"},
        {id: 14, calldate: '2019-08-25 15:25:00', src: 85986516133, dst: 2000, billsec: 180, disposition: 'Atendido', linkedid: "gravavao.mp3"},
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
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Data</TableCell>
                    <TableCell>Origem</TableCell>
                    <TableCell>Destino</TableCell>
                    <TableCell>Tempo</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Gravação</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reports.map(row => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.calldate}</TableCell>
                      <TableCell>{row.src}</TableCell>
                      <TableCell>{row.dst}</TableCell>
                      <TableCell>{row.billsec}</TableCell>
                      <TableCell>{row.disposition}</TableCell>
                      <TableCell>{row.linkedid}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
