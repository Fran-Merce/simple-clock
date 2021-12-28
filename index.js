const deg = 6
const hr = document.querySelector('#hr');
const min = document.querySelector('#mn');
const sec = document.querySelector('#sc');



const getTime = () => {
    let day = new Date()

    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
    // console.log(hh);
    date()
    time()
}
setInterval(getTime, 1000)

const digitalTime = document.querySelector('#digitalTime')
const digitalDate = document.querySelector('#date')

function time() {
    let day = new Date()
    digitalTime.textContent = day.toLocaleTimeString()

    
    
}

function date() {
    let day = new Date()
    const options ={
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    digitalDate.textContent = day.toLocaleDateString('es-ES',options)
    
}