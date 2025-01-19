import { createContext, useContext } from "react";

const CardContext = createContext({
    id: 0,
    setId: (id) => {},
});

export const useCard = () => {
    return useContext(CardContext);
}

export const CardProvider = CardContext.Provider;