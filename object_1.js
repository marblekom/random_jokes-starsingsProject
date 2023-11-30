const arraystars={Aries:1,Taurus:"wefw",Gemini:"wuef"};

console.log(arraystars.Aries);

for (key in Object.keys.arraystars){
    if (key === "Aries"){
        console.log(arraystars.key)
    }
}

const numebin = [];
const months = {0:31, 1:28, 2:31, 3:30, 4:31, 5:30, 6:31, 7:31, 8:30, 9:31, 10:30, 11:31};
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let i=0;
for (let y=0;y<12; y++){
    i+= months[y]
    numebin.push(i);
}

console.log(numebin);