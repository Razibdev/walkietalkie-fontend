import React from 'react'

export default function ImageFile({src, alt, className=''}) {
    const srcUrl = process.env.NEXT_PUBLIC_ASSET_PREFIX+'/'+src;
  return <img src={srcUrl} alt={alt}  className={className} />;
}
