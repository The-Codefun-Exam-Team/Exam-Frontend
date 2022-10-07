import colors from '../config/color.ts'
import axios from 'axios'
import { useEffect , useState , useCallback} from 'react';
import Table from 'react-bootstrap/Table'
import { getCookie } from '../api/cookie';
import { useSearchParams , useParams} from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination'
import Stack from 'react-bootstrap/Stack'

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
    const {param} = useParams()
    const [queryparam,setqueryparam] = useSearchParams(param)
    var group = queryparam.get("group")
    var page = queryparam.get("page")

    
    const {response,error,loading} = useAxios(
        {
            url:`https://debug.codefun.vn/dev/api/rankings?group=${group}&pageid=${page}&limit=${50}`,
            method:'get',
            // headers: JSON.stringify({
            //     Authorization: 'Bearer ' + getCookie('auth') 
            // }),
            // body : JSON.stringify({
            //     group: 0,
            //     page: 1,
            //     limit: 50,

            // })
        }
    )
    if ( loading )
    {
        return <div></div>
    }

    const rmborder = {
        borderBottom: 'solid 0px white'
    }
    const handledResponse = response.map(function(val,index){
        return <tr key={index}>
            <td style={(index===response.length-1 ? rmborder : {})}>{index+1+(page-1)*50}</td>
            <td style={(index===response.length-1 ? rmborder : {})}>{val.username}</td>
            <td style={(index===response.length-1 ? rmborder : {})}>{val.name.slice(0,18)+((val.name.length>18) ? "..." : "")}</td>
            <td style={(index===response.length-1 ? rmborder : {})}>{Math.round(val.points*100)/100}</td>
            <td style={(index===response.length-1 ? rmborder : {})}>{val.rank}</td>
        </tr>
        
    })

    const tableStyle = {
        backgroundColor: `${colors[4]}`,
        borderColor: `${colors[5]}`,
        color: `${colors[0]}`,
        marginTop: '45px',
        borderRadius: '5px',
        

    }
    
    return (
        <Table style={tableStyle}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Points</th>
                    <th>Ranking</th>
                </tr>
            </thead>
            <tbody>
                {handledResponse}
            </tbody>
            
        </Table>
    )
}

function PaginationRanking()
{
    return<>
    <Stack direction="horizontal">
        <Pagination bsPrefix="pagination" className="mx-auto">
            <Pagination.First /> 
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis disabled/>

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>

            <Pagination.Ellipsis disabled />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    </Stack>
    </>
}

export {RankTable,PaginationRanking}