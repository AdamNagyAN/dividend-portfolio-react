import * as React from 'react';

interface IImageWithSkeleton {
  className?: string;
  src: string;
  alt: string;
}

const ImageWithSkeleton: React.FC<IImageWithSkeleton> = ({
  className,
  src,
  alt,
}) => {
  const [isLoading, setIsLoading] = React.useState(true);

  function handleImageLoad() {
    setIsLoading(false);
  }

  return (
    <div className={className}>
      {isLoading && <div className='skeleton' />}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </div>
  );
};

export default ImageWithSkeleton;
