"use client"; // Add this directive if using React hooks

import React from 'react';

interface ImageInRectangleProps {
  imageUrl: string;  // image URL passed to the component
}

const ImageInRectangle: React.FC<ImageInRectangleProps> = ({ imageUrl }) => {
  return (
    <div className="rectangle">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Uploaded"
          className="image"
          loading="lazy"
          style={{
            width: '100%',  
            height: '100%',  
            objectFit: 'contain',  //ensures the image maintains its aspect ratio
            objectPosition: 'center', //centers the image inside the container
          }}
        />
      ) : (
        <div>No image available</div>
      )}
    </div>
  );
};

export default ImageInRectangle;
