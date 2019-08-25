import React, { Component } from 'react';

import { Container, Box, Input, Button, Img, Paragraph } from './styles';
import logo from '../../assets/logo_login_connect.png';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Box>
          <Img src={logo}/>
          <Input type="text" placeholder="Usuário"/>
          <Input type="password" placeholder="Senha"/>
          <Button onClick={() => {}} type="submit">Entrar</Button>
          <Paragraph href="#">Esqueci minha senha!</Paragraph>
        </Box>
      </Container>
    );
  }
}
