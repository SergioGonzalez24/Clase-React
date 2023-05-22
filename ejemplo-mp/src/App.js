import { Route, Routes } from 'react-router-dom';
import { About, Contact, Events, Home, NotFound, Products, Services, History } from './components/Paginas';
import { Navbar } from './components/Navbar';
import { Paises } from './components/PP.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/:countryName' element={<Paises/>} />

        <Route path='/about' element={<About/>}>
          <Route path='services' element={<Services/>} />
          <Route path='history' element={<History/>} />

        </Route>

        <Route path='/products' element={<Products/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<NotFound/>} />

      </Routes>
    </div>
  );
}

export default App;
