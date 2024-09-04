// 이진 트리의 노드를 정의하는 함수
function TreeNode(val, left = null, right = null) {
    this.val = (val === undefined ? 0 : val); // 노드의 값 설정, 기본값은 0
    this.left = (left === undefined ? null : left); // 왼쪽 자식 노드, 기본값은 null
    this.right = (right === undefined ? null : right); // 오른쪽 자식 노드, 기본값은 null
}

// 이진 트리의 최대 깊이를 계산하는 함수
function maxDepth(root) {
    // 기저 조건: 만약 현재 노드(root)가 null이라면, 트리의 깊이는 0.
    // 즉, 더 이상 노드가 없으므로, 깊이는 0.
    if (root === null) {
        return 0; // 이 부분이 재귀 호출을 멈추는 부분
    }

    // 왼쪽 서브트리의 최대 깊이를 재귀적으로 계산
    const leftDepth = maxDepth(root.left);

    //오른쪽 서브트리의 최대 깊이를 재귀적으로 계산
    const rightDepth = maxDepth(root.right);

    // 왼쪽과 오른쪽 서브트리 중 더 깊은 쪽을 선택하고, 1을 더함.
    //  현재 노드를 포함해야 하므로 1을 더함.
    return Math.max(leftDepth, rightDepth) + 1;
}