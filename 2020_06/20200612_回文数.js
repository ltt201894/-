var isPalindrome = function(x) {
    /** 回文数
 * @param {number}  x 
 * 1.判断正负 赋值返回false  不是回文数
 * 2.x转为数组，利用二分法 从第一位到中间位数，判断 是否和最后一位相等，如果不相等，break返回false
 * @return {boolean}
 */
    let result = true;
    if(x >= 0){
        let arr = x.toString().split('')
        for(i = 0; i < arr.length/2; i++) {
            if(arr[i] !== arr[arr.length -1 -i]){
                result = false
                break
            }
        }
    } else {
        result = false
    }
    return result
};
//方法二 利用数组 reverse方法 然后转成字符串比较

var isPalindrome2 =function(){
    return x.toString() == x.toString().split('').reverse().join('')
}