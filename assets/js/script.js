let date = document.getElementById('dateDiv');

let currentDate = dayjs().format('MMM D, YYYY h:mm:ss a');
date.textContent = currentDate;