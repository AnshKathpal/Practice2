let str = "stvr";
let count = 0;
for(x=0;x<=str.length-1;x++){
  if(str[x]=="a"|| str[x]=="e"|| str[x]=="i"|| str[x]=="o"|| str[x]=="u"){
    count++
  }
}if(count>0){
  console.log("True")
}else {
  console.log("False");
}