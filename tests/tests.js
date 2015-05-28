var expect = chai.expect;

describe("max", function(){
	it("should return the largest number of two numbers", function(){
		expect(max(3,4)).to.equal(4);
	});
	it("should return the largest number of two numbers", function(){
		expect(max(10,2)).to.equal(10);
	});
	it("should return the largest number of two numbers", function(){
		expect(max(3,2)).to.equal(3);
	});
	it("should return the largest number of two numbers", function(){
		expect(max(2,2)).to.equal(2);
	});
	it("throw an 'invalid input' if given string", function(){
		expect(function() { max("s") }).to.throw('Invalid Input');
	});

});
describe("maxOfThree", function(){
	it("should return the largest number of three numbers", function(){
		expect(maxOfThree(3,4,2)).to.equal(4);
	});
	it("should return the largest number of three numbers", function(){
		expect(maxOfThree(10,2,3)).to.equal(10);
	});
	it("should return the largest number of three numbers", function(){
		expect(maxOfThree(1,2,10)).to.equal(10);
	});
	it("throw an 'invalid input' if given string", function(){
		expect(function() { maxOfThree("s","s","s") }).to.throw('Invalid Input');
	});

});
describe("isVowel", function(){
	it("should return true if it's a vowel", function(){
		expect(isVowel("a")).to.be.true;
	});
	it("should return false if it's not a vowel", function(){
		expect(isVowel("v")).to.be.false;
	});
	it("should return false if it's not a vowel", function(){
		expect(isVowel("i")).to.be.true;
	});
	it("should return false if it's not a vowel", function(){
		expect(isVowel("y")).to.be.false;
	});
	it("throw an 'invalid input' if given number", function(){
		expect(function() { isVowel(2) }).to.throw('Invalid Input');
	});

});
describe("rovarspraket", function(){
	it("should return a string that after every consonants is an 'o' and that consonant again", function(){
		expect(rovarspraket("this is fun")).to.equal("tothohisos isos fofunon");
	});
	it("should return a string that after every consonants is an 'o' and that consonant again", function(){
		expect(rovarspraket("it could be better")).to.equal("itot cocouloldod bobe bobetottoteror");
	});
	it("should return a string that after every consonants is an 'o' and that consonant again", function(){
		expect(rovarspraket("this function is annoying to test for")).to.equal("tothohisos fofunoncoctotionon isos anonnonoyoyinongog toto totesostot foforor");
	});
	it("throw an 'invalid input' if given given a number", function(){
		expect(function() { rovarspraket(2) }).to.throw('Invalid Input');
	});

});

describe("sum", function(){
	it("should get the sum of an array of numbers", function(){
		expect(sum([1,2,3,4])).to.equal(10);
	});
	it("should get the sum of an array of numbers", function(){
		expect(sum([5,6,7,8,9])).to.equal(35);
	});
	it("should get the sum of an array of numbers", function(){
		expect(sum([5,-1,4,2,4])).to.equal(14);
	});
	it("throw an 'invalid input' if not given an object", function(){
		expect(function() { sum() }).to.throw('Invalid Input');
	});

});
describe("multiply", function(){
	it("should get the product of an array of numbers", function(){
		expect(multiply([1,2,3,4])).to.equal(24);
	});
	it("should get the product of an array of numbers", function(){
		expect(multiply([5,6,7,8,9])).to.equal(15120);
	});
	it("should get the product of an array of numbers", function(){
		expect(multiply([1,1,2,4,10])).to.equal(80);
	});
	it("throw an 'invalid input' if not given a object", function(){
		expect(function() { multiply() }).to.throw('Invalid Input');
	});

});
describe("reverse", function(){
	it("should reverse the order of a string", function(){
		expect(reverse("this is cool")).to.equal("looc si siht");
	});
	it("should reverse the order of a string", function(){
		expect(reverse("it could be better")).to.equal("retteb eb dluoc ti");
	});
	it("should reverse the order of a string", function(){
		expect(reverse("another annoying function to test for")).to.equal("rof tset ot noitcnuf gniyonna rehtona");
	});
	it("throw an 'invalid input' if not given a string", function(){
		expect(function() { reverse(1) }).to.throw('Invalid Input');
	});

});
describe("findLongestWord", function(){
	it("should take an array of string and return the longest word", function(){
		expect(findLongestWord(["duh","cool","be","whats","ballingTrot"])).to.equal("ballingTrot");
	});
	it("should take an array of string and return the longest word", function(){
		expect(findLongestWord(["tb","cool","we"])).to.equal("cool");
	});
	it("should take an array of string and return the longest word", function(){
		expect(findLongestWord(["hey","we","cool","multiply"])).to.equal("multiply");
	});
	it("throw an 'invalid input' if not given a string", function(){
		expect(function() { findLongestWord(1) }).to.throw('Invalid Input');
	});

});
describe("filterLongWords", function(){
	it("should take an array of strings and a number and return and array of words that are longer than the number", function(){
		expect(filterLongWords(["duh","cool","be","whats","ballingTrot"],4)).to.deep.equal(["whats","ballingTrot"]);
	});
	it("should take an array of strings and a number and return and array of words that are longer than the number", function(){
		expect(filterLongWords(["tb","we","cool"],1)).to.deep.equal(["tb","we","cool"]);
	});
	it("should take an array of strings and a number and return and array of words that are longer than the number", function(){
		expect(filterLongWords(["tb","we","cool"],3)).to.deep.equal(["cool"]);
	});
	it("should take an array of strings and a number and return and array of words that are longer than the number", function(){
		expect(filterLongWords(["tb","we","cool","nooo"],5)).to.deep.equal([]);
	});
	it("throw an 'invalid input' if not given a string and a number", function(){
		expect(function() { filterLongWords(1) }).to.throw('Invalid Input');
	});

});
describe("charFreq",function(){
	it("should give the counter of letters in a string", function(){
		expect(charFreq("alakazam")).to.be.equal("a: 4, l: 1, k: 1, z: 1, m: 1");
	});
	it("should give the counter of letters in a string", function(){
		expect(charFreq("chardbiscuit")).to.be.equal("c: 2, h: 1, a: 1, r: 1, d: 1, b: 1, i: 2, s: 1, u: 1, t: 1");
	});
	it("should give the counter of letters in a string", function(){
		expect(charFreq("aaabbaabbabbabccdd")).to.be.equal("a: 7, b: 7, c: 2, d: 2");
	});
	it("throw an 'invalid input' if not given a string and a number", function(){
		expect(function() { charFreq(1) }).to.throw('Invalid Input');
	});
});