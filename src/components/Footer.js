import React from 'react'
import { BsBookHalf, BsCloudArrowUp } from 'react-icons/bs'
import { DiReact } from 'react-icons/di'
import { GiReceiveMoney } from 'react-icons/gi'
import { SiRedux, SiStrapi, SiReactrouter, SiHeroku } from 'react-icons/si'
import { AiFillCreditCard, AiOutlineGift, AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookSquare, FaOdnoklassniki } from 'react-icons/fa'
import { MdOutlineLiveHelp, MdOutlineSell, MdDeliveryDining } from 'react-icons/md'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { RiQuestionAnswerLine } from 'react-icons/ri'

const footerLinks = [
  {
    title: 'Технологии',
    links: [
      {
        label: 'React',
        to: 'https://reactjs.org/',
        icon: <DiReact />
      },
      {
        label: 'Redux',
        to: 'https://redux.js.org/',
        icon: <SiRedux />
      },
      {
        label: 'Strapi',
        to: 'https://strapi.io/',
        icon: <SiStrapi />
      },
      {
        label: 'Heroku',
        to: 'https://heroku.com/',
        icon: <SiHeroku />
      },
      {
        label: 'Cloudinary',
        to: 'https://cloudinary.com/',
        icon: <BsCloudArrowUp />
      },
      {
        label: 'React Router',
        to: 'https://reactrouter.com/',
        icon: <SiReactrouter />
      }
    ]
  },
  {
    title: 'Мы в соцсетях',
    links: [
      {
        label: 'Facebook',
        to: 'https://facebook.com/',
        icon: <FaFacebookSquare />
      },
      {
        label: 'YouTube',
        to: 'https://youtube.com/',
        icon: <AiOutlineYoutube />
      }
      ,
      {
        label: 'Instagram',
        to: 'https://instagram.com/',
        icon: <AiOutlineInstagram />
      },
      {
        label: 'Одноклассники',
        to: 'https://ok.ru/',
        icon: <FaOdnoklassniki />
      },
    ]
  },
  {
    title: 'Покупателям',
    links: [
      {
        label: 'Доставка',
        to: 'https://strapi.io/',
        icon: <MdDeliveryDining />
      },
      {
        label: 'Возврат товара',
        to: 'https://heroku.com/',
        icon: <AiOutlineGift />
      },
      {
        label: 'Как сделать заказ',
        to: '#',
        icon: <MdOutlineLiveHelp />
      },
      {
        label: 'Способы оплаты',
        to: 'https://redux.js.org/',
        icon: <AiFillCreditCard />
      },
      {
        label: 'Правила продажи',
        to: 'https://reactrouter.com/',
        icon: <MdOutlineSell />
      },
      {
        label: 'Публичная оферта',
        to: 'https://reactrouter.com/',
        icon: <HiOutlineDocumentText />
      },
      {
        label: 'Вопросы и ответы',
        to: 'https://reactrouter.com/',
        icon: <RiQuestionAnswerLine />
      },
      {
        label: 'Возврат денежных средств',
        to: 'https://cloudinary.com/',
        icon: <GiReceiveMoney />
      },
    ]
  },
]

const Footer = () => {
  return (
    <footer className="bg-white p-4">
      <div className="container items-center md:items-start flex gap-4 flex-col md:flex-row">
        <div className="flex flex-col items-center w-56 shrink-0">
          <div className="flex gap-1 items-center font-bold text-base md:text-md">
            <BsBookHalf className="text-sky-400 mt-0.5 md:mt-0.5" />
            <span>BOOK<span className="text-sky-400">STORE</span></span>
          </div>
          <div className="font-light text-base text-center mt-2 md:mt-0 ">
            BookStore - простой и удобный, лучший книжный интернет-магазин! Надеюсь после этого проекта, я найду работу получше.
          </div>
        </div>
        <div className="grid md:ml-auto grid-cols-1 md:grid-cols-3 w-auto gap-10">
          {footerLinks.map((item, index) => {
            return (
              <div key={index} className="flex flex-col items-center md:items-start gap-2">
                <span className="font-medium">{item.title}</span>
                {item.links.map((link, index) => {
                  return <a href={link.to} key={index} className="link-footer">{link.icon} {link.label}</a>
                })}
              </div>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer