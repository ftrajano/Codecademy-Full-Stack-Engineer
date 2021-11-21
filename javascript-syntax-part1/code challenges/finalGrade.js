/*Write a function, finalGrade(). It should:

take three arguments of type number
if any of them are smaller than 0 or bigger than 100 return 
'You have entered an invalid grade.'
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A'
*/

// Write your function here:
const finalGrade = (grade1, grade2, grade3) => {
    if((grade1 <= 0 || grade1 >=100) || (grade2 <= 0 || grade2 >=100) || (grade3 <= 0 || grade3 >=100)){
      return 'You have entered an invalid grade.'
    }
    let average = (grade1 + grade2 + grade3 )/3
    if (average>=0 && average<=59){
        return 'F';
    } else if (average>=60 && average<=69){
        return 'D';
    } else if (average>=70 && average<=79){
        return 'C';
    } else if (average>=80 && average<=89){
        return 'B';
    } else if (average>=90 && average<=100){
        return 'A';
    }
}
