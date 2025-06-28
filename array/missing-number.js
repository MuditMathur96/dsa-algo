const nums = [9,6,8,2,3,5,7,0,1];

function sol(){

    let n = nums.length+1;
    let sum  = (n * (n-1))/2;
    let currentSum = nums.reduce((acc,val)=>val+acc,0);
    return sum-currentSum;
}


console.log(sol());