/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const mergedMap = {};

  // 1. Add all objects from arr1 to the map, using their id as the key.
  for (const obj of arr1) {
    mergedMap[obj.id] = { ...obj };
  }

  // 2. Process arr2. If an id exists, merge. If not, add it.
  for (const obj of arr2) {
    if (mergedMap[obj.id]) {
      // ID exists, merge objects. Properties from obj (arr2) will overwrite.
      mergedMap[obj.id] = { ...mergedMap[obj.id], ...obj };
    } else {
      // ID is new, just add the object.
      mergedMap[obj.id] = { ...obj };
    }
  }

  // 3. Convert the map values back to an array and sort by id.
  const joinedArray = Object.values(mergedMap);
  joinedArray.sort((a, b) => a.id - b.id);

  return joinedArray;
};

const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
console.log(join(arr1, arr2));
