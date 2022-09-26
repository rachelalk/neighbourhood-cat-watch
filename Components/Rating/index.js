import react from "react"
import { Rating, AirbnbRating } from 'react-native-ratings';

export default function CatRating({rating}) {

// function ratingCompleted(rating) {
//   console.log("Rating is: " + rating)
// }

// ratingCompleted(rating);

return (

// <AirbnbRating />

<AirbnbRating
  count={5}
  defaultRating={0}
  size={30}
  showRating={false}
  onFinishRating={rating}
/>





);

}

