import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Input, LinkBack, Spinner } from '../../../components'
import { useInput } from '../../../hooks'
import API from '../../../services/api'
import { addAddress } from '../../../store/actions/addressActions'
import { resetForward } from '../../../store/actions/appActions'
import { addMessage } from '../../../store/actions/messageActions'

const countries = [
  "Австралия ",
  "Австрия ",
  "Азербайджан",
  "Албания",
  "Алжир",
  "Ангилья ",
  "Ангола",
  "Андорра",
  "Антигуа и Барбуда",
  "Аргентина ",
  "Армения ",
  "Аруба",
  "Афганистан",
  "Багамские Острова",
  "Бангладеш",
  "Барбадос",
  "Бахрейн",
  "Белиз",
  "Белоруссия",
  "Бельгия",
  "Бенин",
  "Бермуды ",
  "Бирма (Мьянма)",
  "Болгария",
  "Боливия",
  "Босния и Герцеговина",
  "Ботсвана ",
  "Бразилия ",
  "Бруней",
  "Буркина-Фасо",
  "Бурунди",
  "Бутан",
  "Вануату",
  "Великобритания",
  "Венгрия",
  "Венесуэла",
  "Виргинские острова Америка",
  "Виргинские острова",
  "Восточный Тимор",
  "Вьетнам",
  "Габон",
  "Гаити",
  "Гайана",
  "Гамбия",
  "Гана",
  "Гваделупа",
  "Гватемала",
  "Гвинея",
  "Гвинея-Бисау",
  "Германия",
  "Гибралтар",
  "Гондурас",
  "Гренада",
  "Гренландия",
  "Греция",
  "Грузия",
  "Гуам",
  "Дания",
  "Демократическая Республика Конго",
  "Джибути",
  "Джонстон (атолл)",
  "Доминика",
  "Доминиканская Республика",
  "Египет ",
  "Замбия",
  "Зимбабве",
  "Израиль",
  "Индия",
  "Индонезия",
  "Иордания",
  "Ирак",
  "Иран",
  "Ирландия",
  "Исландия",
  "Испания",
  "Италия",
  "Йемен",
  "Кабо-Верде",
  "Казахстан",
  "Каймановы острова",
  "Камбоджа",
  "Камерун ",
  "Канада",
  "Канарские острова",
  "Катар",
  "Кения",
  "Кипр",
  "Кирибати",
  "Китай",
  "Колумбия",
  "Коморы",
  "Конго",
  "Корейская Народно-Демократическая Республика",
  "Косово",
  "Коста-Рика ",
  "Кот-д’Ивуар",
  "Куба",
  "Кувейт",
  "Кыргызстан",
  "Лаос",
  "Латвия",
  "Лесото",
  "Либерия",
  "Ливан",
  "Ливия",
  "Литва",
  "Лихтенштейн",
  "Люксембург",
  "Маврикий",
  "Мавритания",
  "Мадагаскар",
  "Майотта",
  "Макао",
  "Малави",
  "Малайзия",
  "Мали",
  "Мальдивы",
  "Мальта",
  "Марокко",
  "Мартиника",
  "Маршалловы Острова",
  "Мексика",
  "Мидуэй",
  "Мозамбик",
  "Молдавия",
  "Монако",
  "Монголия",
  "Монтсеррат",
  "Намибия",
  "Науру",
  "Непал",
  "Нигер",
  "Нигерия",
  "Нидерландские Антильские острова",
  "Нидерланды",
  "Никарагуа",
  "Ниуэ",
  "Новая Зеландия",
  "Новая Каледония",
  "Норвегия",
  "Объединённые Арабские Эмираты",
  "Оман",
  "Остров Рождества",
  "Остров Святой Елены",
  "Пакистан",
  "Палау",
  "Палестина",
  "Пальмира",
  "Панама",
  "Папуа — Новая Гвинея",
  "Парагвай",
  "Перу",
  "Польша",
  "Португалия",
  "Пуэрто-Рико",
  "Республика Корея",
  "Республика Македония",
  "Реюньон",
  "Российская Федерация",
  "Руанда",
  "Румыния",
  "США",
  "Сальвадор",
  "Самоа",
  "Самоа",
  "Сан-Марино",
  "Сан-Томе и Принсипи",
  "Саудовская Аравия",
  "Свазиленд",
  "Северная Ирландия",
  "Северные Марианские острова",
  "Сейшельские Острова",
  "Сен-Мартен",
  "Сен-Пьер и Микелон",
  "Сенегал",
  "Сент-Винсент и Гренадины",
  "Сент-Китс и Невис",
  "Сент-Люсия",
  "Сербия",
  "Сингапур",
  "Сирия",
  "Словакия",
  "Словения",
  "Соломоновы Острова",
  "Сомали",
  "Судан",
  "Суринам",
  "Сьерра-Леоне",
  "Таджикистан",
  "Таиланд",
  "Тайвань",
  "Танзания",
  "Теркс и Кайкос",
  "Того",
  "Тонга",
  "Тринидад и Тобаго",
  "Тувалу",
  "Тунис",
  "Турецкая Республика Северного Кипра",
  "Туркмения",
  "Турция",
  "Уганда",
  "Узбекистан",
  "Украина",
  "Уоллис и Футуна",
  "Уругвай",
  "Уэйк",
  "Уэльс",
  "Федеративные Штаты Микронезии",
  "Фиджи",
  "Филиппины",
  "Финляндия",
  "Фолклендские острова",
  "Франция",
  "Французская Гвиана",
  "Французская Полинезия",
  "Французские Южные и Антарктические Территории",
  "Хорватия",
  "Центральноафриканская Республика",
  "Чад",
  "Черногория",
  "Чехия",
  "Чили",
  "Швейцария",
  "Швеция",
  "Шпицберген и Ян-Майен",
  "Шри-Ланка",
  "Эквадор",
  "Экваториальная Гвинея",
  "Эритрея",
  "Эстония",
  "Эфиопия",
  "Южная Георгия и Южные Сандвичевы острова",
  "Южно-Африканская Республика",
  "Ямайка",
  "Япония",
]

