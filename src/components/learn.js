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
            animateOnce="true" 
            className="how_to_learn_part blur flex flex_align_center">
            <img src='/pay.png' className="how_to_learn_icon" alt="pay" />
            <div className="learn_description">
              <h6>Оплата</h6>
              <p>Лёгкая online-оплата</p>
            </div>
          </ScrollAnimation>        
          <ScrollAnimation
            animateIn="fadeInDown"
            animateOnce="true"
            className="how_to_learn_part blur flex flex_align_center">
            <img src='/login.png' className="how_to_learn_icon" alt="login" />
            <div className="learn_description">
              <h6>Доступ к личному кабинету на платформе обучения</h6>
              <p>Ваш личный кабинет с доступом к урокам и домашним заданиям</p>
            </div>
          </ScrollAnimation>          
          <ScrollAnimation
            animateIn="fadeInDown"
            animateOnce="true"
            className="how_to_learn_part blur flex flex_align_center">
            <img src='/education.png' className="how_to_learn_icon" alt="education" />
            <div className="learn_description">              
              <h6>Обучение</h6>
              <p>В online-формате каждый день с автором курса и сокурсниками</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInDown"
            animateOnce="true"
            className="how_to_learn_part blur flex flex_align_center">
            <img src='/user.png' className="how_to_learn_icon" alt="user" />
            <div className="learn_description">              
              <h6>Прямые эфиры от Автора курса</h6>
              <p>Много полезной информации из личного опыта</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInDown"
            animateOnce="true"
            className="how_to_learn_part blur flex flex_align_center">
            <img src='/gift.png' className="how_to_learn_icon" alt="gift" />
            <div className="learn_description">                
              <h6>Приз от Автора курса!</h6>
              <p>Вы получаете не только новый опыт, знания и профессию, но и ПРИЗ за самую лучшую маску!</p>
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