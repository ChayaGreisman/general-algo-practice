function charCount(str){
    let obj = {};
    for (let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)){
            if (obj[char] > 0){
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}

//   charCount('sfenvrsssfven')
// -->  {s: 4, f: 2, e: 2, n: 2, v: 2, …}


// refactored: 

function charCount(str){
    let obj = {};
    for (var char of str){
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)){
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

