// Check if an Array is Sorted (Ascending)
function isSorted(arr){
    let isSort = true
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]>arr[i+1]){
            isSort = false
            console.log("Not Sorted")
            return
        }
    }
    console.log("Sorted")
    return;
}
// isSorted([1, 2, 3, 6, 5])

// Remove All Duplicates From an Array (Use filter method)

function removeDuplicate(arr){
    
    for (let i = 0; i < arr.length; i++) {

    }
    console.log("Sorted")
    return;
}