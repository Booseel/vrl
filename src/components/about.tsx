import React from "react"

import ScrollAnimation from 'react-animate-on-scroll'

import ListItemMap from './listItemMap'

const thisCourceFor = [
  {
      id: 1,
      content: 'Освоить современную профессию',
  },
  {
      id: 2,
      content: 'Расширить спектр своих услуг',
  },
  {
      id: 3,
      content: 'Обучиться новому хобби',
  },
  {
      id: 4,
      content: 'Стать разработчиком AR-эффектов',
  },
]

const courceAuthor = [
  {
      id: 1,
      content: 'Профессиональный AR-разработчик масок для Инстаграмм',
  },
  {
      id: 2,
      content: 'Создатель курса "Маски для себя',
  },
  {
      id: 3,
      content: 'Специалист в программе Spark AR',
  },
]

const About = () => (
    <section id="about_courсe">
      <h4 className="section_header">Для кого эти курсы?</h4>
      <div className="about_content">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <div className="about_line">
            <div className="about_picture">
              <img src='/about.jpg' alt="about"/>
            </div>
            <div className="about_text">
              <div className="about_text__header">
                <h4>Курсы подойдут тем, кто хочет:</h4>
              </div>
              <ul className="about_cource__list">
               <ListItemMap cardList={thisCourceFor} /> 
              </ul>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <div className="about_line">
            <div className="about_text">
              <div className="about_text__header">
                <h4>Автор курса:</h4>
              </div>
              <ul className="about_cource__list mb5 about_margin_mobile">
               <ListItemMap cardList={courceAuthor} /> 
              </ul>
            </div>
            <div className="about_picture">
              <img src='/about_author.jpg' alt="about"/>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
)

export default About