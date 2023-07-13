import Bolo from './imagens/Bolo.jpg'
import "./styles.css";

function App() {
  return (
    <div className="container">
      <div className="folheto">
        <img className="img-bolo" src={ Bolo } alt="Foto Bolo"/>
        <div className="info-produto">
          <span className="titulo-celebrationcake">Celebration Cake</span>
          <span className="descricao-produto"><p>Bolos com 4 camadas de massa amanteigada, 3 camadas de recheio, coberto e decorado com ButterCream de Baunilha.</p></span>
          <span className="valor">A partir de R$150,00</span>
          <div className="botao-comprar">
            <button className="button-btn">Encomendar</button>
          </div>                                       
        </div>
      </div>
    </div>
  );
}

export default App;
