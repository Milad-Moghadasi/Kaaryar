import { createContext, useState } from "react";

export const loginContext = createContext([false,false]);

function LoginProvider({children}) {
    const [isLogin , setIsLogin] = useState(true)


    return(
        <loginContext.Provider value={[isLogin , setIsLogin]}>
            {children}
        </loginContext.Provider>
    )
}

export default LoginProvider;
