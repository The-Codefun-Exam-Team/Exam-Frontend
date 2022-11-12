import colors from '../config/color.ts'
import axios from 'axios'
import { useEffect , useState , useCallback, useMemo} from 'react';
import Table from 'react-bootstrap/Table'
import { useSearchParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const useAxios = ({ url, method, body = null, headers = null}) => {
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
        window.scroll(0,0)
    }, [method, url, body, headers, fetchData]);

    return { response, error, loading };
};

function RankTable ()
{
    // eslint-disable-next-line no-unused-vars
    const [queryparam,setqueryparam] = useSearchParams();
    const group = queryparam.get("group")
    const page = queryparam.get("page")
    
    // eslint-disable-next-line no-unused-vars
    const {response,error,loading} = useAxios(
        {
            url:`https://debug.codefun.vn/api/rankings?group=${group}&pageid=${page}&limit=${50}`,
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
        return <></>
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
    
    const page = Number(queryparam.get("page"))
    const group = queryparam.get('group')

    const __onClick = useCallback((pagenum) =>
    {
        if ( pagenum === 0 || pagenum === page)
        {
            return
        }
        setqueryparam({page:pagenum,group:group},{replace:true})
        
    },[group,page,setqueryparam])

    const buttonStyle = {
        fontSize: '18px',
        color: 'white',
        margin: '5px 0px 0px 0px',
        backgroundColor: `${colors[4]}`,
        border: 'none',
        padding: '4px 6px',
        borderRadius: '5px'
    }

    return<>
        
        <div className='d-flex justify-content-between'>
            <button style={buttonStyle} onClick={()=>__onClick(page-1)}>
                Previous page
            </button>
            <button style={buttonStyle} onClick={()=>__onClick(page+1)} >
                Next page
            </button>
        </div>
    </>
}

function GroupOptions ()
{
    // eslint-disable-next-line no-unused-vars
    const {response,error,loading} = useAxios({
        url: 'https://codefun.vn/api/groups',
        method: 'get',
    })
    
    const [queryparam,setqueryparam] = useSearchParams()
    // eslint-disable-next-line no-unused-vars
    const page = Number(queryparam.get("page"))
    const group = queryparam.get('group')
    
    const getName = useCallback(()=>{
        var low = 0 
        var hi = response.data.length

        while(low<hi-1){
            var mid = Math.round((low+hi)/2-0.5)
            if ( Number(group) >= Number(response.data[mid].id) )
            {
                low = mid 
            }
            else
            {
                hi = mid 
            }
        }
        return response.data[low].name 
    },[response,group])



    const responseList = useMemo(()=>{
        if ( loading ) return <></>
        var x = [...response.data]
        x.push({name:"Global",id:0})
        return x.map(item=>{
            return <Dropdown.Item onClick={()=>{setqueryparam({page:1,group:item.id},{replace:true})}} key={item.id}>
                {item.name}
            </Dropdown.Item>
            }
        ).reverse()
    },[response,loading,setqueryparam])
    
    if ( loading ) {
        return <></>
    }
    
    const ctnStyle = {
        marginBottom: '10px',
        marginTop:'25px',
        

    }


    return (
        <>
            <div className='d-flex justify-content-center' style={ctnStyle} >
                <Dropdown style={{width:'100%'}} as={ButtonGroup} >
                    <div  style={{width:"100%",backgroundColor:`${colors[4]}`,borderRadius:'5px'}}>
                        <div className='d-flex justify-content-between'>
                            <div></div>
                            <Button style={{fontSize:'20px'}}>{(group==="0") ? "Global": getName()}</Button>
                            <Dropdown.Toggle split id="dropdown-custom-1" style={{borderLeft:'2px solid white',borderRadius:'0px 5px 5px 0px',width:'40px'} }></Dropdown.Toggle>
                        </div>
                        
                    </div>
                    
                    <Dropdown.Menu  className='d-flex flex-column' style={{width:'100%',backgroundColor:`${colors[2]}`,display:'inherit',height:'400px',overflowY:'auto'}}>
                        {responseList}
                    </Dropdown.Menu>
                    
                    
                </Dropdown>
            </div>
        </>
    )
} 


export {RankTable,PaginationRanking,GroupOptions}