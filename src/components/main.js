import React from "react"

import Example from "../components/example"

import Button from "../common/button"

const Main = () => {
    <section id="main" className="bg_gradient_primary">
      <div className="main_content">
        <img src={require('../assets/img/head_tears.png')} className="main_head_tears" />
        <div className="blur main_content_wrapper">
          <div className="main_content__description">
            <h3>
              Пройди курс и <br /> стань AR-разработчиком масок для Инстаграм
            </h3>
            <p>
              Комплексный курс включает в себя несколько небольших курсов и 
              позволяет полностью освоить новую для себя профессию
            </p>
            <Button link="/" linkText="КУПИТЬ КУРС" classes="button primary_button"/>
          </div>
        </div>
        <Example />
      </div>
      <img className="cloud" src={require('../assets/img/cloud.png')} />
    </section>
}

export default Main