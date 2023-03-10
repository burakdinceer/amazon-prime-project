import './App.css';
import Home from './pages/Home/Home';
import MovieList from './pages/MovieList/MovieList';
import { Route,Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import LoginSing from './pages/Login/LoginSingUp/LoginSing';
import Details from './pages/Details/Details';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Login/>} />
     <Route path='/home' element={<Home/>}/>
     <Route path='/movielist' element={<MovieList/>} />
     <Route path='/loginsing' element={<LoginSing/>}/>
     <Route path='/home/details/:id' element={<Details/>}/>
   </Routes>
  );
}

export default App;
