
const fondos = [
'Asuka/Asuka2.mp4',
'Asuka/Asuka3.mp4',
'Asuka/Asuka5.mp4',
'Asuka/AsukaRei.mp4',
];
const getRandomVideo = () =>{
return fondos[Math.floor(Math.random() * fondos.length)];
}
console.log(getRandomVideo());

const container = document.querySelector('.backgroundcss')
container.innerHTML = `<video src="${getRandomVideo()}" autoplay muted loop id="backgroundcss" type="text/mp4">
</video>`;