import { Navigationbar } from "../components/navbar";
import { PaginationRanking, RankTable } from "../components/ranktable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


function RankingPage ()
{
    return <>
        <Navigationbar />
        <Container fluid>
            <Row>
                <Col md={1}  >
                    
                    
                </Col>
                <Col md={10} style={{color:'blue'}}>
                    <RankTable />
                </Col>
                <Col md={1}></Col>
            </Row>
            <Row>
                <Col md={12}>
                    <PaginationRanking />   
                </Col>
            </Row>
        </Container>

    </>
}

export default RankingPage