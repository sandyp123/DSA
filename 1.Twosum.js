var twoSum = function (nums, target) {
 let map = new Map()
  for(let i of nums){
    let comp = target - nums[i];
    if(map.has(comp)){
      return [mao[comp],i]
    }else{
      map(nums[i])=i;
    }
  
 }
};
