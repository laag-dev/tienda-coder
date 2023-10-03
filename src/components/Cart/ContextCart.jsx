import { createContext, useState } from "react";

export const ControllerShowCartProvider = createContext();

const ContextCart = ({children}) => {
    const [cartShow, setCartShow] = useState("none")

    return(
        <ControllerShowCartProvider value={{cartShow, setCartShow}}>
            {children}
        </ControllerShowCartProvider>
    )
}

export default ContextCart;