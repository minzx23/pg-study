function solution(record) {
    var answer = [];

    var user={};
    var rec=[];

    for(let i of record){
        const [command, id, name]=i.split(' ');
        if(command==='Enter' || command==='Change'){
            user[id]=name;
        }

        if(command==='Enter'){
            rec.push([id, '님이 들어왔습니다.']);
        }
        else if(command==='Leave'){
            rec.push([id, '님이 나갔습니다.']);
        }
    }

    for(let [id, message] of rec){
        answer.push(`${user[id]}${message}`);
    }

    return answer;
}