const getSmallSizeUrl = gif => {
  const {images} = gif;

  if (images.hasOwnProperty('fixed_height_small')) {
    return images.fixed_height_small.url;
  } else {
    return images.original.url;
  }
};

export default gif => {
  return {
    id: gif.id,
    smallSizeUrl: getSmallSizeUrl(gif),
    originalUrl: gif.images.original.url,
  };
};
