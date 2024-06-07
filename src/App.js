import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import SearchTodo from './components/SearchTodo';
import DeleteTodo from './components/DeleteTodo';
import View from './components/View';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AddTodo/>}/>
      <Route path='/search'element={<SearchTodo/>}/>
      <Route path='/delete'element={<DeleteTodo/>}/>
      <Route path='/view'element={<View/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
