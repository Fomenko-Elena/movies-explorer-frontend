export function getAbsoluteImageUrl(relativeUrl) {
  return `https://api.nomoreparties.co/${relativeUrl}`;
}

export function getDuration(duration) {
  const hours = Math.floor(duration / 60);
  const mins = duration % 60;
  return `${hours > 0 ? hours + 'ч' : ''}${mins > 0 ? mins + 'м' : ''}`;
}