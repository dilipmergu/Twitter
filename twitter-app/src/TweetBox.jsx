import { Accordion, AccordionSummary, Typography } from '@material-ui/core';
import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Cached';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const TweetBox = (props) => {

    function format(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }
    return ( 
        <div>
            <Accordion expanded className="tweet">
                <AccordionSummary>
                    @{props.data.name && props.data.name}
                </AccordionSummary>
                <Typography className="tweet_Text">
                    {props.data.text && props.data.text}
                </Typography>
                <div className="tweetBottom">
                    <div>
                        <ChatBubbleOutlineIcon/> <span className="tweetBottom_value">45</span>
                    </div>
                    <div>
                        <ShareIcon/><span className="tweetBottom_value">{format(props.data.retweet_count)}</span>
                    </div>
                    <div>
                        <FavoriteBorderIcon/> <span className="tweetBottom_value">{format(props.data.favorite_count)}</span>
                    </div>
                </div>
            </Accordion>
        </div> 
    );
}
 
export default TweetBox;