
import './App.css';
import Signup from './Components/Signup';
import AddProduct from './Components/AddProduct';
import Signin from './Components/Signin';
import GetProduct from './Components/GetProduct';
import Mpesa from './Components/Mpesa';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>Sokogarden- Buy and sell online</h1>
      </header>

      <nav>
        <Link to='/signup' className='btn btn-outline-primary me-4 mt-1'>Signup</Link>
        <Link to='/signin' className='btn btn-outline-primary me-4 mt-1'>Signin</Link>
        <Link to='/addproduct' className='btn btn-outline-primary me-4 mt-1'>Add Product</Link>
        <Link to='/getproduct'className='btn btn-outline-primary me-4 mt-1'>Get Product</Link>
        <Link to='/mpesa' className='btn btn-outline-primary me-4 mt-1'>Mpesa</Link>
      </nav>

      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/getproduct' element={<GetProduct/>}/>
        <Route path='/mpesa' element={<Mpesa/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
