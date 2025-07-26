function curry(fn) {
  // your code here
  return function curriedFunction(...args){
    if(args.length >= fn.length){
      return fn(...args);
    }else{
      return (...nextArgument) => {
        return curriedFunction(...args, ...nextArgument);
      }
    }
  }
}
