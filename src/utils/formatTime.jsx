import { format, formatDistanceToNow } from 'date-fns'

/** Trying to simplify the way to format time/date faster*/
// ----------------------------------------------------------------------

export function formatDate (date) {
  return format(date.toDate(), 'dd MMMM yyyy')
  //   return format(new Date(date), 'dd MMMM yyyy')
}

export function formatDateTime (date) {
  //   return format(new Date(date), 'dd MMM yyyy HH:mm')
  return format(date.toDate(), 'dd MMM yyyy HH:mm')
}

export function formatDateTimeSuffix (date) {
  return format(date.toDate(), 'dd/MM/yyyy hh:mm p')
  //   return format(new Date(date), 'dd/MM/yyyy hh:mm p')
}

export function formatToNow (date) {
  return formatDistanceToNow(date.toDate(), {
    addSuffix: true
  })
  //   return formatDistanceToNow(new Date(date), {
  //     addSuffix: true
  //   })
}
