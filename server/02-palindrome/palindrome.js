const palindrome = (word) => {
	if(typeof word != 'string') throw new Error('input are not a string');
	if( word === '' ) throw new Error('empty string are not word'); 
	if( word === ''.trim()) return false;

	return word === word.split('').reverse().join('');
};

module.exports = { palindrome };