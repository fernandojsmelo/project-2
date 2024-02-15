import { useContext } from "react";
import { AppContext, GlobalContext } from "../../contexts/AppContext"

export const H1 = () => {
    const theContext = useContext(GlobalContext);
    const {
      contextState: { title, counter},
    } = theContext;
    return (
      <h1>
        {title} {counter}
      </h1>
    );
  };
 