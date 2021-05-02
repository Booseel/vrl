import React, { useState } from 'react'

import Card from "../common/card"
import Modal from '../common/modal'
import SignUp from '../common/signUp'

import ListItemMap from './listItemMap'

const cardNames = {
    basic: "Базовый курс",
    advanced: "Продвинутый курс",
    full: "Полный курс",
};

const currentPrices = {
    basic: 5000,
    advanced: 10000,
    full: 15000,
}

const cardKeys = {
    basic: "basic",
    advanced: "advanced",
    full: "full",
}

const basicList = [
    {
        id: 1,
        content: 'Загрузка и установка программы, знакомство с интерфейсом',
    },
    {
        id: 2,
        content: 'Ретушь и стандартная пластика',
    },
    {
        id: 3,
        content: 'Пресет и текстура',
    },
    {
        id: 4,
        content: 'Рисунок на лице',
    },
    {
        id: 5,
        content: 'Макияж',
    },
    {
        id: 6,
        content: 'Работа со слоями',
    },
    {
        id: 7,
        content: 'Материалы',
    },
    {
        id: 8,
        content: 'Освещение и отражение',
    },
    {
        id: 9,
        content: 'Публикация маски',
    },
]

const advancedList = [
    {
        id: 1,
        content: 'Замена фона',
    },
    {
        id: 2,
        content: 'Работа с текстурой камеры',
    },
    {
        id: 3,
        content: 'Цвет глаз и волос',
    },
    {
        id: 4,
        content: 'Переключение по тапу и добавление инструкций',
    },
    {
        id: 5,
        content: 'Технология частиц',
    },
    {
        id: 6,
        content: 'Реакция на эмоции',
    },
    {
        id: 7,
        content: 'Добавление объектов вокург головы',
    },
    {
        id: 8,
        content: 'Покадровая анимация и рандомный выбор',
    },
    {
        id: 9,
        content: 'Авторская покадровая анимация',
    },
    {
        id: 10,
        content: 'Эффект Kira-Kira',
    },
    {
        id: 11,
        content: 'Работа со слоями ретушь + пластика + пресет',
    },
    {
        id: 12,
        content: 'Отбеливание зубов',
    },
    {
        id: 13,
        content: 'Смазанное движение',
    },
]

const fullList = [
    {
        id: 1,
        content: 'Добавление музыки и изменение голоса',
    },
    {
        id: 2,
        content: '3D объекты на лице и голове',
    },
    {
        id: 3,
        content: '3D объекты на шее и за спиной',
    },
    {
        id: 4,
        content: 'Кнопки выбора',
    },
    {
        id: 5,
        content: '3D анимация',
    },
    {
        id: 6,
        content: 'Авторская пластика',
    },
    {
        id: 7,
        content: 'Физика объектов',
    },
    {
        id: 8,
        content: 'Игры',
    },
]

const Price = () => {

    const [cardNameModal, setCardNameModal] = useState('');
    const [cardPriceModal, setCardPriceModal] = useState('');
    const [cardKeyModal, setCardKeyModal] = useState('');

    const openModal = (cardKeyModal, cardNameModal, cardPriceModal) => {
        setModalActive(true)
        cardNameModal = setCardNameModal(cardNameModal);
        cardPriceModal = setCardPriceModal(cardPriceModal);
        cardKeyModal = setCardKeyModal(cardKeyModal);
    };
    
    const [ modalActive, setModalActive ] = useState(false)

    return (
        <section id="price">
            <Modal modalId={cardKeyModal} active={modalActive} setActive={setModalActive} modalHeader={cardNameModal} modalPrice={cardPriceModal}>
                <SignUp onRequirements={() => setModalActive(false)}/>
            </Modal>
            <h4 className="section_header">Выбери учебную программу</h4>
            <div className="cards flex spc_arnd">            
                <Card cardId={cardKeys.basic} cardName={cardNames.basic} cardDescription="1 неделя" lowerPrice="5 000" currentPrice={currentPrices.basic} higherPrice="7 500">
                    <ul className="about_cource__list flex column cardlist">
                        <ListItemMap cardList={basicList} />
                    </ul>
                    <div className="button primary_button" onClick={() => openModal(cardKeys.basic, cardNames.basic, currentPrices.basic)}>КУПИТЬ</div>
                </Card>
                <Card cardId={cardKeys.advanced} cardName={cardNames.advanced} cardDescription="2 недели" lowerPrice="10 000" currentPrice={currentPrices.advanced} higherPrice="16 500">
                    <ul className="about_cource__list flex column cardlist">
                        <ListItemMap cardList={advancedList} />
                    </ul>
                    <div className="button primary_button" onClick={() => openModal(cardKeys.advanced, cardNames.advanced, currentPrices.advanced)}>КУПИТЬ</div>
                </Card>
                <Card cardId={cardKeys.full} cardName={cardNames.full} cardDescription="4 недели" lowerPrice="15 000" currentPrice={currentPrices.full} higherPrice="22 500">
                <ul className="about_cource__list flex column cardlist">
                        <li className="about_cource__list_item card_full">
                            <span>Базовый курс <br /> + <br /> Продвинутый курс</span>
                        </li>
                        <ListItemMap cardList={fullList} />
                    </ul>
                    <div className="button primary_button" onClick={() => openModal(cardKeys.full, cardNames.full, currentPrices.full)}>КУПИТЬ</div>
                </Card>
            </div>
        </section>
    );
}

export default Price