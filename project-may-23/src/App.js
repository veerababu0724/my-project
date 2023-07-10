import { Route, Routes,Link } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialList from "./components/TutorialList";


function App() {
  return (
    <div className="container">
      <div className='row'>
      <div className='col'>
   
    </div>
    </div>n
    <div className='row'>
<nav className="navbar navbar-expand navbar-dark bg-dark">
  <a href="/tutorials" className="navbar-brand">
    bexkoder
    sample CRUD App
  </a>
  <div className="navbar-nav mr-auto">
    <li className="nav-item">
      <Link to={"/tutorials"} className="nav-link">
        Tutorials
      </Link>
    </li>
    <li className="nav-item">
      <Link to={"/add"} className="nav-link">
        Add
      </Link>
    </li>
  </div>
</nav>
</div>
  <div className='row'>
    <div className="container mt-3">
      <Routes>
        <Route path ="/"element={<TutorialList/>}/>
        <Route path="/tutorials"
        element={<TutorialList/>}/>
        <Route path="/add"element={<AddTutorial/>}/>
        <Route path="/tutorials/:id"
        element={<Tutorial/>}/>
        </Routes>
  </div>
</div>
</div>

  );
}
export default App;