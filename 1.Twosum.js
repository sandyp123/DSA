var twoSum = function (nums, target) {
 let map = new Map()
  for(let i=0;i<nums.length;i++){
    let comp = target - nums[i];
    if(comp in map){
      return [map[comp],i]
    }else{
      map[nums[i]]=i;
    }
  
 }
};
