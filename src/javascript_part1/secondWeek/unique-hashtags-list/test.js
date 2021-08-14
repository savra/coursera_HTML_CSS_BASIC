let sourceArray = ['a', 'B', 'b', 'b', 'B', 'B', 'B', "B", "B", "B", "B"];
let sourceArray3 = ["kkk", "kKk"];
let sourceArray4 = [];

if (sourceArray.length === 0) {
    console.log("");
} else {
    for (let i = 0; i < sourceArray.length - 1; i++) {
        sourceArray[i] = sourceArray[i].toLowerCase();
        for (let j = i + 1; j < sourceArray.length; j++) {
            console.log("i = " + i);
            console.log("j = " + j);
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