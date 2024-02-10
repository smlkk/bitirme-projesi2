// src/styles.js
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.header`
  background-color: #2ecc71;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;

    li {
      margin-right: 20px;
    }

    a {
      text-decoration: none;
      color: #2ecc71;
      font-weight: bold;
      font-size: 16px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Main = styled.main`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    color: #2ecc71;
  }
`;

export const Button = styled.button`
  background-color: #2ecc71;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #27ae60;
  }
`;

export const Form = styled.form`
  label {
    display: block;
    margin-bottom: 10px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  margin-top: 20px;
  padding: 20px;
  background-color: #2ecc71;
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

// src/components/Home.js
import React from 'react';
import { Container, Header, Main, Footer } from '../styles';

const Home = () => {
  return (
    <Container>
      <Header>
        <h1>Meram Belediyesi Etkinlikler</h1>
      </Header>
      <Main>
        <h2>Hoşgeldiniz!</h2>
        <p>Belediyemizin yaklaşan etkinliklerini keşfedin.</p>
      </Main>
      <Footer>
        © 2024 Meram Belediyesi
      </Footer>
    </Container>
  );
};

export default Home;
