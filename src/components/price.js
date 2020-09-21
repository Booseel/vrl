import React from 'react'
import Button from "../common/button"
import Card from "../common/card"

const Price = (props) => (
    <section id={props.sectionId}>
        <h3 className="price_header">{props.priceHeader}</h3>
        <div className="price_whatIn">
            <div className="price_included">
                <h5>{props.price_icluded__header1}</h5>
                <p>{props.price_icluded__pararaph1}</p>
            </div>
            <div className="price_included">
                <h5>{props.price_icluded__header2}</h5>
                <p>{props.price_icluded__pararaph2}</p>
            </div>
            <div className="price_included">
                <h5>{props.price_icluded__header3}</h5>
                <p>{props.price_icluded__pararaph3}</p>
            </div>
            <div className="price_included">
                <h5>{props.price_icluded__header4}</h5>
                <p>{props.price_icluded__pararaph4}</p>
            </div>
        </div>
        <div className="rates">
            <div className="tariff">
                <p className="nameOfTariff">{props.nameOfTariff1}</p>
                <h4 className="priceOfTariff">{props.priceOfTariff1}</h4>
                <p className="dopInfo">{props.dopInfo1}</p>
                <ul className="checkList">{props.checkList1}</ul>
                <Button link="/" classes="button" linkText="В корзину" />
            </div>
            <div className="tariff">
                <p className="nameOfTariff">{props.nameOfTariff2}</p>
                <h4 className="priceOfTariff">{props.priceOfTariff2}</h4>
                <p className="dopInfo">{props.dopInfo2}</p>
                <ul className="checkList">{props.checkList2}</ul>
                <Button link="/" classes="button" linkText="В корзину" />
            </div>
            <Card variant="basic" cardName="card1" title="3000" buttonVariant="one">
                тут писать?
            </Card>
        </div>
    </section>
)

export default Price