import React from 'react'
import { BsBookHalf, BsCloudArrowUp } from 'react-icons/bs'
import { DiReact } from 'react-icons/di'
import { SiRedux, SiStrapi, SiReactrouter, SiHeroku } from 'react-icons/si'
import { AiFillGithub, AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookSquare, FaOdnoklassniki } from 'react-icons/fa'

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
        label: 'Одноклассники',
        to: 'https://ok.ru/',
        icon: <FaOdnoklassniki />
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
      }
    ]
  }
]

const Footer = () => {
  return (
    <div className="bg-white p-4">
      <div className="container items-center md:items-start md:justify-between flex gap-4 flex-col md:flex-row">
        <div className="flex flex-col items-center w-56 shrink-0">
          <div className="flex gap-1 items-center font-bold text-base md:text-md">
            <BsBookHalf className="text-sky-400 mt-0.5 md:mt-0.5" />
            <span>BOOK<span className="text-sky-400">STORE</span></span>
          </div>
          <div className="font-light text-sm text-center md:text-left mt-2 md:mt-0">
            BookStore - проект, после которого я надеюсь найти работу получше!
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-auto gap-10">
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
    </div>
  )
}

export default Footer