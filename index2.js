let str1 = prompt("Enter the string of words separated by spaces to sort");
//str="World Hello "
let a = str1.split(" ");
let n = a.length;
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (a[j] > a[j + 1]) {
            let temp = a[j];
            a[j] = a[j + 1];
            a[j + 1] = temp;
        }
    }
}
let sa = a.join(" ");
console.log(sa+"\n");
