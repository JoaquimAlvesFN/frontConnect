import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
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
        <main>
          <div className="content">
            <Link  to="/reports">
              <div className="report">
                Report
              </div>
            </Link>
            <div className="cards">
              <div className="cardContent">
                Div 1
              </div>
              <div className="cardContent">
                Div2
              </div>
              <div className="cardContent">
                Div3
              </div>
              <div className="cardContent">
                Div4
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
