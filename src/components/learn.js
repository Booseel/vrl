import React from "react"

import ScrollAnimation from 'react-animate-on-scroll'
import { Parallax } from 'react-scroll-parallax';

const Learn = () => (
    <section id="how_to_learn" className="bg_gradient_primary flex column">
      <h4 className="section_header">Как проходит обучение?</h4>
      <div className="how_to_learn_content flex">
        <div className="illustration">
          <img src='/head_ill.png' className="head_ill" alt="head" />
          <div className="hands_ill">
            <img className="animate_hands_ill" src='/hands_ill.png' alt="hands" />
          </div>
        </div>
        <div className="how_to_learn flex column flex_align_center">
          <ScrollAnimation
            animateIn="fadeInDown"
            animateOnce={true}
            className="how_to_learn_part blur flex flex_align_center">
            <img src='/pay.png' className="how_to_learn_icon" alt="pay" />
            <div className="learn_description">
              <p>Лёгкая оплата на сайте и возможность рассрочки</p>
            </div>
          </ScrollAnimation>        
          <ScrollAnimation
            animateIn="fadeInDown"
            animateOnce={true}
            className="how_to_learn_part blur flex flex_align_center">
            <img src='/login.png' className="how_to_learn_icon" alt="login" />
            <div className="learn_description">
              <p>Удобный личный кабинет с доступом к урокам, необходимым документам, заданиям и обратной связи</p>
            </div>
          </ScrollAnimation>          
          <ScrollAnimation
            animateIn="fadeInDown"
            animateOnce={true}
            className="how_to_learn_part blur flex flex_align_center">
            <img src='/education.png' className="how_to_learn_icon" alt="education" />
            <div className="learn_description">
              <p>Обучение в online-формате, чат с однокурсниками и автором курса в ежедневном доступе</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInDown"
            animateOnce={true}
            className="how_to_learn_part blur flex flex_align_center">
            <img src='/user.png' className="how_to_learn_icon" alt="user" />
            <div className="learn_description">
              <p>Профессия будущего с нуля во всех деталях с опытом из личной практики автора курса</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInDown"
            animateOnce={true}
            className="how_to_learn_part blur flex flex_align_center">
            <img src='/gift.png' className="how_to_learn_icon" alt="gift" />
            <div className="learn_description">     
              <p>Приз за самый лучший проект среди учеников!</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className="cloud_ill">
        <Parallax y={[-20, 5]}>          
          <img src='/cloud.png' alt="cloud ill" />
        </Parallax>
      </div>
    </section>
)

export default Learn