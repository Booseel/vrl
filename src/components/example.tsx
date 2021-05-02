import React from "react"

interface Props {
    contentSE: string;
    contentX: string;
    wrapperClass?: string;
    seWrapperClass: string;
    twelveWrapperClass: string;
    examplePhone?: string;
}

const Example: React.FC<Props> = ({ contentSE, contentX, wrapperClass, seWrapperClass, twelveWrapperClass, examplePhone }) => (
    <div className={"flex " + wrapperClass}>
        <div className={"example " + seWrapperClass}>
            <img className={"example mockupSe " + examplePhone} src='/iphonese.png' alt="example" />
            <img className={"example storiesSe " + examplePhone} src={contentSE} alt="example" />
        </div>
        <div className={"example " + twelveWrapperClass}>
            <img className={"example mockupTwelve " + examplePhone} src='/iphone12.png' alt="example" />
            <img className={"example storiesTwelve " + examplePhone} src={contentX} alt="example" />
        </div>
    </div>
)

export default Example