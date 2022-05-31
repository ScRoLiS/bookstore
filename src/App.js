import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Footer, Message, Modal, Navbar } from './components';
import { useAuth } from './hooks';
import { Home, Login, Cart, PageNotFound, Book, Registration, Checkout } from './routes';
import { Purchases, UserProfile, Profile } from './routes/Profile';
import { Addresses, AddAddress, ViewAddresses, AddressDetails } from './routes/Profile/Addresses';
import { Cards, AddCard, ViewCards } from './routes/Profile/Cards'
import { setAddresses } from './store/actions/addressActions';
import { setCards } from './store/actions/cardActions';
import { setCart } from './store/actions/cartAction';
import { login, logout } from './store/actions/userActions';
import { addMessage } from './store/actions/messageActions';
import { setPurchases } from './store/actions/purchaseActions';
import ViewPurchases from './routes/Profile/Purchases/ViewPurchases';
import PurchaseDetails from './routes/Profile/Purchases/PurchaseDetails';
import API from './services/api';

import { ReactComponent as HerokuLogo } from './assets/heroku.svg'

function App() {
  const isAuth = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { jwt } = useSelector(state => state.user)
  const { messages } = useSelector(state => state.messages)
  const [modal, setModal] = useState(false)

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
          dispatch(setPurchases(purchases))
        })
        .catch((e) => {
          console.log(e);
          dispatch(logout())
          navigate('/')
        })
    }
  }, [])

  useEffect(() => {
    const modalId = setTimeout(() => {
      setModal(true)
    }, 4000)

    API.getBooks()
      .finally(() => {
        clearInterval(modalId)
      })
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container flex flex-col flex-grow mt-4 mb-4">
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
              <Route path="purchases" element={<Purchases />}>
                <Route index element={<ViewPurchases />} />
                <Route path=":id" element={<PurchaseDetails />} />
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
      </main>
      <Footer />
      <Modal open={modal} toggle={setModal}>
        <HerokuLogo className="w-40" />
        Загузка идет слишком долго. Возможно сервер Heroku спит. Подождите несколько секунд!
      </Modal>
      <div className="flex flex-col gap-2 fixed bottom-2 z-30 left-1/2 -translate-x-1/2">
        <AnimatePresence>
          {messages.map((item) => {
            return <Message key={item.id} {...item} />
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
