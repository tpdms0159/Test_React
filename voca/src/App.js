import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import WordList from './components/WordList';
import CreateWord from './components/CreateWord';
import Header from './components/Header';
import CreateDay from './components/CreateDay';

function App () {
  return(
    <>
    <Router>
    <Header />
      <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/word/:day" element = {<WordList/>} />
      <Route path="/wordadd" element= {<CreateWord />} />
      <Route path="/dayadd" element= {<CreateDay />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;