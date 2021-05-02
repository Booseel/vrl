import React from 'react';
import Link from 'next/link'

import Example from "../components/example"

const Author = () => {
    return (
        <section id="author">
            <h4 className="section_header">Об авторе курса</h4>
            <div className="author">
                <Example 
                    wrapperClass="exampleAuthor" 
                    seWrapperClass="seAuthor" 
                    twelveWrapperClass="twelveAuthor" 
                    contentSE='/main_statistics.jpg' 
                    contentX='/hair_color.jpg' 
                    examplePhone="examplePhone"
                />
                <div className="blur aurhor_content">
                    <img src='/author.jpg 'alt="author" className="author_image" />
                    <h3>
                        <span className="author_numbers">Привет!</span> Меня зовут 
                        <span className="author_numbers"> Veca Rony</span>, 
                        и я профессиональный разработчик масок в инстаграм.
                    </h3>
                    <p>
                        Мои эффекты набрали больше <span className="author_numbers">2-х млн показов</span>, а самый популярный из них - более <span className="author_numbers">600к</span>.
                        Уже год я разрабатываю маски на заказ с минимальной стоимостью <span className="author_numbers">1500р/час</span>.
                    </p>
                    <p>
                        Самая дорогая маска моего исполнения стоила <span className="author_numbers">25 000 рублей!</span>
                    </p>
                    <p>
                        Я обучила уже <span className="author_numbers">целый поток</span> курса "Маски для себя". С успехами учеников и отзывами вы можете ознакомиться 
                        <Link href="https://www.instagram.com/stories/highlights/18109290601115879/">
                            <a target="_blank" className="author_link"> здесь</a>
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Author