import { useLocation } from "react-router-dom"

export function Checkout(){

 const {state: {clientSecret}} = useLocation();
    

    return(
      <>
      <h1>
        Checkout
      </h1>
      </>
        
    )
}