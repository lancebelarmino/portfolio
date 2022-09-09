import React from 'react';
import Head from 'next/head';
import { Hero, About, Projects, OtherProjects } from '@components/home';
import styles from './index.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lance Belarmino</title>
        <meta name="description" content="Frontend Developer" />
      </Head>

      <Hero />
      <About />
      <Projects />
      <OtherProjects />
    </>
  );
}
