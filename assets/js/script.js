let date = document.getElementById('date');
let currentDate;

//jQuery - loads function once DOM is loaded
// $(document).ready(function dateTime() {
//     setInterval(function () {
//         currentDate = dayjs().format('MMM D, YYYY h:mm:ss a');
//         date.textContent = currentDate;
//     }, 1000);
// });

// Date/Time function that is called first thing on the page
function dateTime() {
    setInterval(function () {
        currentDate = dayjs().format('MMM D, YYYY h:mm:ss a');
        date.textContent = currentDate;
    }, 1000);
}

dateTime();