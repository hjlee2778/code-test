const solution = nums => {
    let answer = []; // 중복 없는 폰켓몬 종류를 담을 배열
    const max = nums.length / 2; // 선택할 수 있는 폰켓몬의 최대 수 계산

    // nums 배열의 각 요소에 대해 map 메서드로 순회
    nums.map(num => (
        // answer 배열이 최대 선택 수보다 작고, 해당 폰켓몬이 아직 추가되지 않았다면 추가
        answer.length < max && !answer.includes(num) ? answer.push(num) : num
    ));
    
    return answer.length; // 최종적으로 선택된 폰켓몬의 종류 수 반환
}
