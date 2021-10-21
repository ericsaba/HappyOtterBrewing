import logo from './logo.svg';
import './App.css';
import Preloader from './components/preloader'
import HeaderArea from './components/headerArea'
import Slider from './components/slider'
import PopularItems from './components/popularItems'
import About from './components/about'
import Services from './components/services'
import Video from './components/video'
import Testimonials from './components/testimonials'
import Instagram from './components/instagram'
import FooterArea from './components/footerArea'
import ScrollUp from './components/scrollUp'

function App() {
  return (
    <div className="App">
      <Preloader></Preloader>
      <header>
        <HeaderArea></HeaderArea>
      </header>
      <main>
        <PopularItems></PopularItems>
        <Testimonials></Testimonials>
      </main>
      <footer>
        <FooterArea></FooterArea>
      </footer>
      <ScrollUp></ScrollUp>
    </div>
  );
}

export default App;
