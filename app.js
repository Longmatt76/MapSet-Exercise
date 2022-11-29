[1,2,3,4]

["ref"]

// 0: {Array(3) => true}
// 1: {Array(3) => false}

const hasDuplicate =(arr) =>{
    let newArr = new Set(arr);
    return arr.length !== newArr.size ? true : false;
};


function isVowel(char){
    return "aeiou".includes(char);
}
 function vowelCount(string){
const vowelMap = new Map();
for(let char of string){
    let lowerCaseChar = char.toLowerCase()
    if(isVowel(lowerCaseChar)){
     if(vowelMap.has(lowerCaseChar)){
       vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) +1);
     }
    else{
        vowelMap.set(lowerCaseChar, 1);
    }
   }
  } return vowelMap; 
};





