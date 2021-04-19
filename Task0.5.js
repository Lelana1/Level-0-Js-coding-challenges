
function Triangle() {
for(let i = 1; i <= n; i ++) {

    let string = ''.repeat(n-i);
    let string1 = '#'.repeat(i*2 -1)

    console.log(string + string1 + string);
    }


}
Triangle(5);