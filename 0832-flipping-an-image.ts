function flipAndInvertImage(image: number[][]): number[][] {
    const result :number[][] = []

    for(let i = 0; i < image.length; i ++){
        let reversed: number[] = image[i].reverse()
        // console.log(reversed, "start")
        for (let j = 0; j < reversed.length;j++){
            if(reversed[j] === 1){
                reversed[j] = 0
            } else {
                reversed[j] = 1
            }
        }
        result.push(reversed)
        // console.log(reversed, "end")
    }

    return result
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))