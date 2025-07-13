export function getImageUrl(imageKey: string) {
  return `${import.meta.env.VITE_API_URL}/uploads/${imageKey}`;
}
