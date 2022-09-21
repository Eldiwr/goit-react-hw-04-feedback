import PropTypes from 'prop-types';
import { Button, ButtonList, ListItem } from "./Feedback.steled";



export const FeedbackOptions = ({onSendFeedback, good, bad, neutral}) => {
    const state = { good, bad, neutral };
    return (
        <ButtonList>
            {Object.keys(state).map((key) => {
                return (<ListItem key={key}><Button id={key} type="button" onClick={onSendFeedback}>{key}</Button></ListItem>);
                })
            }  
        </ButtonList>
    );
    
}

FeedbackOptions.propTypes = {
    onSendFeedback: PropTypes.func.isRequired,
};