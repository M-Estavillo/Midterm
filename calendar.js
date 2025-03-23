function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}

const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const weekDay = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
const monthName = ["JAN","FEB","MAR","APR","MAY","JUN",
                    "JUL","AUG","SEP","OCT","NOV","DEC"];
                              
const today = new Date();

date.innerHTML = today.getDate();
day.innerHTML = weekDay[today.getDay()];
month.innerHTML = monthName[today.getMonth()];
year.innerHTML = today.getFullYear();
