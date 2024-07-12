import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { AxiosRequestConfig, CanceledError } from "axios"


interface FetchRespone<T>{
    count:number;
    results:T[];
}
const useData=<T>(endpoint:string, requestConfig?:AxiosRequestConfig, deps?:any[])=>{
     const [isLoading,setIsLoading]=useState(false)
    const [data,setData]=useState<T[]>([])
    const[error,setError]=useState('')

    useEffect(() => {
        const controller=new AbortController()
        setIsLoading(true)
        apiClient.get<FetchRespone<T>>(endpoint,{signal:controller.signal,...requestConfig})
        .then(res=>{
            setData(res.data.results)
        console.log(res.data.results)
        })
        .catch(err=>{
                if(err instanceof CanceledError) return;
                  setError(err.message)
            })
            .finally(()=>setIsLoading(false))
        
     
    },deps?[...deps]:[])
    return {data,error,isLoading}
}
export default useData