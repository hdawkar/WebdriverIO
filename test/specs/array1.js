const accountName = "Rahul";
const people = [
    [21, "Ben", "USA"],
    ["India", "Raj", 26],
    ["Miyamoto", 41, "Japan"],
    [30, "India", "Rahul"],
];
// function getName() {
//     return accountName;
// }
function checkName() {
    for (const s of people) {
       if (s.includes(accountName)) {
        return true;
       }
    }
    
}
console.log(checkName());