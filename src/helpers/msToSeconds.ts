export const msToSeconds = (milliseconds: number):string => {
    let minutes:number = Math.floor(milliseconds / 60000);
    let seconds:number | string = Math.floor((milliseconds % 60000) / 1000);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    return minutes + ":" + seconds;
  };