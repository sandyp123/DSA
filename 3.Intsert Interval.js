var insert = function(intervals, newInterval) {
   let res = [];
  for(let inter of intervals){
    if(inter[1]<newInterval[0]){
      res.push(inter);
    }else if(inter[0]>newInterval[1]){
      res.push(newInterval);
      newInterval = inter;
    }else{
      newInterval[0] = Math.min(inter[0],newInterval[0]);
      newInterval[1]=Math.max(inter[1],newInterval[1])
    }
  }
    res.push(newInterval)
   return res;

};

// var insert = function (intervals, newInterval) {
//   let i = 0;
//   let n = intervals.length;
//   let res = [];

//   while (i < n && intervals[i][1] < newInterval[0]) {
//     res.push(intervals[i]);
//     i++;
//   }

//   while (i < n && intervals[i][0] <= newInterval[1]) {
//     newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
//     newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
//     i++;
//   }
//   res.push(newInterval);

//   while (i < n) {
//     res.push(intervals[i]);
//     i++;
//   }

//   return res;
// };

