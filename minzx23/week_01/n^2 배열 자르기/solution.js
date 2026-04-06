function solution(n, left, right) {
    var answer = [];

    for(let i=left; i<=right; i++){
        const j=Math.floor(i/n);
        const k=i%n;
        answer.push(Math.max(j,k)+1);
    }

    return answer;
}