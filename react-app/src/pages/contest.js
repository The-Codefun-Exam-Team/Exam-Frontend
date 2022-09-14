import { useParams } from "react-router-dom";
import { Navigationbar } from "../components/navbar";
import { useEffect } from "react";
import { ProblemLs } from "../components/prob_ls";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function ContestPage ()
{
    const {contestId} = useParams()
    
    useEffect(() => {
        console.log(contestId)
      }, [contestId])
    
    return (<>
        <Navigationbar />
        <Container>
            <Row>
                <Col className="col-md-6">
                    <div >
                        <ProblemLs startidx={1} len={8}/>
                    </div>
                </Col>
                <Col className="col-md-6">
                    <div >
                        <ProblemLs startidx={9} len={8}/>
                    </div>
                </Col>
            </Row>
        </Container>
    </>)

}

export default ContestPage ;