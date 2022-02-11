/*I think this is the code that helps display the messages we type on the screen?*/

export default function Message(props) {
    // add the date
    // add the username
    // add a pic
    return (
        <div 
            className="message-row"
            style={{ flexDirection: props.fromMe ? "row-reverse": "row"}}>
            <div className="all-message">
                <span className="message-user">{props.user}</span>
                <div className="message">
                    <span> {props.text} </span>
                </div>
            </div>
        </div>
    );
}