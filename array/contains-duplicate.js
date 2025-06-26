const num = [1,2,4,5,6,7];


function sol(){

    const set = new Set(num);
    
    if(num.length !== set.length) return true;
    
    return false;
}


console.log(sol());

