import { Navigationbar } from "../components/navbar";
import { GroupOptions, PaginationRanking, RankTable } from "../components/ranktable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {useSearchParams} from "react-router-dom"

function RankingPage ()
{
    // eslint-disable-next-line no-unused-vars
    const [queryparam,setqueryparam] = useSearchParams()
    return <>
        <Navigationbar />

        <Container fluid>
            
            
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                    <GroupOptions />
                </Col>
                <Col md={1}></Col>
            </Row>
            
            <Row>
                <Col md={1}  >  
                </Col>
                <Col md={10} style={{color:'blue'}}>
                    <RankTable />
                </Col>
                <Col md={1}></Col>
            </Row>
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                    <PaginationRanking />   
                </Col>
                <Col md={1}></Col>
            </Row>
        </Container>

    </>
}

export default RankingPage