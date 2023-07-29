import { format } from 'date-fns';

export function formateDate(date) {
  return format(new Date(date), 'Pp', {
    addSuffix: true,
  });
}
