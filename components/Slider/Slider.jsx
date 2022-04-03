
import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const Slider = ({imgs}) => {

    return (
        <>
            <SimpleImageSlider
                width={'90%'}
                height={400}
                images={imgs}
                showNavs={true}
                showBullets={true}
            />
        </>
    )
}

export default Slider;