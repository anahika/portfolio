import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Top from './components/nav/Nav'
import Home  from './components/home/Home'
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import AboutMe from './components/about-me/AboutMe';

function App() {
  return (
    <Router>
       <div className="App">
         <Top />
       <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects"  element={<Projects/>}/>
          <Route exact path="/skills"  element={<Skills />}/>
          <Route exact path="/about-me"  element={<AboutMe />}/>
       </Routes>
       </div>
    </Router>
    
  );
}

export default App;
