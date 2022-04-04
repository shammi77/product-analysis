import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Review from './components/Review/Review';
import About from './components/About/About';

import Notfound from './components/Not found/Notfound';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Header></Header>
      
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route> 
      <Route path='/review' element={<Review></Review>}></Route> 
      <Route path='/about' element={<About></About>}></Route> 
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route> 
      <Route path='*' element={<Notfound></Notfound>}></Route> 
     </Routes>
    </div>
  );
}

export default App;
