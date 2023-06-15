import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback Percentage: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;

// import React, { Component } from 'react';

// class FeedbackApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   incrementFeedback = category => {
//     this.setState(prevState => ({
//       [category]: prevState[category] + 1,
//     }));
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage() {
//     const { good } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
//   }

//   render() {
//     const totalFeedback = this.countTotalFeedback();
//     const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div>
//         {/* render other components or UI */}
//         <p>Total feedback: {totalFeedback}</p>
//         <p>Positive feedback percentage: {positiveFeedbackPercentage}%</p>
//       </div>
//     );
//   }
// }

// export default FeedbackApp;
