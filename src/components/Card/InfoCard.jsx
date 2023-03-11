import React from "react";

import Progress from "react-bootstrap/ProgressBar";

const InfoCard = (props) => {
    return (
        <div className="d-flex flex-column p-3" style={{backgroundColor: props.bg}}>
            <div className="d-flex justify-content-end align-items-end">
                {props.icon}
            </div>
            <div className="h3 text-white">
                {props.title}
            </div>
            <div style={{color: "rgba(255, 255, 255, 0.6)"}}>
                {props.description}
            </div>
            <div className="mt-3">
                <Progress now={props.value} />
            </div>
        </div>
    );
};

export default InfoCard;