const AddAddress = () => {

  const [index, changeIndex] = useInput('')
  const [country, changeCountry] = useInput('')
  const [city, changeCity] = useInput('')
  const [street, changeStreet] = useInput('')
  const [home, changeHome] = useInput('')
  const [flat, changeFlat] = useInput('')
  const [secondName, changeSecondName] = useInput('')
  const [firstName, changeFirstName] = useInput('')
  const [surname, changeSurname] = useInput('')
  const [tel, changeTel] = useInput('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const store = useStore()
  const user = useSelector(state => state.user)
  const { forward } = useSelector(state => state.app)
  const [isLoading, setLoading] = useState(false)

  const addAddressHandle = (e) => {
    e.prevenDefault()

    setLoading(true)
    const address = {
      whereTo: {
        index, country, city, street, home, flat
      },
      whom: {
        secondName, firstName, surname, tel
      }
    }

    dispatch(addAddress({ id: Math.round(Math.random() * 10000), address }))

    API.updateAddresses(user.jwt, store.getState().addresses.addresses)
      .then(() => {
        dispatch(addMessage(Math.random(), 'success', 'Адрес сохранен!'))
        if (forward) {
          navigate(forward)
        } else {
          navigate('/user/addresses')
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    return () => {
      dispatch(resetForward())
    }
  }, [])

  return (
    <div>
      <form>
        <LinkBack />
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/2">
            <h1 className="font-medium mb-6">Куда</h1>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <div className="flex flex-col w-1/2 shrink-0">
                  <span className="text-xs">Индекс</span>
                  <Input value={index} onChange={changeIndex} type="number" />
                </div>
                <div className="flex flex-col w-1/2">
                  <span className="text-xs">Страна</span>
                  <select value={country} onChange={changeCountry} name="country" className="-mt-[2.5px] h-full w-full p-2 border-b-2 border-sky-200 text-sm">
                    <option value="" disabled></option>
                    {countries.map((item, index) => {
                      return <option key={index}>{item}</option>
                    })}
                  </select>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs">Населенный пункт</span>
                <Input value={city} onChange={changeCity} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs">Улица</span>
                <Input value={street} onChange={changeStreet} />
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col grow">
                  <span className="text-xs">Дом</span>
                  <Input value={home} onChange={changeHome} />
                </div>
                <div className="flex flex-col grow">
                  <span className="text-xs">Квартира</span>
                  <Input value={flat} onChange={changeFlat} />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h1 className="font-medium mb-6">Кому</h1>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col grow">
                <span className="text-xs">Фамилия</span>
                <Input value={secondName} onChange={changeSecondName} />
              </div>
              <div className="flex flex-col grow">
                <span className="text-xs">Имя</span>
                <Input value={firstName} onChange={changeFirstName} />
              </div>
              <div className="flex flex-col grow">
                <span className="text-xs">Отчество</span>
                <Input value={surname} onChange={changeSurname} />
              </div>
              <div className="flex flex-col grow">
                <span className="text-xs">Номер телефона</span>
                <Input value={tel} onChange={changeTel} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            submit={true}
            disabled={isLoading || !(city && index && country && street && home && firstName && secondName && surname && tel)}
            onClick={addAddressHandle}
            className="mt-4 min-w-[100px]"
          >
            {isLoading ? <Spinner type="small" /> : 'Сохранить'}
          </Button>
        </div>

      </form >
    </div >
  )
}

export default AddAddress