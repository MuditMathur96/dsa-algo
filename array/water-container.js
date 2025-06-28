
var maxArea = function (height) {

    let left = 0;
    let right = height.length - 1;
    let max = 0;
    while (left < right) {

        let h = Math.min(height[left], height[right]);
        let w = right - left;
        console.log(h, w, h * w);
        max = Math.max(max, h * w);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }


    }
    return max;

};


const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const maxWater = maxArea(arr);
console.log(maxWater);