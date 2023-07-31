export const formatTimeForTurf = (startTime: string, endTime: string) => {
  if (!startTime || !endTime) {
    return '';
  }

  const start = startTime.replace(/:\d\d\s/, ' ');
  const end = endTime.replace(/:\d\d\s/, ' ');
  return `${start} to ${end}`;
};
