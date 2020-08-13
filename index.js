///////////////Menu Items (MVP)///////////////////

/* const latte = {name: "Cafe Latte", price: 4, category: "Drinks"};
const burger = {name: "Burger", price: 18, category: "Lunch"};
const breakfastBurrito = {name: "Breakfast Burrito", price: 16, category:"Breakfast"}; */

/* Task 1a: write a function to return more menu items with the same format as the items above. */

/* function createMenuItem(name, price, category){
    return {name, price, category};
} */

/* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */

/* console.log(createMenuItem('tacos', 11, 'Lunch'));
console.log(createMenuItem('fruit cup', 3, 'Snacks'));
console.log(createMenuItem('Curry', 10, 'Dinner'));
 */

/* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter. 

Your method should accept: 

(1) A string (teacher, student, or public)

and should return a number. 

For example, burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2*/

/* const burger = {name: "Burger", price: 18, category: "Lunch", 
discount: function (string){
  if(string === 'teacher' || string === 'student'){
    console.log(this.price * 0.75);
  }else{
    console.log(this.price * 0.90);
  }
}}

burger.discount("teacher")
burger.discount("public") */

//const burger = {name, price, category};


///////////////Reviews (MVP)///////////////////

const reviews = [{name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
    {name: "Jack", rating: 3, feedback:"A little too hipster for my taste, but the burger was decent, if overpriced"},
    {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
    {name:"Reyna", rating: 3.5, feedback: ""},
]

/* Task 3: Console.log just Julius' feedback */

/* console.log(reviews.name.Julius.feedback); */


/* Task 4: Add a new rating with your (fictitious) opinions of the restaurant in the same format as the reviews above. */

/* function addReview(reviews, name, rating, feedback){
  reviews.push({Simone, 4, Amazing!});
  return reviews;
} 

/* Task 5: Add the following feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays"*/

  function changeReview(reviews, name, rating, feedback){
  reviews[3.5].feedback = 'this place is chill with really cool people, great for getting work done on weekdays';
  return reviews;
}

changeReview(reviews, "Reyna", 3.5, feedback);

/*  Task 6: Write a function to return a review based on the index of the review in the array.

 Your function should take two arguments:

(1) an array which holds all of the reviews
(2) a number which is the desired index in the array.

and should return a string in the format `{name} gave the restaurant a {rating}, and their feedback was: {feedback}`
 * 
 * For example, if getReviewByIndex is invoked with reviews and the number 0
 * it will return `Daniela gave the restaurant a 5 star review and their feedback was: Beautiful atmosphere and wonderful vegan options!`
*/

let ReviewByIndex = []

function getReviewByIndex (reviews, index) {
    ReviewByIndex = ' ${reviews[index].name} gave the restaurant a ${reviews[index].rating}, and their feedback was: ${reviews[index].feedback}';
    return(ReviewByIndex);
  }

  console.log(getReviewbyIndex(reviews, 0))
  

/* Task 7: Write a function to get information about the most recent review called `getLastReview`

getLastReview should accept:
  (1) an array of objects 
  
and should return a string in the format `name} gave the restaurant a {rating}, and their feedback was: {feedback}`

For example, if getLastReview is invoked passing the reviews array it will return `Reyna gave the restaurant a 3.5 star review and their feedback was: "this place is chill with really cool people, great for getting work done on weekdays"`.
*/
/* function getLastReview(reviews) {
    var LastReview = reviews[reviews.length - 1];
    LastReview = this.name + 'gave the restaurant a' + this.rating + 'review and their feedback was' + this.feedback; 
    return LastReview;
  } 

  reviews.getLastReview(reviews) */


///////////////🍔☕️🍽 STRETCH🍔☕️🍽////////////////////

/** STRETCH 1: Write a function called `getReviewByRating` that returns an array containing all reviews in a certain range. Your function should accept: 

  (1) An array of objects
  (2) A rating

  and should return an array of objects. 

  For example, invoking getReviewByRating(reviews, 4) would return [{name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."}]
*/

 function getReviewByRating(reviews, rating) {
    for(let i = 0; i < reviews.length; i++){
      if(reviews[i].rating === rating){
        zeroreviews.push(reviews[i].name.rating.feedback);
      }
    }
    console.log(zeroreviews);
  }

  
/** STRETCH 2: Write a function called 'getLongestReview' that returns an array containing all reviews longer than 15 words. 
  
Your function should accept: 

  (1) An array of objects

and should return an array of objects. 

  For example, invoking getLongReviews(reviews) would return [
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." }]
*/
let longReviews = []
  function getLongReviews(reviews) {
    for(let i = 0; i < reviews.length; i++){
      let wordCount = reviews[i].feedback.split("").length;
      if(wordCount > 14){
        longReviews.unshift(reviews[i]);

      }
    }
    console.log(longReviews);
  }

  getLongReviews(reviews);
  

/* STRETCH 3:  This challenge is not related to the data above! 

Write a function called carMarker 

Your function should accept:

(1) a single odometer argument (a number) 

and return an object.

The returned object should have the following characteristics:
     it has an `odometer` property that contains the argument passed in.
     it has a `drive` method that takes a distance as its argument, and
         (1) causes the odometer in the object to be increased by the distance,
         (2) returns the updated value of the `odometer`.
*/


function carMaker(/* code here */) {
    /* code here */
    
}
