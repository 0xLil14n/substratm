import type { NextPage } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Hero from '../components/hero';
const Home: NextPage = () => {
  return <Hero />;
};

const StyledMain = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Home;
