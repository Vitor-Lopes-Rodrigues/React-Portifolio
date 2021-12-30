
import '../styles/App.css';
import profile from '../assets/image/vitor.jpg';
import front from '../assets/image/html.png';
import mysql from '../assets/image/mysql.png';
import css from '../assets/image/css.png';
import figma from '../assets/image/figma.png';
import react from '../assets/image/react.png';
import office from '../assets/image/office.png';
import git from '../assets/image/github.png';
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';
import { Instagram, GitHub, Facebook, LinkedIn, Email, Phone } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const handleSetNotifyEmail = () => {
    toast("vitorlopes758@gmail.com");
  }
  const handleSetNotifyTelefone = () => {
    toast("(+55)1199472-9075");
  }
  const BounceInAnimation = keyframes`${bounceIn}`;

  const BounceInDiv = styled.div`
  animation:  3s ${BounceInAnimation};
`;
  return (
    <div className="Container">
      <ToastContainer transition={Flip} />
      <BounceInDiv className='Header'>
        <img className="Profile" src={profile} alt="profile" />
        <div className="ContainerAbout">
          <div className="ContainerText">
            <div className="ContainerTitle">
              <h1 id="Name"> Vitor Lopes </h1>
              <h2 className="Location"> São Paulo, SP 🚩</h2>
            </div>
            <h2 className="About">Full stack developer & Analista de Banco De Dados</h2>
            <h2 className="Product"> Sou um programador Full Stack, atualmente vivo em São Paulo, gosto de trabalhar em equipe,
              pois penso que é uma maneira de buscar novas habilidades atravez do conhecimento de todos, para que assim eu consiga aprimorar as minhas Skills. Sou curioso e busco aprender cada dia mais. </h2>
          </div>

          <div className="Social"> <a href='https://www.instagram.com/xlopes_x/'> <Instagram /> </a>
            <a href='https://github.com/Vitor-Lopes-Rodrigues'><GitHub /> </a>
            <a href='https://www.facebook.com/profile.php?id=100016614311011'><Facebook /></a>
            <a href='https://www.linkedin.com/in/vitor-lopes-rodrigues/'><LinkedIn /></a>
          </div>
          <div className="Contact">
            <div className='Gradient-Border'>
              <Button className='Button' onClick={handleSetNotifyEmail} startIcon={<Email />} >Email </Button>
            </div>
            <div className='Gradient-Border'>
              <Button className='Button' onClick={handleSetNotifyTelefone} startIcon={<Phone />} >Ligar</Button>
            </div>
          </div>
        </div>
      </BounceInDiv>
      <div className='Row'>
        <h2 className='TextSkills'>Habilidades</h2>
        <div className='Skills'>
          <div className='Cards'>
            <h2>Front-End</h2>
            <img className='Imagens' src={front} alt="Front" />
            <p>Darei aquela famosa "Cara" em seu site, aplicativo.</p>
          </div>
          <div className='Cards'>
            <h2>Banco De Dados</h2>
            <img className='Imagens' src={mysql} alt="Mysql" />
            <p>Criarei um banco desde o início, desde levantamentos para saber o que é nescessário conforme o cliente, até mesmo a criação de tabelas, views,triggers.</p>
          </div>
          <div className='Cards'>
            <h2>Css</h2>
            <img className='Imagens' src={css} alt="Css" />
            <p>Construirei a parte visual de seu site. Otimizar o conteúdo da página e fazer uma apresentação mais amigável para o usuário.</p>
          </div>
          <div className='Cards'>
            <h2>Figma</h2>
            <img className='Imagens' src={figma} alt="Figma" />
            <p>Criações de design desde o começo com tudo que é solicitado.</p>
          </div>
          <div className='Cards'>
            <h2>React</h2>
            <img className='Imagens' src={react} alt="React" />
            <p>É uma biblioteca JavaScript de código aberto com foco onde criarei interfaces de usuário em páginas web. </p>
          </div>
          <div className='Cards'>
            <h2>Office</h2>
            <img className='Imagens' src={office} alt="Office" />
            <p>Word,Excel,PowerPoint, PowerBi</p>
          </div>
          <div className='Cards'>
            <h2>GitHub</h2>
            <img className='Imagens' src={git} alt="Git" />
            <p>Atualizar Repositórios, contribuir em  projetos privados, além de lançar o projeto no repositório</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
