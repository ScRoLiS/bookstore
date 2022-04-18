import { Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Home, Login, Cart, PageNotFound, Book } from './routes';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
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
      <Footer />
    </div>
  );
}

export default App;
