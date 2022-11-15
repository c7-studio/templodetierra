import Head from 'next/head';
import Hero from '../components/Hero';
import Magia from '../components/Magia';
import Proposito from '../components/Proposito';
import Hospedaje from '../components/Hospedaje';
import Puertas from '../components/Puertas';
import Contacto from '../components/Contacto';

export default function Home() {
  return (
    <div className='bg-yellow'>
      <Head>
        <title>Templo de Tierra</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero heading='Templo de Tierra' subheading='ashram'/>
      <Magia />
      <Proposito />
      <Hospedaje />
      <Puertas />
      <Contacto />
    </div>
  )
}
