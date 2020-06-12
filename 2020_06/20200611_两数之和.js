/**
 * 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let list = []
    for(let i =0 ; i< nums.length; i++) {
        for(let j =i+1 ; j< nums.length; j++){
            if(nums[i]+nums[j] === target){
                list.push(i)
                list.push(j)
            }
        }
    }
    return list
};