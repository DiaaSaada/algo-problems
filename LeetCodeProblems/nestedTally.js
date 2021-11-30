function nestedTally(list, mark) {

    if (typeof list === 'string' || list instanceof String)
        return list == mark

    if( ! Array.isArray(list ))
        return 0

    let markCount = {
        count: 0,
    }
    count(list, mark , markCount );
    return markCount.count

}

function count(list, mark , acc){
    list.forEach( n => {
        if(Array.isArray(n )){
            count(n, mark , acc)
        }
        if( n == mark)
            acc.count++ ;
    })
    return acc ;
}

const example = [
    "drill",
    "screwdriver",
    ["hammer", "screwdriver", "pliers"]
];

console.log(nestedTally(example, "screwdriver1"));