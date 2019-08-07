import React from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const imageChangeOnScroll = () => {
  return (
    <div>
      {[235, 239, 242, 243, 244, 247].map(picture => {
        return (
          <div>
            <ImageToggleOnScroll
              primaryImg={`https://picsum.photos/id/${picture}/200/300`}
              secondaryImg={`https://picsum.photos/id/${picture}/200/300?grayscale`}
              alt="random unsplash.it picture" />
          </div>
        )
      })}
    </div>
  )
}

export default imageChangeOnScroll;