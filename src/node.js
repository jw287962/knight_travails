

const node = (valueHolder = null) => {

  let value = valueHolder;
  if(valueHolder &&(valueHolder[0] < 0 || valueHolder[1] < 0 || valueHolder[0]>7 || valueHolder[1]>7)){
    return null;
  }
    let leftup = null;
    let leftdown = null;
    let upleft = null;
    let upright = null;
    let rightup = null;
    let rightdown  = null;
    let downleft = null;
    let downright = null;

    return {value,leftup,leftdown,upleft,upright,rightdown,rightup,downleft,downright}
}

export default node;