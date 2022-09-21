import { useState } from 'react';
import { Statistics } from './Feedback/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const sendFeedback = button => {
    
    switch (button.target.id) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    } 
  };
  
    const countTotalFeedback = () => {
      const total = good + neutral + bad;
      return total;
    };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const goodFeedbacks = good;
        
  return total === 0 ? 0 : Math.round(goodFeedbacks / total * 100);
  };

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onSendFeedback={sendFeedback}
            good={good}
            neutral={neutral}
            bad={bad}
          />
        </Section>
      
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message={"There is no feedback"} /> 
          ) : (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              totalStat={countTotalFeedback()}
              positiveFeedback={countPositiveFeedbackPercentage()}
          />
        )}       
        </Section>
        <GlobalStyle />
      </>
    )   
}
