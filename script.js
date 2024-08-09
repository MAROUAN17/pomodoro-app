var pomodors = 4;
var minutes = 25;
var fseconds = 0;
var lseconds = 0;
const nbrPomHt = document.getElementById("nbr-pomodors");
const timeSet = document.getElementById("time-set");
const startBtn = document.getElementById("start-btn");
timeSet.textContent = `${minutes}:${fseconds}${lseconds}`;
nbrPomHt.textContent = `${pomodors} remaining`
startBtn.addEventListener("click", () => {
    const intervalId = setInterval(() => {
        if (fseconds === 0 && lseconds === 0)
        {  
            fseconds = 5;
            lseconds = 10;
            minutes--;
        }
        if (lseconds === 0){   
            fseconds--;
            lseconds = 10;
        }
        lseconds--;
        if (minutes === 0 && fseconds === 0
            && lseconds === 0)
        {    
            clearInterval(intervalId);
            pomodoros--;
            nbrPomHt.textContent = `${pomodors} remaining`
            alert("here")
        }
        timeSet.textContent = `${minutes}:${fseconds}${lseconds}`
    }, 1000);
});