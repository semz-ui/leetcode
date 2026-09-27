function calPoints(operations: string[]): number {
    let sum: number = 0
    let operations_cal: number[] = []

    for(let i = 0; i < operations.length; i++){
        console.log(operations[i])
        if(operations[i] === "C"){
            operations_cal.pop()
        } else if (operations[i] === "D"){
            const d_value = Number(operations_cal[operations_cal.length - 1] ) * 2
            operations_cal.push(d_value)
            console.log(operations_cal, "end")
        } else if (operations[i] === "+"){
            const plus_value = Number(operations_cal[operations_cal.length - 1]) + Number(operations_cal[operations_cal.length - 2])
            operations_cal.push(plus_value)
        } else {
            operations_cal.push(Number(operations[i]))
        }
    }

    sum = operations_cal.reduce((a,b) => a += b)

    return sum
};


console.log(calPoints(["5","-2","4","C","D","9","+","+"]))