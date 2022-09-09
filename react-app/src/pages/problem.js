import { ConstantEditor, UserEditor } from "../components/ace_editor";
import { Navigationbar } from "../components/navbar";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FunctionBar } from "../components/functionbar";


function ProblemPage()
{
    const mystyle = {
        marginTop: '20px'
    }

    

    

    return (
        <>
            <Navigationbar /> 
            <Container fluid style={mystyle}>
                <Row>
                    <Col md>
                        <FunctionBar />
                    </Col>
                </Row>
                <Row>
                    <Col md>
                        <UserEditor />
                    </Col>
                    <Col md>
                        <ConstantEditor /> 
                    </Col>
                </Row>
            </Container>
        </>
    ) 
}

export default ProblemPage ;