const nums = [4,3,2,7,2,6,1];

function sol(){

   const length = nums.length;
   const op = [];
   const set = new Set(nums);

   let i =1;
   while(i<length){
        if(!set.has(i)) op.push(i)
            i++;
   }
   return op;
}

console.log(sol());