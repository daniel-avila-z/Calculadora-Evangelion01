
  const fondos = [
    'Evangelion/Anime.mp4',
    'Evangelion/Eva01.mp4',
    'Evangelion/Eva012.mp4',
    'Evangelion/teoe.mp4',
    'Evangelion/The End of Evangelion.mp4',
  ];
  const getRandomVideo = () =>{
    return fondos[Math.floor(Math.random() * fondos.length)];
  }
  console.log(getRandomVideo());

  const container = document.querySelector('.backgroundcss')
  container.innerHTML = `<video src="${getRandomVideo()}" autoplay muted loop id="backgroundcss" type="text/mp4">
    </video>`;