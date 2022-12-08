// Write a program that takes as input an array of numbers of length N and 
// a number p (positions - p is greater than 0 and less than N) and 
// number d (direction - either 0 for left or 1 for right). 
// The objective is to return the array shifted by p positions in d direction.
//   Example: For an input array [1, 3, 2, 7, 4, 6] with p=3 and d=0
//   the expected result would be [7, 4, 6, 1, 3, 2] with the array shifted left by 3 positions.


// function shifted(arr,p,d){


//     if(d===0){
//         let a=arr.slice(0,p)
//         let b=arr.slice(p)
//         console.log(b.concat(a))
//     }
//     else if(d===1){
//         let a=arr.slice(0,arr.length-p)
//         let b=arr.slice(arr.length-p)
//         console.log(b.concat(a))
//     }

// }


// shifted( [1, 3, 2, 7, 4, 6] ,3,0)




// Question 2:
// Please implement an alarm clock using Object Oriented Programming. If you are not familiar or comfortable with
// object-oriented programming, we suggest you give this article a quick read to ensure you understand it before you
// attempt it.
// The alarm clock should have the following features:
// • It displays the current time
// • A user can create any number of alarms by specifying the alarm time and day of the week and time when the
// alarm should alert
// • A user can snooze an alarm maximum of 3 times at an interval of 5 minutes each.
// • A user can delete an alarm


var sound = new Audio("https://www.pagalvvorld.com/wp-content/uploads/2022/02/Doraemon-Title-Song.mp3");
sound.loop = true;


let hours = document.querySelector(".hours");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let meridiem = document.querySelector(".meridiem");
let date = document.querySelector(".date");

let alarmHr = document.querySelector(".alarmHr");
let alarmMin = document.querySelector(".alarmMin");
let alarmSec = document.querySelector(".alarmSec");
let alarmAmPm = document.querySelector(".alarmAmPm");
let alarmDay = document.querySelector(".alarmDay");

var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];


function time() {

    let d = new Date();
    date.innerText = d.toDateString()

    let h = d.getHours();

    if (h === 0) {
        h = 12;
    } if (h > 12) {
        h = h - 12;
    }

    hours.innerText = h

    let m = d.getMinutes();
    min.innerText = m;

    let s = d.getSeconds();
    sec.innerText = s;

    let amPm = (d.getHours() >= 12) ? " PM " : " AM ";
    meridiem.innerText = amPm;

}

setInterval(time, 1000)

for (let i=1;i<=12;i++){
    option=document.createElement('option');
    option.value=i;
    option.innerText=i;

    alarmHr.append(option)
}

for (let i=0;i<=59;i++){
    option=document.createElement('option');
    option.value=i;
    option.innerText=i;

    alarmMin.append(option)
}

for (let i=0;i<=59;i++){
    option=document.createElement('option');
    option.value=i;
    option.innerText=i;

    alarmSec.append(option)
}




function setAlarm() {
    alarmTime = alarmHr.value + ":" + alarmMin.value + ":" + alarmSec.value + ":" + alarmAmPm.value + ":" + alarmDay.value;
    alarmHr.disabled = true;
    alarmMin.disabled = true;
    alarmSec.disabled = true;
    alarmAmPm.disabled = true;
    alarmDay.disabled = true;
    console.log(alarmTime)

    setInterval(function () {

        let d = new Date();

        let h = d.getHours();
        if (h === 0) {
            h = 12;
        } if (h > 12) {
            h = h - 12;
        }

        let m = d.getMinutes();
        let s = d.getSeconds();
        let amPm = (d.getHours() >= 12) ? "Pm" : "Am";
        let day = daylist[d.getDay()];
        currentTime = h + ":" + m + ":" + s + ":" + amPm + ":" + day;

        if (alarmTime == currentTime) {
            sound.play();
        }

    }, 1000)

}

function clearAlarm() {

    alarmHr.disabled = false;
    alarmMin.disabled = false;
    alarmSec.disabled = false;
    alarmAmPm.disabled = false;
    alarmDay.disabled = false;
    sound.pause();

}


let praSelect=document.querySelector('#praSelect')

