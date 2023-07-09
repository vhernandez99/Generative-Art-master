const max= 10000;
const min = 9000;
var results = [];

generateRandomNumbers()
function generateRandomNumbers() {
    for (var i = 0; i < 10; i++) {
        const a = Math.floor(Math.random() * (max - min + 1)) + min;
        results.push(a);
    }
    console.log(results.toString())
}