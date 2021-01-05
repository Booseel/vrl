import React from "react"

import Example from "../components/example"

import Button from "../common/button"

const Learn = () => {
    <section id="how_to_learn" className="bg_gradient_primary flex column">
      <h4 className="section_header">Как проходит обучение?</h4>
      <div className="how_to_learn_content flex">
        <div className="illustration">
          <img src={require('../assets/img/head_ill.png')} className="head_ill" />
          <img src={require('../assets/img/hands_ill.png')} className="hands_ill" />
        </div>
        <div className="how_to_learn flex column flex_align_center">
          <div className="how_to_learn_part blur flex flex_align_center">
            <img src={require('../assets/img/pay.png')} className="how_to_learn_icon" />
            <div className="learn_description">
              <h6>Оплата</h6>
              <p>Лёгкая online-оплата</p>
            </div>
          </div>
          <div className="how_to_learn_part blur flex flex_align_center">
            <img src={require('../assets/img/login.png')} className="how_to_learn_icon" />
            <div className="learn_description">
              <h6>Доступ к личному кабинету на платформе обучения</h6>
              <p>Ваш личный кабинет с доступом к урокам и домашним заданиям</p>
            </div>
          </div>
          <div className="how_to_learn_part blur flex flex_align_center">
            <img src={require('../assets/img/education.png')} className="how_to_learn_icon" />
            <div className="learn_description">              
              <h6>Обучение</h6>
              <p>В online-формате каждый день с автором курса и сокурсниками</p>
            </div>
          </div>
          <div className="how_to_learn_part blur flex flex_align_center">
            <img src={require('../assets/img/user.png')} className="how_to_learn_icon" />
            <div className="learn_description">              
              <h6>Прямые эфиры от Автора курса</h6>
              <p>Много полезной информации из личного опыта</p>
            </div>
          </div>
          <div className="how_to_learn_part blur flex flex_align_center">
            <img src={require('../assets/img/gift.png')} className="how_to_learn_icon" />
            <div className="learn_description">                
              <h6>Приз от Автора курса!</h6>
              <p>Вы получаете не только новый опыт, знания и профессию, но и ПРИЗ за самую лучшую маску!</p>
            </div>
          </div>
        </div>
      </div>
      <img src={require('../assets/img/cloud.png')} className="cloud_ill" />
    </section>
}

export default Learn