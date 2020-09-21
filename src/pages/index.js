import React from "react"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Price from "../components/price"

import Button from "../common/button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="main" className="bg_gradient_primary">
      <div className="main_content">
        <div className="main_content__description">
          <h3>
            Пройдите комплексные курсы AR разработки масок 
            для Инстаграмм
          </h3>
          <p>
            Комплексный курс включает в себя несколько небольших курсов и 
            позволяет полностью освоить новую для себя профессию
          </p>
          <Button link="/" linkText="Купить комплексный курс" classes="button primary_button"/>
          </div>
      </div>
    </section>
    <section id="about_courсe">
      <h4 className="section_header">О курсе</h4>
      <div className="about_content">
        <div className="about_picture"></div>
          <div className="about_text">
          <div className="about_text__header">
            <h4>Курс подойдет тем, кто:</h4>
          </div>
            <ul className="about_cource__list">
              <li className="about_cource__list_item">
                <span>Хочет освоить современную профессию</span>
              </li>
              <li className="about_cource__list_item">
                <span>Расширить спектр своих услуг</span>
                </li>
              <li className="about_cource__list_item">
                <span>Обучиться новому хобби</span>
                </li>
              <li className="about_cource__list_item">
                <span>Хочет освоить программу Spark AR</span>
              </li>
            </ul>
            <p>Комплексный курс позволит вам полностью овладеть профессией и выйти на высокий заработок</p>
            <Button link="/" linkText="Купить комплексный курс" classes="button primary_button"/>
            <div className="about_text__header">
              <h4>Автор курса:</h4>
            </div>
            <ul className="about_cource__list">
              <li className="about_cource__list_item">
                <span>Профессиональный AR-разработчик масок для Инстаграмм</span>
              </li>
              <li className="about_cource__list_item">
                <span>Создатель курса "Маски для себя</span>
                </li>
              <li className="about_cource__list_item">
                <span>Специалист в программе Spark AR</span>
                </li>
            </ul>
        </div>
      </div>
    </section>
    <section id="how_to_learn" className="bg_gradient_primary flex">
      <div className="surprise">
        <div className="section_header">
          <h4>Как проходит обучение</h4>
        </div>
        <div className="surprise_text">
          <h5>Специальный приз при покупке расширенного курса</h5>
          <p>Индивидуальный урок по созданию и публикации маски абсолютно любой сложности</p>
        </div>
        <div className="degrees_for_buy">
          <h6>Быстрый результат</h6>
          <p>Освойте новую профессию всего за несколько недель</p>
        </div>
        <div className="degrees_for_buy">
          <h6>Большой доход</h6>
          <p>Средняя цена на маску составляет 350$ для заказывающей компании</p>
        </div>
      </div>
      <div className="how_to_learn">
        <div className="how_to_learn_part">
          <div className="how_to_learn_icon"></div>
          <h6>Оплата</h6>
          <p>Лёгкая online-оплата через корзину</p>
        </div>
        <div className="how_to_learn_part">
          <div className="how_to_learn_icon"></div>
          <h6>Доступ к личному кабинету на платформе обучения</h6>
          <p>Ваш личный кабинет с доступом к урокам, эфирам и чату</p>
        </div>
        <div className="how_to_learn_part">
          <div className="how_to_learn_icon"></div>
          <h6>Обучение</h6>
          <p>В online-формате каждый день с автором курса и сокурсниками либо самостоятельно</p>
        </div>
        <div className="how_to_learn_part">
          <div className="how_to_learn_icon"></div>
          <h6>Прямые эфиры от Автора курса</h6>
          <p>Много полезной информации из личного опыта</p>
        </div>
        <div className="how_to_learn_part">
          <div className="how_to_learn_icon"></div>
          <h6>Приз от Автора курса!</h6>
          <p>Вы получаете не только новый опыт, знания и профессию, но и ПРИЗ за самую лучшую маску!</p>
        </div>
      </div>
    </section>
    <Banner />
    <Price sectionId="price" priceHeader="Price"/>
    <Price sectionId="price" priceHeader="Price"/>
    <Banner />
    <section id="portfolio">
      <div className="section_header">
        <h4>Работы автора курса</h4>
      </div>
      <div className="example">
        <div className="example_item">
          <div className="exampe_screen">
            <img src="#"></img>
          </div>
          <h6 className="example_header">Маска "Фиолетовые облака"</h6>
          <p className="example_description">Сделанная вручную маска,
            которую сможет реализовать любой, кто пройдет курсы
          </p>
        </div>
        <div className="example_item">
          <div className="exampe_screen">
            <img src="#"></img>
          </div>
          <h6 className="example_header">Evil Маска</h6>
          <p className="example_description">Сделанная вручную маска,
            которую сможет реализовать любой, кто пройдет курсы
          </p>
        </div>
        <div className="example_item">
          <div className="exampe_screen">
            <img src="#"></img>
          </div>
          <h6 className="example_header">Маска Валькирии</h6>
          <p className="example_description">Сделанная вручную маска,
            которую сможет реализовать любой, кто пройдет курсы
          </p>
        </div>
      </div>
      <div className="offer">
        <h5>Хотите научиться делать такие же замечательные маски?</h5>
        <p>
          Тогда вам точно подойдет мой комплексный курс,
          который включает и "Маски для себя" и
          "Профессиональный разработчик масок"
        </p>
        <Button link="#" classes="#" linkText="Купить комплексный курс" />
      </div>
    </section>
    <section id="contact">
      <div className="section_header">
        <h4>Обратная связь</h4>
      </div>
      <div className="photo">
        <img></img>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis
        </h6>
        <p>Veca Rony, создатель курса</p>
      </div>
      <div className="contact">
        FORM
      </div>
    </section>
  </Layout>
)

export default IndexPage
