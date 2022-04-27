import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Footer, Message, Navbar } from './components';
import { useAuth } from './hooks';
import { Home, Login, Cart, PageNotFound, Book, Registration, Checkout } from './routes';
import { Purchases, UserProfile, Profile } from './routes/Profile';
import { Addresses, AddAddress, ViewAddresses, AddressDetails } from './routes/Profile/Addresses';
import { Cards, AddCard, ViewCards } from './routes/Profile/Cards'
import { setAddresses } from './store/actions/addressActions';
import { setCards } from './store/actions/cardActions';
import { setCart } from './store/actions/cartAction';
import { login, logout } from './store/actions/userActions';
import API from './services/api';
import { addMessage } from './store/actions/messageActions';


function App() {
  const isAuth = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { jwt } = useSelector(state => state.user)
  const { messages } = useSelector(state => state.messages)

  useEffect(() => {
    if (isAuth) {
      dispatch(addMessage(Math.random(), 'success', 'Идет загрузка данных...'))
      API.getUser(jwt)
        .then((data) => {
          const { cart, cards, addresses, purchases } = data
          dispatch(login({ user: data, jwt }))
          dispatch(setCart(cart))
          dispatch(setCards(cards))
          dispatch(setAddresses(addresses))
        })
        .catch((e) => {
          console.log(e);
          dispatch(logout())
          navigate('/')
        })
    }
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
              <Route path="addresses" element={<Addresses />}>
                <Route index element={<ViewAddresses />} />
                <Route path="add" element={<AddAddress />} />
                <Route path=":id" element={<AddressDetails />} />
              </Route>
              <Route path="" element={<Navigate to="/user/profile" />} />
              <Route path="purchases" element={<Purchases />} />
              <Route path="profile" element={<UserProfile />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
          </Route>
          <Route path="/checkout" element={<Checkout />} />
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
