import { Rating, AirbnbRating } from 'react-native-ratings';

function Rating() {


return (
ratingCompleted(rating) {
  console.log("Rating is: " + rating)
}

<AirbnbRating />

<AirbnbRating
  count={11}
  reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
  defaultRating={11}
  size={20}
/>

<Rating
  showRating
  onFinishRating={this.ratingCompleted}
  style={{ paddingVertical: 10 }}
/>





)}

export default Rating