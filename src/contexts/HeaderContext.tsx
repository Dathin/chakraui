import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

interface HeaderProviderProps {
    children: React.ReactNode
}

interface HeaderContextData {
    backUrl?: string;
    setBackUrl: Dispatch<SetStateAction<string | undefined>>
}

const HeaderContext = createContext({} as HeaderContextData)

export function HeaderProvider({children}: HeaderProviderProps){

    const [backUrl, setBackUrl] = useState<string | undefined>();
    
    return (
        <HeaderContext.Provider value={{backUrl, setBackUrl}}>
            {children}
        </HeaderContext.Provider>
    )
}

export const useHeaderContext = () => useContext(HeaderContext);