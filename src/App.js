import './App.css';
import User from './components/User';
import Skills from './components/Skills';
import Profil from './components/Profil';
import FormationsExperiences from './components/FormationsExperiences';
import DarkMode from './components/DarkMode';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function App() {
  return (
    <div className='App'>
      <div className='grid-container'>
        <div className='sidebar'>
          <div className='action'>
            <DarkMode />

            <a
              href='./image/cv-Julien-Guyon-fr.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              <PictureAsPdfIcon />
            </a>
          </div>
          <User />
          <Skills />
        </div>
        <div className='main'>
          <Profil />
          <FormationsExperiences />
        </div>
      </div>
    </div>
  );
}

export default App;
