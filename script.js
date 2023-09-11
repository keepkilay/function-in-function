function createAdder(a) {
	return function addA(b) {
  	return a + b;
  }
}

const add5 = createAdder(5);
alert( add5(5) ) // 10
alert( add5(12) ) // 17