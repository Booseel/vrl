import React from "react"

const Educate = () => (
    <section id="for_educate" className="flex column flex_align_center">
      <h4 className="section_header">Что потребуется для обучения?</h4>
      <div className="flex for_educate spc_arnd mb5">
        <div className="for_educate_card blur">
          <h4>Системные требования к ПК для установки программы Spark AR:</h4>
          <ul className="about_cource__list mb5">
            <li className="about_cource__list_item">
                <span>Операционная система Windows 10 (64 bit) или MacOS 10.14+</span>
            </li>
            <li className="about_cource__list_item">
                <span>Оперативная память 4GB и выше</span>
            </li>
            <li className="about_cource__list_item">
                <span>
                  Процессор	Intel Core i3 2.5Ghz, или аналогичный и выше. 
                </span>
            </li>
            <li className="about_cource__list_item">
                <span>
                  Видеокарта Intel HD Graphics 4000 / Nvidia GeForce 710 / AMD Radeon HD 6450 или лучше
                </span>
            </li>
            <li className="about_cource__list_item">
                <span>Минимальное разрешение экрана 1280 x 768</span>
            </li>
          </ul>
        </div>
        <div className="for_educate_card blur">
          <h4>Что нужно еще:</h4>
          <ul className="about_cource__list">
            <li className="about_cource__list_item">
                <span>
                  Компьютер с доступом в Интернет
                </span>
            </li>
            <li className="about_cource__list_item">
                <span>Уметь пользоваться компьютером</span>
            </li>
            <li className="about_cource__list_item">
                <span>Уметь пользоваться любым графическим редактором, например, Adobe Photoshop</span>
            </li>
          </ul>
        </div>
      </div>
      <img className="for_educate_cloud" src='/cloud.png' alt="cloud" />
    </section>
)

export default Educate