//1.
// function largest (a, b, c) {
//     let largest;
//     if (a >= b && a >= c) {
//         largest = a;
//     } else if (b >= a && b >= c) {
//         largest = b;
//     } else {
//         largest = c;
//     }
//     console.log(`The largest number is ${largest}.`)
// }

//2.
// function largest (a, b, c) {
//     console.log(`The largest number is ${Math.max(a, b, c)}.`)
// }

// largest(5, -3, 16)
// largest(-3, -5, -22.5 )

// 3.
(...p) => `The largest number is ${Math.max(...p)}.`
