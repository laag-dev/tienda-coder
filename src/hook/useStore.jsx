import { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";

export  const useStore = ()=>{
    return useContext(StoreContext)
};