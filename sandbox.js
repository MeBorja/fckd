let num = 1;
const elem = document.querySelector('.fckd1')


const aids = document.querySelector('.fckd')
function aidss (p) {
    if (p === 1) {
        aids.style.backgroundColor="white";
        aids.style.color="red";
        num--
    }else {
        aids.style.backgroundColor="red";
        aids.style.color="white";
        num++
    }
}

setInterval(()=>{
    aidss(num)
    console.log("gaiming")
},50)