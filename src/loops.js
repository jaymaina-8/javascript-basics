console.log("counting number from 0 to 5")

for (let i =0; i <= 15; i+=2){
  console.log(i);
}

console.log("counting number from 15 to 0")

for (let x =15; x >= 0; x-=1){
  console.log(x);
}

console.log("for loop for an array")
const mycolors = ["red", "green", "blue"];
for (let i = 0; i < mycolors.length; i++){
  console.log(`Color at index ${i}: ${mycolors[i]}`);

}

const myarray = [-8,5,7,56,45,7,65,78,44,8,47,64,66,89,48,89,33]
myarray.sort((a,b)=>a+b)
console.log(myarray);

const mynumbers =[-8,2,65,2,4,-1,4,6,8,45,9]
for (let i = 0; i < mynumbers.length; i++){
  for (let j = 0; j < mynumbers.length -1 -i; j++){
    if (mynumbers[j]>mynumbers[j+1]){
      // swap values
      const tempval = mynumbers[j];
      mynumbers[j]=mynumbers[j+1];
      mynumbers[j+1]=tempval

    }
  }
}
console.log(mynumbers);