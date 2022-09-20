import React from "react";

const MinutesToRead = ({minutes}) => {
    if (minutes < 30) {
        let indicator;
        switch (true) {
            case (minutes <= 5):
                indicator = `☕️ ${minutes} min read`;
                break;
            case (minutes <= 10):
                indicator = `☕️☕️ ${minutes} min read`;
                break;
            case (minutes <= 15):
                indicator = `☕️☕️☕️ ${minutes} min read`;
                break;
            case (minutes <= 20):
                indicator = `☕️☕️☕️☕️ ${minutes} min read`;
                break;
            case (minutes <= 25):
                indicator = `☕️☕️☕️☕️☕️ ${minutes} min read`;
                break;
            case (minutes < 30):
                indicator = `☕️☕️☕️☕️☕️☕️ ${minutes} min read`;
                break;
            default:
                indicator = "You'll finish reading soon!"
                break;
        }
        return <>
          <small>•{indicator}</small>
        </>
    } else {
        const emoji = '🍱'
        let indicator;
        const timeFactor = Math.ceil((minutes / 10));
        indicator = `${emoji.repeat(timeFactor)} ${minutes} min read`
        return <>
          <small>•{indicator}</small>
        </>
    }
};

export default MinutesToRead;