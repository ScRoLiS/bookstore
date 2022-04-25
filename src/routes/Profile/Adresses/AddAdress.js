import React from 'react'
import { Button, Input } from '../../../components'

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

const AddAdress = () => {

  const countryHandle = (e) => {
    console.log(e.target.value);
  }

  return (
    <div>
      <form className="">
        <div className="flex gap-4">
          <div className="w-1/2">
            <h1 className="font-medium mb-2">Куда</h1>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <Input className="input w-1/2 shrink-0" placeholder="Индекс" />
                <select defaultValue="" onChange={countryHandle} name="country" className="-m-[0.5px] h-full w-1/2 p-2 border-b-2 border-sky-200 text-sm">
                  <option value="" disabled>Страна</option>
                  {countries.map((item, index) => {
                    return <option key={index}>{item}</option>
                  })}
                </select>
              </div>
              <Input placeholder="Населенный пункт" />
              <Input placeholder="Улица" />
              <div className="flex gap-2">
                <Input placeholder="Дом" />
                <Input placeholder="Квартира" />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="font-medium mb-2">Кому</h1>
            <div className="flex flex-col gap-4">
              <Input placeholder="Фамилия" />
              <Input placeholder="Имя" />
              <Input placeholder="Отчество" />
              <Input placeholder="Номер телефона" />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="mt-4">Сохранить</Button>
        </div>

      </form >
    </div >
  )
}

export default AddAdress