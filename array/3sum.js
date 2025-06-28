/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    
    
    let op = [];
    for(let i=0;i<nums.length;i++){

        const target = 0-nums[i];

        const memo = {}
        for(j=0;j<nums.length;j++){
            console.log(target,nums[i],nums[j]);
            if(i==j ) continue;

            const comp = target - nums[j];

            if(memo[comp]!==undefined ){
                op.push([nums[i],nums[j],comp])

            }else{
                memo[nums[j]] = comp;
            }


        }  


        return op;  



    }
    
};

let op = threeSum([0,0,0]);
console.log(op);