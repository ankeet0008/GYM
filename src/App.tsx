import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Hero } from './components/HeroNav';
import { Classes, TrialTraining, Divider, About, Divider2 } from './components/Sections';
import { FaqContact, Footer } from './components/FooterSections';
import { CoursesHero, Divider3 } from './components/Courses';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Classes />
              <TrialTraining />
              <Divider />
              <About />
              <Divider2 />
              <FaqContact />
            </>
          } />
          <Route path="/courses" element={
            <>
              <CoursesHero />
              <Classes showHeader={false} />
              <TrialTraining />
              <Divider3 />
            </>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
