import { Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Home, Login, Cart, PageNotFound, Book, Registration } from './routes';
import { Adresses, Cards, Purchases, UserProfile, Profile } from './routes/Profile';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container flex flex-col flex-grow mt-4 mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" >
            <Route path="" element={<Profile />} >
              <Route path="cards" element={<Cards />} />
              <Route path="adresses" element={<Adresses />} />
              <Route path="purchases" element={<Purchases />} />
              <Route path="profile" element={<UserProfile />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
