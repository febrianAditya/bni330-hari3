const numbers = [1,2,3,4,5,6, 9]
console.log(numbers[numbers.length-1]);



let students = ["bostang", "fawwaz", "aan", "fajra", "tito"]
students.splice(1, 0, "fathya")
console.log(students, "==> BEFORE METHOD");

students.push("arya")
console.log(students, "==> AFTER PUSH");

students.unshift("hendra", "andrew")
console.log(students, "==> AFTER UNSHIFT");

console.log(students[students.length-1], "==> Hendra");

students[3] = "chris"
// console.log(students);

students.pop()
// console.log(students);

students.shift()
console.log(students, "=> FINAL");


function forEachModify(cb) {
    for (let index = 0; index < students.length; index++) {
        cb(students[index])
    }
}

forEachModify((el) => {
    console.log(el, "==> INI CUSTOM");
})


// students.forEach((el) => {
//     console.log(el, "=>>  INI VALUENYA");
// })


let cekceki =  students.map(el => {
    return el.toUpperCase()
})
console.log(cekceki);


let inputUser = "bni odp"
let changeArray = inputUser.split("").reverse().join("")
console.log(changeArray);
let reversedString = changeArray.reverse()
let changeString = reversedString.join("")
console.log(changeString);






// Object
let civic = {
    color : "putih",
    cc : "1800",
    merk : "Honda",
    "kapasitas penumpang" : 5,
    type : ["type r", "e", "g"]
}

console.log(civic.hasOwnProperty("haha"));
console.log(Object.entries(civic));
console.log(civic, "==> INI APA");
let colorCivic = civic.color
let merkCivic = civic["merk"]
let capacity = civic["kapasitas penumpang"]
let civictypeR = civic.type[0]
console.log(civictypeR);
