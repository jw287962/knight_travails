

const node = (valueHolder = null,array = []) => {
  let previousPosition;
  let repeated = false;
   previousPosition = [].concat(array);
   let value = valueHolder;

   if(valueHolder &&(valueHolder[0] < 0 || valueHolder[1] < 0 || valueHolder[0]>7 || valueHolder[1]>7)){
     return null;
   }
    previousPosition.forEach(element => {
      if(element[0] == valueHolder[0] && element[1] == valueHolder[1]){
        repeated = true;
      }
  });
  if(repeated) return null;
  

  if(value && !repeated)
  previousPosition.push(value);




    let leftup = null;
    let leftdown = null;
    let upleft = null;
    let upright = null;
    let rightup = null;
    let rightdown  = null;
    let downleft = null;
    let downright = null;

    return {value,leftup,leftdown,upleft,upright,rightdown,rightup,downleft,downright,previousPosition}
}

export default node;