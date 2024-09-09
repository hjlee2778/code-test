// 자바스크립트 sort( ) 메서드는 아무런 조건을 전달하지 않고 실행하면 데이터가 문자열이라고 가정하고 정렬함.

function solution(arr) {
    arr.sort((a,b) => a - b);
    return arr;
}