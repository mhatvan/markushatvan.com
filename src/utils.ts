import { format, isBefore, parseISO } from 'date-fns';

export const formatDate = (isoString: string, dateFormat = 'MMMM do, yyyy'): string => {
  return format(parseISO(isoString), dateFormat);
};

export const dateIsBefore = (dateA: string, dateB = new Date()): boolean => {
  return isBefore(new Date(dateA), dateB);
};

export const convertToSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

export const convertToSentenceCase = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase().replace(/-/g, ' ');
};
