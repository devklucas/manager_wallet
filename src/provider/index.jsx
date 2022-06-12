import { createContext,useContext, useState } from "react";

export const releasesContext = createContext()
 
export const ReleaseProvider = ({children}) => {
    const [releases,setReleases] = useState([])

    const [filter, setFilter] = useState([])
    
    let total = releases.map(a=>a.type === 'Despesas' ? -(a.value) : +(a.value)).reduce((a,b)=>a+b,0)

    const selectFilter = (state) => {
        let card = []; 
       
        const verification = state === 'all' ? card = releases 
        :
        state === "earn" ? releases.map(item => item.type === "Entradas" ? card.push(item) : null)   
        :
        state === "pay" ? releases.map(item => item.type === "Despesas" ? card.push(item):null) : null
        
       setFilter(card)
    }

    const removeRelease = (id) => {
        const newListRelease = releases.filter((item)=> item.id != id ? item : null)
        setReleases(newListRelease)
        setFilter(newListRelease)
    }
    
    return(
        <releasesContext.Provider value={{releases,setReleases,filter,setFilter,selectFilter,total,removeRelease}}>
            {children}
        </releasesContext.Provider>
    )
}
export const useRelease = () => useContext(releasesContext)