const getMessageDate = (value) => {
  let date = new Date(value);

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

  const arr = ['Januari', 'Februari', 'Maret', 'April',
    'Mei', 'Juni', 'Juli', 'Agustus', 'September',
    'Oktober', 'November', 'Desember'];

  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();

  return hour + ' : ' + minutes + ', ' + day + ' ' + arr[month] + ' ' + year;
};

export default getMessageDate;