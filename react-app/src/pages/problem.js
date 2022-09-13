import { ConstantEditor, UserEditor } from "../components/ace_editor";
import { Navigationbar } from "../components/navbar";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FunctionBar } from "../components/functionbar";
import { useParams } from "react-router-dom";
import { getDebugProblem } from "../api/codefundebug";
import { SubmitBtn } from "../components/submit_btn.js"

function ProblemPage()
{
    const mystyle = {
        marginTop: '20px'
    }

    const {debugProblemId} = useParams()
    const debugProblemData = getDebugProblem(debugProblemId)
    

  
    

    return (


        <>
            <Navigationbar /> 
            <Container fluid style={mystyle}>
                <Row>
                    <Col md>
                        <FunctionBar data={debugProblemData}/>
                    </Col>
                </Row>
                <Row>
                    <Col md>
                        <ConstantEditor data={debugProblemData}/>
                    </Col>
                    <Col md>
                        <UserEditor data={debugProblemData}/> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SubmitBtn md/>
                    </Col>
                </Row>
            </Container>
        </>
    ) 
}

export default ProblemPage ;