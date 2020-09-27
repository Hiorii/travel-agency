export const formatTime = (parameter) => {
  if (parameter === undefined) {
    return null;
  }
  else if (isNaN(parameter)) {
    return null;
  }
  else if (parameter < 0 ) {
    return null;
  }
  else {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    seconds = (seconds + Math.floor(parameter % 60) + '').padStart(2,'0');
    minutes = ((minutes + Math.floor(parameter / 60) % 60) + '').padStart(2,'0');
    hours =  (hours + Math.floor(parameter / 3600) + '').padStart(2,'0');

    return hours + ':' + minutes + ':' + seconds;
  }
};
