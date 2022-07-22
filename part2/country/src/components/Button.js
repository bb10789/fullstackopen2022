import { useState } from "react"
import Information from "./Information"

const Button = ({country}) => {

    const [show, setShow] = useState(false)

    const ShowInformation = () => {
        setShow(!show)
    }

    if (!show) {
        return (
                <button onClick={ShowInformation}> show</button>
        )
    } else {
        return (
            <div>
                <button onClick={ShowInformation}> close</button>
                <Information country={country}></Information>
            </div>
        )
    }




}
export default Button