/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {


    let min = Infinity;

    for(let i=0;i<nums.length;i++){
        let sum =nums[i]
        for(let j=i+1;j<nums.length;j++){
            sum = sum + nums[j];
            if(sum>=target){
                console.log(sum,i,j);
                min = Math.min(min,j-i+1);
            }


        }
    }

    return min;



};

console.log(minSubArrayLen(7,[2,3,1,2,4,3]));
