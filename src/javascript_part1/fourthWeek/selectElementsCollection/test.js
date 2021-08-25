
let sourceArr = [
    ["select", "name", "gender", "email"],
    ["select", "plus", "email", "name"],
    ["select", "gender", "table", "name"],
    ["query", "favoriteFruit", ['Яблоко', 'Картофель']],
    ["query", "gender", ['Женский', 'Мужской']],
    ["query", "favoriteFruit", ['Яблоко', 'Сало']]
];

let resultObj = [];

let selectParams = {
    fields: [],
    selectCount: 0
}

let queryParams = {
    fields: [],
    queryCount : 0
}

for (let i = 0; i < sourceArr.length; i++) {
    if (sourceArr[i][0] === "select") {
        selectParams.selectCount++;
        selectParams.fields.push(sourceArr[i].slice(1));
    } else if (sourceArr[i][0] === "query") {
        queryParams.queryCount++;
        queryParams.fields.push(sourceArr[i].slice(1));
    }
}

selectParams.fields = selectParams.fields.substring(0, selectParams.fields.length - 1);
queryParams.fields = queryParams.fields.substring(0, queryParams.fields.length - 1);

let test = {
    gg: true,
    ggg: true
};



test.field1 = "field1";



console.log(test);