import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Footer, Message, Navbar } from './components';
import { useAuth } from './hooks';
import { Home, Login, Cart, PageNotFound, Book, Registration } from './routes';
import { Purchases, UserProfile, Profile } from './routes/Profile';
import { Adresses, AddAdress, ViewAdresses } from './routes/Profile/Adresses';
import { Cards, AddCard, ViewCards } from './routes/Profile/Cards'
import API from './services/api';
import { setCart } from './store/actions/cartAction';
import { login, logout } from './store/actions/userActions';

function App() {
  const isAuth = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { jwt } = useSelector(state => state.user)
  const { messages } = useSelector(state => state.messages)

  useEffect(() => {
    if (isAuth)
      API.getUser(jwt)
        .then((data) => {
          const { cart, cards } = data
          dispatch(login({ user: data, jwt }))
          dispatch(setCart(cart))
        })
        .catch((e) => {
          console.log(e);
          dispatch(logout())
          navigate('/')
        })
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container flex flex-col flex-grow mt-4 mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" >
            <Route path="" element={<Profile />} >
              <Route path="cards" element={<Cards />}>
                <Route index element={<ViewCards />} />
                <Route path="add" element={<AddCard />} />
              </Route>
              <Route path="adresses" element={<Adresses />}>
                <Route index element={<ViewAdresses />} />
                <Route path="add" element={<AddAdress />} />
              </Route>
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
      <div className="flex flex-col gap-2 fixed bottom-2 z-30 left-1/2 -translate-x-1/2">
        {messages.map((item) => {
          return <Message key={item.id} {...item} />
        })}
      </div>
    </div>
  );
}

export default App;
