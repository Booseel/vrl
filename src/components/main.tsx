import React from "react"

import { Parallax } from 'react-scroll-parallax';

import Example from "../components/example"

import Button from '../common/button'

export const Main = () => (
    <section id="main" className="bg_gradient_primary">
      <div className="main_content">
        <div className="main_head_tears">
          <img className="animation_head_tears" src='/head_tears.png' alt="head tears" />
        </div>
        <div className="blur main_content_wrapper">
          <div className="main_content__description">
            <h3>
              Пройди курс и <br /> стань AR-разработчиком масок для Инстаграм
            </h3>
            <p>
              Комплексный курс включает в себя несколько небольших курсов и 
              позволяет полностью освоить новую для себя профессию
            </p>
            <Button link="/#price" linkText="КУПИТЬ КУРС" classes="button primary_button"/>
          </div>
        </div>
        <Example wrapperClass="exampleMain" seWrapperClass="seMain" twelveWrapperClass="twelveMain" contentSE='/evil.gif' contentX='/valkiria.gif' />
      </div>
      <div className="cloud">
        <Parallax y={[-40, 30]}>
          <img src='/cloud.png' alt="cloud" />
        </Parallax>
      </div>
    </section>
)