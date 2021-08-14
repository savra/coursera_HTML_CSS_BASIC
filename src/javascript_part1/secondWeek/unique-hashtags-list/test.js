let sourceArray = [1, 'B', 'b', 1, ".", 'a', 'a b', 'с', "B", "с", "B", "с", "a", "a", "a", "a b", "a b", "jkhkhk", "lklk n", "k"];
let sourceArray3 = ["kkk", "kKk"];
let sourceArray4 = [];

if (sourceArray.length === 0) {
    console.log("");
} else {
    for (let i = 0; i < sourceArray.length - 1; i++) {
        if ((typeof sourceArray[i]) !== "string" || (sourceArray[i].indexOf(" ") !== -1)) {
            sourceArray.splice(i, 1);
            i--;
            continue;
        }

        sourceArray[i] = sourceArray[i].toLowerCase();
        for (let j = i + 1; j < sourceArray.length; j++) {
            console.log("i = " + i);
            console.log("j = " + j);
            if ((typeof sourceArray[j]) !== "string" || (sourceArray[j].indexOf(" ") !== -1) || sourceArray[i].toLowerCase() === sourceArray[j].toLowerCase()) {
                sourceArray.splice(j, 1);
                j--;
            }
        }
    }
}

console.log(sourceArray.join(", "));

//1 2 3 4 5
//1 2 3 4 5
//0 1 2 3 4