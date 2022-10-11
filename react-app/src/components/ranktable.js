import colors from '../config/color.ts'
import axios from 'axios'
import { useEffect , useState , useCallback} from 'react';
import Table from 'react-bootstrap/Table'
import { getCookie } from '../api/cookie';
import { useSearchParams , useParams, useNavigate, useLocation} from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination'
import Stack from 'react-bootstrap/Stack'
import {Navigate} from 'react-router-dom'

const useAxios = ({ url, method, body = null, headers = null}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    const location = useLocation()

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
    }, [method, url, body, headers, fetchData,location]);

    return { response, error, loading };
};

function RankTable ()
{
    const [queryparam,setqueryparam] = useSearchParams();
    const location = useLocation()
    const group = queryparam.get("group")
    const page = queryparam.get("page")
    
    
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
    
    const handledResponse = (response!==null) ? response.map(function(val,index){
        return <tr key={index}>
            <td style={(index===response.length-1 ? rmborder : {})}>{index+1+(page-1)*50}</td>
            <td style={(index===response.length-1 ? rmborder : {})}>{val.username}</td>
            <td style={(index===response.length-1 ? rmborder : {})}>{val.name.slice(0,25)+((val.name.length>25) ? "..." : "")}</td>
            <td style={(index===response.length-1 ? rmborder : {})}>{Math.round(val.points*100)/100}</td>
            <td style={(index===response.length-1 ? rmborder : {})}>{val.rank}</td>
        </tr>
        
    }) : [<tr key={0}><td colSpan={5} style={{textAlign:'center',...rmborder}}>End of user list</td></tr>]

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
    
    const [queryparam,setqueryparam] = useSearchParams()
    const navigate = useNavigate()
    var page = Number(queryparam.get("page"))
    var lastpage = 20
    var group = queryparam.get('group')
    const __onClick = (pagenum,e) =>
    {
        e.target.blur()
        if ( pagenum === 0 || pagenum === lastpage+1 || pagenum === page)
        {
            return
        }
        setqueryparam({page:pagenum,group:group},{replace:true})
        
    }



    return<>
    <Stack direction="horizontal">
        <Pagination bsPrefix="pagination" className="mx-auto">
            <Pagination.First  onClick={(e)=>__onClick(1,e)} />
            <Pagination.Prev onClick={(e)=>__onClick(page-1,e)}/>
            {(page-5>0) ? <Pagination.Item onClick={(e)=>__onClick(page-5,e)}>{page-5}</Pagination.Item> : <></>}
            {(page===4||page===5) ? <Pagination.Item onClick={(e)=>__onClick(1,e)}>1</Pagination.Item> : <></>}
            {(page===5) ? <Pagination.Item onClick={(e)=>__onClick(2,e)}>2</Pagination.Item> : <></>}
            {(page>=5) ? <Pagination.Ellipsis disabled/> : <></>}

            {(page-2>0) ? <Pagination.Item onClick={(e)=>__onClick(page-2,e)}>{page-2}</Pagination.Item> : <></>}
            {(page-1>0) ? <Pagination.Item onClick={(e)=>__onClick(page-1,e)}>{page-1}</Pagination.Item> : <></>}
            <Pagination.Item active>{page}</Pagination.Item>
            {(page+1<=lastpage) ? <Pagination.Item onClick={(e)=>__onClick(page+1,e)}>{page+1}</Pagination.Item> : <></>}
            {(page+2<=lastpage) ? <Pagination.Item onClick={(e)=>__onClick(page+2,e)}>{page+2}</Pagination.Item> : <></>}

            {(page<=lastpage-4) ? <Pagination.Ellipsis disabled /> : <></>}
            {(page+4<lastpage) ? <Pagination.Item onClick={(e)=>__onClick(page+4,e)}>{page+4}</Pagination.Item> : <></>}
            {(page===lastpage-4) ? <Pagination.Item onClick={(e)=>__onClick(lastpage-1,e)}>{lastpage-1}</Pagination.Item> : <></>}
            {(page===lastpage-4||page===lastpage-3) ? <Pagination.Item onClick={(e)=>__onClick(lastpage,e)}>{lastpage}</Pagination.Item> : <></>}
            <Pagination.Next onClick={(e)=>__onClick(page+1,e)} />
            <Pagination.Last onClick={(e)=>__onClick(lastpage,e)} />
        </Pagination>
    </Stack>
    </>
}

export {RankTable,PaginationRanking}