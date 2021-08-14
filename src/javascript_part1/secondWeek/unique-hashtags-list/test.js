let sourceArray = ['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming', 'script'];

if (sourceArray.length === 0) {
    console.log("");
} else {
    for (let i = 0; i < sourceArray.length - 1; i++) {
        sourceArray[i] = sourceArray[i].toLowerCase();
        for (let j = i + 1; j < sourceArray.length; j++) {
            if (sourceArray[i].toLowerCase() === sourceArray[j].toLowerCase()) {
                sourceArray.splice(j, 1);
            }
        }
    }
}

console.log(sourceArray.join(", "));

//1 2 3 4 5
//1 2 3 4 5
//0 1 2 3 4