const stackFactory = () => {
let empty = true;
let size = 0;
let capacity = 2;
let values = [];

  return { 
    isEmpty: () => empty = size===0,
    size: () => size,
    push: (value) => { 
    			  if(value < 1) throw new Error('only positive values');
                  if (size === capacity) throw new Error('capacity overflow error');
                  size += 1
                  values.push(value);
                  return value
                },
    pop: () => {  
    			  if (size===0) throw new Error('capacity underflow error');
                  let aux = size
                  size -= 1
                  return values.pop();
                }
  }
};

module.exports = { stackFactory };