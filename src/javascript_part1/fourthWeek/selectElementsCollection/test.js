
let sourceArr = [
    ["select", "name", "gender", "email"],
    ["select", "plus", "email", "name"],
    ["select", "gender", "table", "name"],
    ["query", "favoriteFruit", ['Яблоко', 'Картофель']],
    ["query", "gender", ],
    ["query", "favoriteFruit", table, name]
];

let resultObj = [];

let attr = {
    name: "",
    counter: 0
}


for (let i = 0; i < sourceArr.length; i++) {
    if (sourceArr[i][0] === "select") {
        for (let j = 1; j < sourceArr[i].length; j++) {
            resultObj[0] = attr {}
        }
    } else if (sourceArr[i][0] === "query") {

    }
}

let test = {
    gg: true,
    ggg: true
};



test.field1 = "field1";



console.log(test);