let arr = []


window.alert("Generate New Password")
function generatePassword() {

let upperCase =["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"]
let lowerCase =["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"]
let symbol = ['~,`,!,@,#,$,%,^,&,*,(,),_,-,+,=,{,[,},],]']
let number =  ['0','1','2','3','4','5','6','7','8','9']


let allChar = [...upperCase, ...lowerCase, ...symbol, ...number];
console.log(allChar.length)


for (let i = 0; i < allChar.length; i++) {
   
  let select = Math.floor(Math.random() * allChar.length);
  arr.push(allChar[select])
  }
  arr.length = 12
passwordText.value = password;
console.log(arr.join())
  
}
console.log(generatePassword)
// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
console.log(generateBtn)


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword); {
  console.log(generatePassword)

}


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  
  
  
  
  passwordText.innerText = arr;
   
  
  
  




}
