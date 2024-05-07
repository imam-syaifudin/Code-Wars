function likeOrDislike(buttons) {

  let activeButton = "Nothing";
  const click = (val) => {
    activeButton === "Nothing" ? val : "Nothing"
  }
  
  buttons.forEach(element => {
    click(element)
    console.log(activeButton);
  });

//   return activeButton;
}

// console.log(likeOrDislike(["Dislike", "Dislike"]));
console.log(likeOrDislike(["Like", "Like", "Like"]));
// console.log(likeOrDislike(['Like','Dislike']));
// console.log(likeOrDislike(['Dislike','Like','Dislike']));
// console.log(likeOrDislike(['Like','Like','Dislike','Like','Like','Like','Like','Dislike']));
// console.log(likeOrDislike([]));
