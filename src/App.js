import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Top from './components/top/Top'
import Home  from './components/home/Home'
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
    <Router>
       <div className="App">
         <Top />
       <Routes>
          <Route exact path="/" exact component={Home} />
          <Route exact path="/projects"  component={Projects}/>
          <Route exact path="/skills"  component={Skills}/>
       </Routes>
       </div>
    </Router>
    
  );
}

export default App;
