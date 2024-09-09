function solution(numbers) {
    const array = [];

    for(let i=0; i < length.numbers; i++) {
        for(let j=0; j < i; j++) {
            array.push(numbers[i] + numbers[j]);
        }
    }

    return [...new Set(array)].sort((a,b) => a - b);
}