import React from "react"

const About = () => (
    <section id="about_courсe">
      <h4 className="section_header">Для кого эти курсы?</h4>
      <div className="about_content">
        <div className="about_line">
          <div className="about_picture">
            <img src={require('../assets/img/about.jpg')} alt="about"/>
          </div>
          <div className="about_text">
            <div className="about_text__header">
              <h4>Курсы подойдут тем, кто:</h4>
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
                <span>Стать разработчиком AR-эффектов</span>
              </li>
            </ul>
            <p>Комплексный курс позволит вам полностью овладеть профессией и выйти на высокий заработок</p>
          </div>
        </div>
        <div className="about_line">
          <div className="about_text">
            <div className="about_text__header">
              <h4>Автор курса:</h4>
            </div>
            <ul className="about_cource__list mb5 about_margin_mobile">
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
          <div className="about_picture">
            <img src={require('../assets/img/about_author.jpg')} alt="about"/>
          </div>
        </div>
      </div>
    </section>
)

export default About