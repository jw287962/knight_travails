import node from './node.js';


function allMoves(position = node(),x = 0,y = 0,counter =  0){
  
      position.value = [x,y];
      // if(position.value[0] > 7 || position.value[1]> 7 || position.value[0] <0 || position.value[1]<0){
      //   return null;
      // }
      
      if(position.previousPosition.length > 10) return null;

      // if(!visitedLeftDown)
      position.leftdown = node([position.value[0]-2,position.value[1]-1],position.previousPosition);
      // if(!visitedLeftUp)
      position.leftup   = node([position.value[0]-2,position.value[1]+1],position.previousPosition);
      // if(!visitedUpleft)
      position.upleft = node([position.value[0]-1,position.value[1]+2],position.previousPosition);
      // if(!visitedUpRight)
      position.upright = node([position.value[0]+1,position.value[1]+2],position.previousPosition);
      // if(!visitedRightDown)
      position.rightdown = node([position.value[0]+2,position.value[1]-1],position.previousPosition);
      // if(!visitedRightUp)
      position.rightup = node([position.value[0]+2,position.value[1]+1],position.previousPosition);
      // if(!visitedDownLeft)
      position.downleft = node([position.value[0]-1,position.value[1]-2],position.previousPosition);
      // if(!visitedDownRight)
      position.downright = node([position.value[0]+1,position.value[1]-2],position.previousPosition);


      if(!(position.leftdown || position.leftup||position.upright || position.upleft || position.rightdown
        || position.rightup || position.downleft || position.downright)) return null;

      if(position.leftdown != null)
    allMoves(position.leftdown,position.leftdown.value[0],position.leftdown.value[1],counter+=1);
    
    if(position.leftup != null)
   allMoves(position.leftup,position.leftup.value[0],position.leftup.value[1],counter+=1);
    if(position.upleft != null)
  allMoves(position.upleft,position.upleft.value[0],position.upleft.value[1],counter+=1);
    if(position.upright != null)
  allMoves(position.upright,position.upright.value[0],position.upright.value[1],counter+=1);
    if(position.rightdown != null)
  allMoves(position.rightdown,position.rightdown.value[0],position.rightdown.value[1],counter+=1);
    if(position.rightup != null)
  allMoves(position.rightup,position.rightup.value[0],position.rightup.value[1],counter+=1);
    if(position.downleft != null)
   allMoves(position.downleft,position.downleft.value[0],position.downleft.value[1],counter+=1);
    if(position.downright != null)
    allMoves(position.downright,position.downright.value[0],position.downright.value[1],counter+=1);

return position;
}

function getRoot(){
  return root;
}
let root;

function levelOrder(node = root,endPosition){
  let queueArray = [];
    if(node == null) return [];
    let orderArray = [];
    queueArray.push(node);

    while(queueArray.length != 0){
       let sliced = queueArray.splice(0,1);
      //  if(callback)
      //   orderArray.push(callback(sliced[0].data));
      //  else
      //   orderArray.push(sliced[0].data);
      let currentPosition = sliced[0].value;
      if(currentPosition[0] ==  endPosition[0] && currentPosition[1] == endPosition[1])
      return  sliced[0].previousPosition;


      if(sliced[0].leftdown != null){
        queueArray.push(sliced[0].leftdown); 
      }
      if(sliced[0].leftup != null){
    queueArray.push(sliced[0].leftup);
      }
       if(sliced[0].upleft != null){
    queueArray.push(sliced[0].upleft);
      }
      if(sliced[0].upright != null){
    queueArray.push(sliced[0].upright);
      }
      if(sliced[0].rightdown != null){
    queueArray.push(sliced[0].rightdown);
      }
      if(sliced[0].rightup != null){
    queueArray.push(sliced[0].rightup);
      }
      if(sliced[0].downleft != null){
    queueArray.push(sliced[0].downleft);
      }
      if(sliced[0].downright != null){
    queueArray.push(sliced[0].downright);
      }
      
    }
 
}
function knightMoves(start,endPosition){
  let firstMove = node(start);
  console.log(firstMove);
  let moves = allMoves(firstMove,start[0],start[0]);
let root = firstMove;
  console.log(moves);
  // while(endPosition[0] != moves.value[0] || endPosition[1] != moves.value[1]){
    let array = levelOrder(firstMove,endPosition);
    console.log(array);

    array.forEach(element => {
      console.log(element);
    });

}



export {allMoves, knightMoves,getRoot};