function solution(brown, yellow) {
    // 전체 격자 수
    const total = brown + yellow; 

    // 모든 가로와 세로 조합을 시도 해 보기
    // 일단 가로는 최소 3부터 존재하니까, 3으로 시작.
    for (let width = 3; width <= total; width++) {
        // total이 width로 나누어 떨어지는 경우에만 세로 길이를 계산함.
        if (total % width === 0) {
            let height = total / width;
            
            // 가로는 반드시 세로보다 크거나 같아야 함
            if (width >= height) {
                // 갈색 테두리는 카펫의 가장자리를 감싸고 있기 때문에, 양쪽 끝의 갈색 테두리 1칸씩을 제외하고 나면 가운데 남은 부분이 노란색 격자가 위치할 수 있는 영역이 됨
                // 세로도 같은 이유로 위와 아래의 갈색 테두리 1칸씩을 제외하고 나면 가운데 남은 부분이 노란색 격자가 위치할 수 있는 영역
                // 테두리를 제외한 내부의 노란색 격자 수가 yellow와 일치하는지 확인
                if ((width - 2) * (height - 2) === yellow) {
                    return [width, height];
                }
            }
        }
    }
}
