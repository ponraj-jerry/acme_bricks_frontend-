export const getImageUrl = (img) => {
  if (!img) return '/images/fly_ash_brick.png';
  
  // If it's already a full HTTP/HTTPS URL (e.g. Unsplash), return as-is
  if (img.startsWith('http://') || img.startsWith('https://')) {
    return img;
  }
  
  // If it starts with /images/, return as-is
  if (img.startsWith('/images/')) {
    return img;
  }
  
  // If it's just a filename (e.g. "clay_brick.png"), prepend /images/
  if (img.startsWith('/')) {
    return `/images${img}`;
  }
  return `/images/${img}`;
};
