function validMountainArray(arr: number[]): boolean {

    if(arr.length < 3 || arr[0] > arr[1] || arr[arr.length - 1] > arr[arr.length - 2]) return false
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i + 1]) return false
        // if(i > 0 && arr[i] < arr[i - 1] && arr[i] > arr[i + 1] && arr[i + 1] < arr[i + 2]) return false
        if(i > 0 && arr[i - 1] > arr[i] && arr[i] < arr[i + 1]) return false
    }

    return true
};

console.log(validMountainArray([3,6,5,6,7,6,5,3,0]))