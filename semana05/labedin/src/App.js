import React from 'react';
import './App.css';
import ImagemProfile from './profile.png';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemTec from './components/ImagemTec/ImagemTec';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemProfile}
           nome="Giselle Rosa" 
          descricao="Oi, eu sou a Giselle. Sou estudante de desenvolvimento Full-Stack da Labenu. Eu estou amando aprender sobre ReactJS e estou muito motivada a aprender ainda mais, adoro estilizar o site, e ver a mágica acontecer, sou apaixonada pelo front mas ainda quero mergulhar no mundo do back-end"
        />

        <CardPequeno
          emailTitle= "Email: "
          email=" bananinha123@gmail.com" 
          enderecoTitle="Endereço: "
          endereco= "Rua do Funk, bairro da alegria, Cidade do Contentamento." 
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="data:image/png;base64,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"
          nome="Benafrutti - Engenheira Agrônoma Residente" 
          descricao="Controle de qualidade de FLV, auxílio na logística, armazenamento e expedição. Garantia de qualidade do produto dentro do centro de distribuição para envio para clientes como Carrefour, pão de Açúcar e outros. Auxiliar nas compras e vendas de produtos no padrão de qualidade dos mercados, nas  vendas e cotações." 
        />
        <CardGrande 
          imagem="https://www.seesp.org.br/site/media/k2/items/cache/d2d5c9d0b2023bd5b5a38cfff6849e4d_M.jpg" 
          nome="Embrapa Agrobiologia - Estagiária" 
          descricao="Estagiária no Laboratório de Fauna do Solo analisando a biodiversidade e fazendo triagem da fauna do solo." 
        />
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Centauro - Tradutora de Inglês" 
          descricao="Temporário durante o período das olimpíadas como Tradutora/Interprete da língua inglesa através da NVH recursos humanos." 
        />
        
       
      </div>

      <div className="page-section-container">
        <h2> Tecnologias que Domino </h2>
        <div className="ImageTec">
          <ImagemTec 
            imagem="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" 
            texto="HTML" 
          
          /> 
          <ImagemTec 
            imagem="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" 
            texto="CSS"
          
          /> 

          <ImagemTec 
            imagem="https://3.bp.blogspot.com/-xhNpNJJyQhk/XIe4GY78RQI/AAAAAAAAItc/ouueFUj2Hqo5dntmnKqEaBJR4KQ4Q2K3ACK4BGAYYCw/s1600/logo%2Bgit%2Bicon.png" 
            texto="GIT"
          
          /> 

        </div>
       
          
      </div>

      <div className="page-section-container">
        <h2> Tecnologias que Estudo</h2>
        <div className="ImageTec">
          <ImagemTec 
            imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" 
            texto="JS" 
          /> 

          <ImagemTec 
            imagem="https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png" 
            texto="Node" 
          /> 

          <ImagemTec 
              imagem="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png" 
              texto="React" 
          />  

        </div>
          
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
