
export const formatDate = (fechaIso8601:string):string => {
  const date = new Date(fechaIso8601);

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();

  return (`${day} ${month} ${year}`)
}
