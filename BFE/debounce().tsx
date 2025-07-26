function debounce(func, wait) {
  // your code here
  let timeout;
  return (...args) => {
    const context = this;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait)
  }
}
