import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Collaborate from './components/Collaborate';

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <main className="bg-primary-600" id="main-content">
        <Features />
        <Collaborate />
      </main>
    </>
  );
}

export default App;
