function pipe(funcs) {
	// your code here
	return (initialValue) => {
		return funcs.reduce((acc, fn) => {return fn(acc)}, initialValue);
	}
}
