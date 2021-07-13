import { useState } from 'react'
import { InputGroup,FormControl,Button,Container,Row ,Col} from 'react-bootstrap'
export default function InputFields(){

    const [username,setUsername] = useState(null);
    const [password,setPassword] = useState(null);

    function checkFields(){
        if(username == null || password==null) return true;
        else return false;
    }

    return(
        <Container fluid='lg'>           
            <Row className='justify-content-center'>                
                <Col md='5' >
                    <InputGroup className='mb-3' size='lg'>
                        <FormControl placeholder ='Username' onChange={e=>setUsername(e.target.value)}></FormControl>
                    </InputGroup>           
            
                    <InputGroup className='mb-3' size='lg'>
                        <FormControl placeholder='Password' onChange={e=>setPassword(e.target.value)}></FormControl>
                    </InputGroup>
                    <Button 
                        variant='primary' 
                        className='lg-button' 
                        size='lg'
                        disabled ={checkFields()}
                        block
                        onClick={()=>console.log(username,password)}
                    >Log-In
                    </Button>
                </Col>                
            </Row>
        </Container>        
    )
}