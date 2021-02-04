import React from 'react';
import { useSelector } from 'react-redux';
import TweetBox from './TweetBox';
import Message from './Message';

const ClintonPage = () => {

    const twitterData = useSelector(state=>state.tweetsClinton);
    const {clintonTweets, error} = twitterData;
    return ( 
            <div>
                {
                    error?<Message error={error}/>:
                    <div  className="tweetsWindow">{clintonTweets.map((t,i)=>{
                        return <TweetBox key={i} data={t}/>
                    })}</div>
                    
                }
                
            </div> 
        );
}
 
export default ClintonPage;