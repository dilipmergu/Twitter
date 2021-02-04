import React from 'react';
import { useSelector } from 'react-redux';
import TweetBox from './TweetBox';
import Message from './Message';


const TrumpPage = () => {

    const twitterData = useSelector(state=>state.tweetsTrump);
    const {trumpTweets,error} = twitterData;
    return ( 
        <div>
            {
                error?<Message error={error}/>:
                <div  className="tweetsWindow">{trumpTweets.map((t,i)=>{
                    return <TweetBox key={i} data={t}/>
                })}</div>
            }    
        </div>
 );
}
 
export default TrumpPage;