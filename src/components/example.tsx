import React from "react"

interface Props {
    contentSE: string;
    contentX: string;
    wrapperClass?: string;
    seWrapperClass: string;
    twelveWrapperClass: string;
}

const Example: React.FC<Props> = ({ contentSE, contentX, wrapperClass, seWrapperClass, twelveWrapperClass }) => (
    <div className={"flex " + wrapperClass}>
        <div className={"example " + seWrapperClass}>
            <img className="example mockupSe" src='/iphonese.png' alt="example" />
            <img className="example storiesSe" src={contentSE} alt="example" />
        </div>
        <div className={"example " + twelveWrapperClass}>
            <img className="example mockupTwelve" src='/iphone12.png' alt="example" />
            <img className="example storiesTwelve" src={contentX} alt="example" />
        </div>
    </div>
)

export default Example