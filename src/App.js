import './App.css';
import Home from './pages/Home/Home';
import MovieList from './pages/MovieList/MovieList';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/movielist' element={<MovieList/>} />
   </Routes>
  );
}

export default App;
