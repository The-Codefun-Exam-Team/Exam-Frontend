import { UserEditor } from "../components/ace_editor";
import { Navigationbar } from "../components/navbar";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FunctionBar, ProblemInfoTable } from "../components/functionbar";
import { useParams } from "react-router-dom";
import { getDebugProblem } from "../api/codefundebug";

function ProblemPage()
{
    const mystyle = {
        marginTop: '20px',
    }

    const {debugProblemId} = useParams()
    const debugProblemData = getDebugProblem(debugProblemId)
    

  
    

    return (


        <>
            <Navigationbar /> 
            <Container fluid style={mystyle}>
                
                <Row>
                    <Col md={4}>
                        <ProblemInfoTable data={debugProblemData} />
                    </Col>
                    <Col md={8}>
                        <FunctionBar data={debugProblemData} />
                        <UserEditor data={debugProblemData}/> 
                    </Col>
                </Row>
            </Container>
        </>
    ) 
}

export default ProblemPage ;