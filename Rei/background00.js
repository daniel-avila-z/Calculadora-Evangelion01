const fondos = [
    'Rei/Rei.mp4',
    'Rei/Rei2.mp4',
    'Rei/Rei3.mp4',
    'Rei/Rei4.mp4',
    'Rei/AsukaRei.mp4',
];
const getRandomVideo = () =>{
return fondos[Math.floor(Math.random() * fondos.length)];
}
console.log(getRandomVideo());

const container = document.querySelector('.backgroundcss')
container.innerHTML = `<video src="${getRandomVideo()}" autoplay muted loop id="backgroundcss" type="text/mp4">
</video>`;