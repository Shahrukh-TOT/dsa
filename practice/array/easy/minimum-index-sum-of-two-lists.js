/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let map = new Map();

    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }
    let indexMap = new Map();

    for (let i = 0; i < list2.length; i++) {
        let preIndex = map.get(list2[i]);
        let sumIndex = i + preIndex;
        if (sumIndex >= 0 && indexMap.has(sumIndex)) {
            let items = indexMap.get(sumIndex);
            items.push(list2[i])
            indexMap.set(sumIndex, items);
        } else {
            if (!Number.isNaN(sumIndex)) indexMap.set(sumIndex, [list2[i]]);
        }
    }

    let keys = indexMap.keys();
    let min = Infinity;

    for (const key of keys) {
        if (key < min) min = key;
    }

    return indexMap.get(min)

};

console.log(findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KNN", "KFC", "Burger King", "Tapioca Express", "Shogun"]
));