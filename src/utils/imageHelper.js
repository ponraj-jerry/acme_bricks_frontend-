export const getImageUrl = (img) => {
  if (!img) return '/images/fly_ash_brick.png';
  
  // If it's already a full HTTP/HTTPS URL (e.g. Unsplash), return as-is
  if (img.startsWith('http://') || img.startsWith('https://')) {
    return img;
  }
  
  const baseUrl = import.meta.env.VITE_API_URL || '';
  
  // If it starts with /images/, append the backend base URL
  if (img.startsWith('/images/')) {
    return `${baseUrl}${img}`;
  }
  
  // If it's just a filename (e.g. "clay_brick.png"), prepend /images/ and base URL
  if (img.startsWith('/')) {
    return `${baseUrl}/images${img}`;
  }
  return `${baseUrl}/images/${img}`;
};
