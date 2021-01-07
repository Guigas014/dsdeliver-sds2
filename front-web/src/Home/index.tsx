import { Link } from 'react-router-dom';

import { ReactComponent as MainImage } from '../Images/main.svg';

import Navbar from '../Navbar';
import Footer from '../Footer';

import './styles.css';

function Home() {
  return (

    <div className="home-container">
      <Navbar />

      <div className="home-content">
        <div className="home-actions">
          <h1 className="home-title">
            Faça seu pedido <br />  que entregamos <br /> para você!!!
          </h1>
          <h3 className="home-subtitle">
            Escolha o seu pedido e em poucos minutos <br />
            levaremos na sua porta
          </h3>
          <Link className="home-btn-order" to="/orders">FAZER PEDIDO</Link>  
        </div>
        <div className="home-image">
          <MainImage />
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Home;

