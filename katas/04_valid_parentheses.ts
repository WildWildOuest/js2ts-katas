/**

source : https://www.codewars.com/kata/valid-parentheses

Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints

0 <= input.length <= 100

*/
const validParentheses = (parens: string): boolean => {
    let validCpt = 0;
    for(let char of parens){
        if(char === '(') validCpt+=1;
        if(char === ')') validCpt-=1;
        if(validCpt < 0) return false;
    }
    return validCpt == 0;
}
