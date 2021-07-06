import dayjs from 'dayjs';

export const formatDate = (
  isoString: string,
  dateFormat = 'MMMM D, YYYY',
): string => {
  return dayjs(isoString).format(dateFormat);
};

export const dateIsBefore = (dateA: string, dateB = new Date()): boolean => {
  return dayjs(dateA).isBefore(dayjs(dateB));
};

export const convertToSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

export const convertToSentenceCase = (text: string): string => {
  return (
    text.charAt(0).toUpperCase() +
    text.substr(1).toLowerCase().replace(/-/g, ' ')
  );
};
