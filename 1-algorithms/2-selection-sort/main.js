let arr = [171, 126, 162, 981, 612, 714, 194, 136, 701, 221]
let arrayLength = arr.length
let indexSmallest = 0

function findSmallest(arr) {
    let smallest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (smallest > arr[i]) {
            smallest = arr[i]
            indexSmallest = i
        }
    }
    return indexSmallest
}

let newArr = []

function selectionSort(arr) {
    for (let i = 0; i < arrayLength; i++) {
        newArr.push(arr[findSmallest(arr)])
        arr.splice(indexSmallest, 1)
        indexSmallest = 0
    }
    return newArr
}

console.log(arr)
document.querySelector('.originalArray').innerText = arr
console.log(selectionSort(arr))
document.querySelector('.sortedArray').innerText = (newArr)