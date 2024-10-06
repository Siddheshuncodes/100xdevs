function vote(user){
console.log("Hello "+ user.status + user.name +" your age is "+user.age)
if (user.age <= 18){
  console.log("Hey you can vote now that a cool thing")
}
else{
  console.log("Your can't vote but don't worry you will")
}
}
let user={
  name:"siddhesh",
  age:"21",
  status:"Mr.",
  gender:"Male"
}

