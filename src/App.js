import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Home, Login, Cart, PageNotFound, Book } from './routes';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container flex flex-col flex-grow mt-4 mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
