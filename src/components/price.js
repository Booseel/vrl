import React from 'react'
import Button from "../common/button"
import Card from "../common/card"

const Price = (props) => (
    <section id={props.sectionId}>
        <h4 className="section_header">Выбери учебную программу</h4>
        <div className="cards flex spc_arnd mb5">            
            <Card variant="basic" cardName="Базовая" cardDescription="1 неделя" lowerPrice="5 000" currentPrice="5 000" higherPrice="7 500">
                <ul className="about_cource__list flex column cardlist">
                    <li className="about_cource__list_item">
                        <span>Загрузка и установка программы, знакомство с интерфейсом</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Ретушь и стандартная пластика</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Пресет и текстура</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Рисунок на лице</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Макияж</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Работа со слоями</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Материалы</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Освещение и отражение</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Публикация маски</span>
                    </li>
                </ul>
                <Button link="/" classes="button primary_button" linkText="КУПИТЬ" />
            </Card>
            <Card variant="basic" cardName="Продвинутая" cardDescription="2 недели" lowerPrice="10 000" currentPrice="10 000" higherPrice="16 500" buttonVariant="one">
                <ul className="about_cource__list flex column cardlist">
                    <li className="about_cource__list_item">
                        <span>Замена фона</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Работа с текстурой камеры</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Цвет глаз и волос</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Переключение по тапу и добавление инструкций</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Технология частиц</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Реакция на эмоции</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Добавление объектов вокург головы</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Покадровая анимация и рандомный выбор</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Авторская покадровая анимация</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Эффект Kira-Kira</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Работа со слоями ретушь + пластика + пресет</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Отбеливание зубов</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Смазанное движение</span>
                    </li>
                </ul>
                <Button link="/" classes="button primary_button" linkText="КУПИТЬ" />
            </Card>
            <Card variant="basic" cardName="Полная" cardDescription="4 недели" lowerPrice="15 000" currentPrice="15 000" higherPrice="22 500" buttonVariant="one">
               <ul className="about_cource__list flex column cardlist">
                    <li className="about_cource__list_item card_full">
                        <span>Базовая + Продвинутая</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Добавление музыки и изменение голоса</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>3D объекты на лице и голове</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>3D объекты на шее и за спиной</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Кнопки выбора</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>3D анимация</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Авторская пластика</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Физика объектов</span>
                    </li>
                    <li className="about_cource__list_item">
                        <span>Игры</span>
                    </li>
                </ul>
                <Button link="/" classes="button primary_button" linkText="КУПИТЬ" />
            </Card>
        </div>
    </section>
)

export default Price