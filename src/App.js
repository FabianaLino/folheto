import Bolo from './imagens/Bolo.jpg'
import "./styles.css";

function App() {
  return (
    <main className="container">
      <div className="folheto">
        <img className="img-bolo" src={ Bolo } alt="Foto Bolo"/>
        <div className="info-produto">
          <span className="titulo-celebrationcake">Celebration Cake</span><br></br>          
          <span className="descricao-produto">Bolos com 4 camadas de massa amanteigada, 3 camadas de recheio, coberto e decorado com ButterCream de Baunilha e os recheios você pode escolher entre:</span><br></br>
          <br></br>
          <div className="lista-recheio">            
            <li>Ninho com geleia de morango</li>
            <li>Doce de leite com nozes</li>
            <li>Doce de Leite com chocolate</li>
            <li>Maracujá com chocolate</li>
            <li>Prestígio com chocolate</li>
            <li>Chocolate com geleia e morangos frescos</li>
            <li>Abacaxi com creme 4 leites</li>
          </div>  
          <span className="valor">A partir de R$150,00</span>
          <div className="botao-orçamento">
            <button className="button-btn">Orçamento</button>
          </div>                                       
        </div>
      </div>
    </main>
  );
}

export default App;
