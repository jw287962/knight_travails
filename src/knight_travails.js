import node from './node.js';


function allMoves(position = node(),x = 0,y = 0){
      position.value = [x,y];
      if(position.value[0] > 7 || position.value[1]> 7 || position.value[0] <0 || position.value[1]<0){
        return null;
      }
      if(position == null){
        return ;
      }

      console.log(position.value);
    position.leftdown = node([position.value[0]-2,position.value[1]-1]);
    position.leftup   = node([position.value[0]-2,position.value[1]+1]);
    position.upleft = node([position.value[0]-1,position.value[1]+2]);
    position.upright = node([position.value[0]+1,position.value[1]+2]);
    position.rightdown = node([position.value[0]+2,position.value[1]-1]);
    position.rightup = node([position.value[0]+2,position.value[1]+1]);
    position.downleft = node([position.value[0]-1,position.value[1]-2]);
    position.downright = node([position.value[0]+1,position.value[1]-2]);

return position;
}

function getRoot(){
  return root;
}

function knightMoves(start,endPosition){
  let moves = allMoves(undefined,start[0],start[1]);

  // while(endPosition[0] != moves.value[0] || endPosition[1] != moves.value[1]){
for(let i = 0 ; i <= 10; i++){
      if(moves.leftdown != null)
      moves = allMoves(moves.leftdown,moves.leftdown.value[0],moves.leftdown.value[1]);
      if(moves.leftup != null)
      moves = allMoves(moves.leftup,moves.leftup.value[0],moves.leftup.value[1]);
      if(moves.upleft != null)
      moves = allMoves(moves.upleft,moves.upleft.value[0],moves.upleft.value[1]);
      if(moves.upright != null)
      moves = allMoves(moves.upright,moves.upright.value[0],moves.upright.value[1]);
      if(moves.rightdown != null)
      moves = allMoves(moves.rightdown,moves.rightdown.value[0],moves.rightdown.value[1]);
      if(moves.rightup != null)
      moves = allMoves(moves.rightup,moves.rightup.value[0],moves.rightup.value[1]);
      if(moves.downleft != null)
      moves = allMoves(moves.downleft,moves.downleft.value[0],moves.downleft.value[1]);
      if(moves.downright != null)
      moves = allMoves(moves.downright,moves.downright.value[0],moves.downright.value[1]);

  }

}

export {allMoves, knightMoves,getRoot};