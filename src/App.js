import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CardsDetail from './components/CardsDetail';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Header />
      <Routes>
      <Route path='/' element={<Cards />}></Route>
      <Route path='/cart/:id' element={<CardsDetail />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
