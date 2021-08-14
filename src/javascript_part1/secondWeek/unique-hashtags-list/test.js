let sourceArray = ['1', '2', '3', '2', '1', '1', '2', "3", "3"];

if (sourceArray.length === 0) {
    console.log("");
} else {
    for (let i = 0; i < sourceArray.length - 1; i++) {
        sourceArray[i] = sourceArray[i].toLowerCase();
        for (let j = i + 1; j < sourceArray.length; j++) {
            if (sourceArray[i].toLowerCase() === sourceArray[j].toLowerCase()) {
                console.log("before delete" + " " +  sourceArray);
                sourceArray.splice(j, 1);
                j--;
                console.log("after delete" + " " +  sourceArray);
            }
        }
    }
}

console.log(sourceArray.join(", "));

//1 2 3 4 5
//1 2 3 4 5
//0 1 2 3 4