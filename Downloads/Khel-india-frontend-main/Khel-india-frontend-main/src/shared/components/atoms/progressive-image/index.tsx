import React, { useState, useEffect, memo, ImgHTMLAttributes } from 'react';

interface Props {
  readonly placeholderSrc?: string;
  readonly imgProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>;
  readonly src: string;
}

const ProgressiveImage = memo(
  React.forwardRef(
    (
      { placeholderSrc, src, imgProps = {} }: Props,
      ref: React.ForwardedRef<HTMLImageElement>
    ) => {
      const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

      useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImgSrc(src);
        };
      }, [src]);

      return imgSrc ? (
        <img alt="" ref={ref} {...(imgProps || {})} src={imgSrc} />
      ) : null;
    }
  ),
  (prevProps: Props, nextProps: Props) => {
    return (
      prevProps.src === nextProps.src &&
      prevProps.placeholderSrc === nextProps.placeholderSrc &&
      Object.keys(prevProps.imgProps?.style ?? {}) ===
        Object.keys(nextProps.imgProps?.style ?? {})
    );
  }
);

export default ProgressiveImage;
