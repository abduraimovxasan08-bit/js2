
 let a = prompt("a kiriting");
 if (a > 10){
     console.log("a katta 10dan");
 }else{
     console.log("a kichik 10dan")
 }


 let a1 = prompt("a1 ni kiriting:");
 let b1 = prompt("b1 ni kiriting:");
 if (a1 == b1){
     console.log("teng sonlar");
 }


 let a2 = prompt("sonni kiriting:");
 if (a2 % 5 == 0){
     console.log ("5 ga bo'linadi");
 }else{
     console.log("5 ga bolinmaydi")
 }


  let a3 = Number(prompt("1-sonni kiriting:"));
  let b3 = Number(prompt("2-sonni kiriting:"));
  let c3 = Number(prompt("3-sonni kiriting:"));
  if (a3 > b3 && a3 > c3){
  console.log("max a3")}
  else if  (b3 > a3 && b3 > c3){
  console.log("max b3")}
  else{
  console.log("max c3")}



 let harorat = prompt("haroratni kiriting:");
 if ( harorat < 0){
     console.log("muzlaydi");
 }else{
     console.log("oddiy holat");
 }


  for ( let i = 1; i <= 30; i++){
    console.log(i);
 }


 for ( let i1 = 1; i1 <= 50; i1 ++){
     if (i1 % 2 === 0){
         console.log(i1)
     }
 }