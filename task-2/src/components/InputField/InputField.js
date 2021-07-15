import { useState} from 'react'
import { InputGroup,FormControl,Button,Container,Row ,Col,Alert,Overlay} from 'react-bootstrap'
import UserInfo from '../../data/user-information.json'
import './InputField.css'

export default function InputFields(){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [access,setAccess] = useState(false);
    const [showAlert,setShowAlert] = useState(false);
    const [showPopper,setShowPopper] = useState(false);
    const [targetRef,setTargetRef] = useState(null);

    function checkFields(){

        if(username === "" || password==="") return true;
        else return false;    

    }

    function handleLeaving(event){  

        if(event.target.value.length <3){
            setShowPopper(true);
        } 
        else setShowPopper(false);

        setTargetRef(event.target);
    }

    function checkPass(){
        setShowAlert(true);
        for(let i=0;i<UserInfo.length;i++){

            if(UserInfo[i].username === username && UserInfo[i].password === password)return true;

        }
        return false;
    }    
    
    return(
        <Container fluid='lg'>           
            <Row className='justify-content-center'>                           
                <Col md='5'>
                    <InputGroup className='mb-3' size='lg' >
                        <FormControl placeholder ='username' onChange={e=>setUsername(e.target.value)} onBlur={e=> handleLeaving(e)}></FormControl>
                    </InputGroup>                                
                    <InputGroup className='mb-3' size='lg'>
                        <FormControl placeholder='password' onChange={e=>setPassword(e.target.value)} onBlur={e=> handleLeaving(e)}></FormControl>
                    </InputGroup>
                    <Button 
                        variant='light' 
                        className='lg-button' 
                        size='lg'
                        disabled ={checkFields()}
                        block
                        onClick={()=>setAccess(checkPass)}
                    >Log-In
                    </Button>                    
                    <Alert show={showAlert} variant={access ? 'success' : 'danger'} onClose={()=>setShowAlert(false)} dismissible >
                        {access ? 'Access granted' : 'Wrong Password/Username'}
                    </Alert>                    
                </Col>
            </Row>
            <Overlay target={targetRef} show={showPopper} placement='bottom'>
                {({ placement, arrowProps, show, popper, ...props }) => (
                    <div
                    className='popbox'
                    {...props}                        
                    >
                        You need to enter at least 3 characters
                    </div>
                    )}
            </Overlay>  
        </Container>         
    )
}