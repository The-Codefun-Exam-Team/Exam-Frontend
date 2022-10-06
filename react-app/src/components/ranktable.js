import colors from '../config/color.ts'
import axios from 'axios'
import { useEffect , useState , useCallback} from 'react';
import { getCookie } from '../api/cookie';

const useAxios = ({ url, method, body = null, headers = null }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    
    const fetchData = useCallback(() => {
        axios[method](url, JSON.parse(headers), JSON.parse(body))
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    },[body,method,url,headers]);

    useEffect(() => {
        fetchData();
    }, [method, url, body, headers, fetchData]);

    return { response, error, loading };
};

function RankTable ()
{
    const {response,error,loading} = useAxios(
        {
            url:`https://debug.codefun.vn/api/rankings?group=${0}&page=${1}&limit=${50}`,
            method:'get',
            headers: JSON.stringify({
                Authorization: 'Bearer ' + getCookie('auth') 
            }),
            // body : JSON.stringify({
            //     group: 0,
            //     page: 1,
            //     limit: 50,

            // })
        }
    )
    console.log(response)
    return (
        <div>lorem</div>
    )
}

export {RankTable}