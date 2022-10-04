let summing = (...rest : number[]) : number=>{
    return rest.reduce((a, b)=> a + b, 0);
}

console.log(summing(1, 2));
console.log(summing(1, 2, 3, 4, 5));