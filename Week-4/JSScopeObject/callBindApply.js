class Calculator{
    add(num1,num2){
        return num1+num2;
    }
    subtract(num1,num2)
    {
        return num1-num2;
    }
    multiple(num1,num2)
    {
        return num1*num2;
    }
    divide(num1,num2)
    {
        return num1/num2;
    }

}
class ScientificCalculator extends Calculator{
    square(num){
        return num*num;
    }
    cube(num){
        return num*num*num;
    }
    power(num1,num2){
        return Math.power(num1,num2);
    }
	multiplyByTwo(num)
    {
    return num*2;
    }
	powerOfThree(num)
    {
		return num*num*num;
	}
}
var calObject = new Calculator();
var object1 = new ScientificCalculator();
let multipleByTwo = object1.multiplyByTwo.bind(object1);
let powerOfThree = object1.powerOfThree.bind(object1);

console.log("Addition: " + object1.add.call(calObject,10,5));
console.log("Subtraction: " + object1.subtract.apply(calObject,[10,5])); 
console.log("MultipleByTwo: " +  multipleByTwo(5)); 
console.log("PowerOfThree: " +  powerOfThree(5)); 