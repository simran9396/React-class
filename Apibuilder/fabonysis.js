function fib (n){
    const number=[0,1]
    for (let i=2;i<n;i++){
       
        number.push(number[i-2]+number[i-1])

    }
    return number
}
console.log(fib(8))