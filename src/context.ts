import { createContext, useContext as __useContext } from 'react';


export type ContextData = {
    map?: number;
    section?: number;
};

export type ContextType = ContextData & {
    update: (values: ContextData) => void;
};

export const Context = createContext<ContextType>({} as ContextType);
export const useContext = () => __useContext(Context);
