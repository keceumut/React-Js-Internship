import { InputGroup,FormControl,Button,Container,Row ,Col} from 'react-bootstrap'
export default function InputFields(){
    return(
        <Container fluid='lg'>           
            <Row className='justify-content-center'>                
                <Col md='5' >
                    <InputGroup className='mb-3' size='lg'>
                        <FormControl placeholder ='Username' ></FormControl>
                    </InputGroup>           
            
                    <InputGroup className='mb-3' size='lg'>
                        <FormControl placeholder='Password'></FormControl>
                    </InputGroup>
                    <Button 
                        variant='primary' 
                        className='lg-button' 
                        size='lg'
                        block
                    >Log-In
                    </Button>
                </Col>                
            </Row>
        </Container>        
    )
}