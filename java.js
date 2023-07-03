// 0-4 free; 
// 5-10 child - $10;
// 11-18 teen - $15
// 19-65 adult - $20
// 65+ senior - $10


const age = prompt("How old are you?")

if (age > 0 && age < 5 || age >= 65 && age <= 100) {
    alert("Tickets are free.")
} else if (age >= 5 && age <= 10) {
    alert("Kid should be 10$.")
} else if (age > 10 && age < 18) {
    alert("Pay up $15, teen.")
} else if (age > 18 && age <= 65) {
    alert("$20 for adults.")
} else if (age < 1 || age > 100) {
    alert("Age is invalid.")
}
