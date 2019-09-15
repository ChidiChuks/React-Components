import React from 'react';
import { StreamApp, NotificationDropdown, FlatFeed, LikeButton, Activity, CommentField, CommentList } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

class App extends React.Component {
    render() {
        return ( <
            StreamApp apiKey = "du8he7epvp94"
            appId = "45206"
            token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMDcwY2RlMmQtOTViZC00YzE0LWFiOGQtOGY4OGZiNjhlMWZkIn0.43jupEoJVPPLysRPpHj5Xj04MUkq0LksWgVngj3YokM" >
            <
            NotificationDropdown notify / >
            <
            FlatFeed options = {
                { reactions: { recent: true } } }
            notify Activity = {
                (props) =>
                <
                Activity {...props }
                Footer = {
                    () => ( <
                        div style = {
                            { padding: '8px 16px' } } >
                        <
                        LikeButton {...props }
                        /> <
                        CommentField activity = { props.activity }
                        onAddReaction = { props.onAddReaction }
                        /> <
                        CommentList activityId = { props.activity.id }
                        /> <
                        /div>
                    )
                }
                />
            }
            /> <
            /StreamApp>
        );
    }
}
export default App;