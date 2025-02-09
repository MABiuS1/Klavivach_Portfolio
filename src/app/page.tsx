// pages/index.tsx
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import AboutMe from '../../components/AboutMe';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio | Full-Stack Developer</title>
        <meta name="description" content="Portfolio ของฉัน แสดงผลงานและความเชี่ยวชาญในการพัฒนาเว็บแอปพลิเคชันด้วยเทคโนโลยีสมัยใหม่ เช่น React, Node.js, TypeScript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="pt-20">
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
