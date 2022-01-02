
// Assignment Code
let generateBtn = document.querySelector("#generate");
let password = document.querySelector("#password")

prompt("Please select password criteria")

let generatePassword = function (){

let allChar = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength = 8-128;
let password = "";
for (let i = 0; i < passwordLength; i++) {
  let randomNumber = Math.floor(Math.random() * allChar.length);
password += allChar.substring(randomNumber,randomNumber+1);

  document.getElementById("password").value = password
  }

}
 

generateBtn.addEventListener("click", generatePassword);






















































// const password = prompt('please generate new password')

// function generatePassword() {

// let allChar = [...upperCase, ...lowerCase, ...symbol, ...number];
// console.log(allChar.length)

// let upperCase =["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"]
// let lowerCase =["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"]
// let symbol = ['~,`,!,@,#,$,%,^,&,*,(,),_,-,+,=,{,[,},],]']
// let number =  ['0','1','2','3','4','5','6','7','8','9']

// for (let i = 0; i < allChar.length; i++) {
   
//   generatePassword
// // }
// // }

// // Get references to the #generate element
// let generateBtn = document.querySelector("#generate");
// console.log(generateBtn)


// // Add event listener to generate button
// generateBtn.addEventListener("click", generatePassword); {
  

// }


// function writePassword() {
//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");
  
  
//   passwordText.innerHTML = generatePassword()
//   console.log(writePassword)
  
  
  




// }

