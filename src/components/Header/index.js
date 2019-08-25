import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logo from '../../assets/logo_login_connect.png';
import './styles.css';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://localhost:3002",
      saldo: 0,
      conta: 0,
      agent: '',
    };
  }

  async componentDidMount() {
    /*const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("Report", data => this.setState({ response: data }));
    socket.on("Agent", data => this.setState({ agent: data }));*/

    const contaSaldo = '001983';
    const resultSaldo = await api.get(`/cliente/${contaSaldo}`);
    //const sub = resultSaldo.data[0].saldo - 5;//response.billableseconds;
    this.setState({ saldo: resultSaldo.data[0].saldo });

    /*const {response} = this.state;
    if(response.userfield === '020991'){
      await api.put('/cliente', { data: sub, conta: response.userfield });

    }*/
    
  }

  render() {
    const { response, saldo, conta, agent } = this.state;
    return (
      <div className="container">
        <header>
            <div className="headerContent">
              <div className="logo">
                <img src={logo} alt="Connect"/>
              </div>
              <div className="profile">
                <div className="infoProfile">
                  <div>
                    Joaquim Alves
                  </div>
                  <div>
                    R$500
                  </div>
                </div>
                <div>
                  <img className="photoProfile" src={logo} alt="Perfil"/>
                </div>
              </div>
            </div>
        </header>
      </div>
    );
  }
}
