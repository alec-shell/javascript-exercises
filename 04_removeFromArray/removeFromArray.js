const removeFromArray = function(list, ...target) {
    let newList = [];
    main: for (let i = 0; i < list.length; i++) {
        for (item of target) {
            if (list[i] === item) continue main;
        }
        newList.push(list[i]);
    }
    return newList;
};

// Do not edit below this line
module.exports = removeFromArray;
