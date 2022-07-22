import '../index.css'

const Notification = ({operation, Operations, message, clearMessage}) => {
    console.log("Notification called", operation)
    if (operation === Operations.Create || operation === Operations.Update) {
        setTimeout(clearMessage, 5000)
        return (
            <div className="success">
                {message}
            </div>
        )
    }

    if (operation === Operations.Error) {
        setTimeout(clearMessage, 5000)
        return (
            <div className="error"> 
                {message}
            </div>
        )
    }
}

export default Notification