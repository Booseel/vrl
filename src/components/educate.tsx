import React from "react"

import ListItemMap from './listItemMap'

const systemRequirements= [
  {
      id: 1,
      content: 'Системные требования к ПК для установки программы Spark AR:',
  },
  {
      id: 2,
      content: 'Операционная система Windows 10 (64 bit) или MacOS 10.14+',
  },
  {
      id: 3,
      content: 'Оперативная память 4GB и выше',
  },
  {
      id: 4,
      content: 'Процессор Intel Core i3 2.5Ghz, или аналогичный и выше.',
  },
  {
      id: 5,
      content: 'Видеокарта Intel HD Graphics 4000 / Nvidia GeForce 710 / AMD Radeon HD 6450 или лучше',
  },
  {
      id: 6,
      content: 'Минимальное разрешение экрана 1280 x 768',
  },
]

const otherRequirements= [
  {
      id: 1,
      content: 'Компьютер с доступом в Интернет',
  },
  {
      id: 2,
      content: 'Уметь пользоваться компьютером',
  },
  {
      id: 3,
      content: 'Уметь пользоваться любым графическим редактором, например, Adobe Photoshop',
  },
  {
      id: 4,
      content: 'Аккаунт в Telegram для доступа к чату курса',
  },
  {
      id: 5,
      content: 'Аккаунт Google (Gmail)',
  },
  {
      id: 6,
      content: 'Любая программа для работы с 3D объектами (для Полной учебной программы)',
  },
]

const Educate = () => (
    <section id="for_educate" className="flex column flex_align_center">
      <h4 className="section_header">Что потребуется для обучения?</h4>
      <div className="flex for_educate spc_arnd mb5">
        <div className="for_educate_card">
          <h4>Системные требования к ПК для установки программы Spark AR:</h4>
          <ul className="about_cource__list mb5">
            <ListItemMap cardList={systemRequirements} /> 
          </ul>
        </div>
        <div className="for_educate_card">
          <h4>Что нужно еще:</h4>
          <ul className="about_cource__list">
            <ListItemMap cardList={otherRequirements} /> 
          </ul>
        </div>
      </div>
      <img className="for_educate_cloud" src='/cloud.png' alt="cloud" />
    </section>
)

export default Educate