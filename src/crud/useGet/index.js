import { useQuery } from "@tanstack/react-query";
import { api, queryBuilder } from "services";
import { signOut } from "store/auth";

const useGet = ({url, queryKey, params, onSuccess=()=>{}, onError=()=>{}}) => {
    
    const data = useQuery({
        queryKey:[...queryKey, params, url],
        queryFn:()=>{
            return api.get(queryBuilder(url, params));
        },
        onSuccess:(data)=>onSuccess(data),
        onError:(error)=>{
            // if (error.response.status === 401) {
            //     signOut()
            // }
            return onError(error);
        }
    })

    return data
}

export default useGet;