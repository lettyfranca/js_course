//11a
const nums = [10, 20, 30];
//console.log(nums);
nums[2] = 99;
//console.log(nums);

//11b
function getLastValue(array) {
    const lastIndex = array.length - 1;
    return array[lastIndex];
}

//console.log(getLastValue([1,20,22,24,5]));
//console.log(getLastValue(['hi', 'hello', 'good']));

//11c
function arraySwap(array) {
    const firstIndex = array[0];
    const lastIndex = array.length - 1;

    array[0] = array[lastIndex];
    array[lastIndex] = firstIndex;

    return array;
    
}

//console.log(arraySwap([1,20,22,24,5]));
//console.log(arraySwap(['hi', 'hello', 'good']));

//11d
for (let i = 0; i <= 10; i += 2) {
    //console.log(i);
}

//11e
for (let i = 5; i >= 0; i--) {
    //console.log(i);
}

//11f
i = 0;
while (i <= 10) {
    console.log(i);
    i += 2;
}

num = 5;
while (num >= 0) {
    console.log(num);
    num--;
}

//11g
const array = [1,2,3];
const result = [];

for (let i = 0; i < array.length; i++) {
    result.push(array[i] + 1);
}

console.log(result);

//11h
function incrArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i]++;
    }
    return array;
}

console.log(incrArray([1,2,3]));
console.log(incrArray([-2,-1,0,99]));

//11i
function addNum(array, num) {
    const arrayFinal = [];
    for (let i = 0; i < array.length; i++) {
        arrayFinal.push(array[i] + num);
    }
    return arrayFinal;
}

console.log(addNum([1,2,3],2));
console.log(addNum([1,2,3],3));
console.log(addNum([-2,-1,0,99],2));

//11j
function addArrays(array, array2) {
    const arrayFinal = [];
    for (let i = 0; i < array.length; i++) {
        arrayFinal.push(array[i] + array2[i]);
    }
    return arrayFinal;
}

console.log(addArrays([1,1,2], [1,1,3]));

//11k
function countPositive(nums) {
    let soma = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            soma++;
        }
    }
    return soma;
}

console.log(countPositive([1,-3,5]));
console.log(countPositive([-2,3,-5,7,10]));

//11l
//11l
function minMax(nums) {
    let maxNum = 0;
    let minNum = 1000;

    if (nums.length === 0) {
        console.log('Min: null e Max: null');
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > maxNum) {
                maxNum = nums[i];
            }
        
            if (nums[i] < minNum) {
                minNum = nums[i];
            }
        }
    }
}

minMax([1,-3,5]);

//11m
minMax([]);
minMax([3]);

//11n
function countWords(words) {
    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (!result[word]) {
            result[word] = 1;
        } else {
            result[word]++;
        }
    }
    return result;
}

console.log(countWords(['lets', 'giovanna', 'luiza', 'lets']));