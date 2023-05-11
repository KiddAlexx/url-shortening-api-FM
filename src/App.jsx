import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import UrlForm from './components/UrlForm';
import Features from './components/Features';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <UrlForm />
      <Features />
      <CallToAction />
    </div>
  );
}

export default App;
