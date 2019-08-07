import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver 
                primaryImg="https://picsum.photos/id/235/400/600"
                secondaryImg="https://picsum.photos/id/235/400/600?grayscale"
                alt="mountains by the water" />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver 
                primaryImg="https://picsum.photos/id/239/400/600" 
                secondaryImg="https://picsum.photos/id/239/400/600?grayscale"
                alt="dandelion seeds" />
        </div>
    )
}

export default ImageChangeOnMouseOver;