import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import api from '../../services/api';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faChartBar, faUserFriends, faHourglassHalf } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/logo_login_connect.png';
import avatar from '../../assets/avatar.png';
import './styles.css';

export default class Dashboard extends Component {
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

  /**async componentDidUpdate(){
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("QueueCallerJoin", data => this.setState({ response: data }));

    const conta = '020991';
    const result = await api.get(`/report/${conta}/minutes`);
    this.setState({ conta: result.data[0] });

    //subtrair do cadastro do cliente de acordo com as ligacoes entrantes na fila do cliente

    const contaReport = '100192';
    const resultReport = await api.get(`/report/${contaReport}/minutes`);
    this.setState({ conta: resultReport.data[0] });
}*/

  async componentDidMount() {
    /*const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("Report", data => this.setState({ response: data }));
    socket.on("Agent", data => this.setState({ agent: data }));*/

    const contaSaldo = '001983';
    const resultSaldo = await api.get(`/cliente/${contaSaldo}`);
    const report = await api.get('/report');
    //const sub = resultSaldo.data[0].saldo - 5;//response.billableseconds;
    this.setState({ saldo: resultSaldo.data[0].saldo });
    this.setState({reports: report.data});

    /*const {response} = this.state;
    if(response.userfield === '020991'){
      await api.put('/cliente', { data: sub, conta: response.userfield });

    }*/
    
  }

  handleReport = () => {
    this.props.history.push('/reports');
  };

  handleProfile = () => {
    this.props.history.push('/profile');
  };

  render() {
    const { reports,response, saldo, conta, agent } = this.state;
    return (
      <div className="container">
        <header>
            <div className="headerContent">
              <div className="logo">
                <img src={logo} alt="Connect"/>
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
          <div className="content">
            <div onClick={this.handleReport} className="report">
              <div className="reportInfo">
                <FontAwesomeIcon icon={faChartBar} size="3x" />
                Relatórios
                <div className="reportContent">
                  <BootstrapTable data={reports} options={{noDataText: 'Sem registro no momento...'}} bordered={true} striped condensed version="4">
                    <TableHeaderColumn dataField='id' isKey={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='calldate'>Data</TableHeaderColumn>
                    <TableHeaderColumn dataField='src'>Origem</TableHeaderColumn>
                    <TableHeaderColumn dataField='dst'>Destino</TableHeaderColumn>
                    <TableHeaderColumn dataField='disposition'>Status</TableHeaderColumn>
                  </BootstrapTable>
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="cardContent">
                <div className="cardInfo">
                <FontAwesomeIcon icon={faHourglassHalf} size="3x" />
                  <h3>Saldo de Minutos</h3>
                  <p>100:00:00</p>
                </div>
              </div>
              <div className="cardContent">
                <div className="cardInfo">
                  <FontAwesomeIcon icon={faDollarSign} size="3x"/>
                  <h3>Saldo de Crédito</h3>
                  <h3>R$ 50.000,00</h3>
                </div>
              </div>
              <div className="cardContent">
                <div className="cardInfo">
                <FontAwesomeIcon icon={faUserFriends} size="3x" />
                  <h3>Agentes Disponiveis</h3>
                  <h3>10</h3>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
