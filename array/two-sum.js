const nums = [2,7,11,15];
const target =9;
function sol(){

    let memo = {};

    for(let i=0;i<nums.length;i++){

        const value = nums[i];
        let comp = target-value;
    
        if(memo[comp]){
            return [value,comp]
        };
    
        memo[value] = comp
    }
   



}

console.log(sol());