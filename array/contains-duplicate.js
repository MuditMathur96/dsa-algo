const num = [1,2,4,5,7,7];


function sol(){

    const set = new Set(num);
    if(num.length !== set.size) return true;
    
    return false;
}


console.log(sol());

