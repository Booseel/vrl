import React from "react"

const Example = ({ mockup, gif }) => (
    <div className="flex exampleWapper">
        <div className="example se">
            <img className="example mockupSe" src={require('../assets/img/iphonese.png')} />
            <img className="example storiesSe" src={require('../assets/video/evil.gif')} />
        </div>
        <div className="example twelve">
            <img className="example mockupTwelve" src={require('../assets/img/iphone12.png')} />
            <img className="example storiesTwelve" src={require('../assets/video/valkiria.gif')} />
        </div>
    </div>
)

export default Example