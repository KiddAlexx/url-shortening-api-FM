import './App.css';
import './queries.css';
import Header from './components/Header';
import Hero from './components/Hero';
import UrlForm from './components/UrlForm';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <UrlForm />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
