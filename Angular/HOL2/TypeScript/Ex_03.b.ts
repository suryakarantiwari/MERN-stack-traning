let range = (start : number, stop: number, step:number = 1) : Array<number> =>{

    // returns Array
    let numbers : Array<number> = [];
    for(let i = start ; i<=stop; i +=step){
        numbers.push(i);
    }
    return numbers;
}

// getting an array from range
let arr : Array<number> = range(1, 5);
arr.forEach((i)=>{
    console.log(i);
})
// console.log(range(1, 5, 1))