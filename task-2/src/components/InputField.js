import { useRef, useState } from 'react'
import { InputGroup,FormControl,Button,Container,Row ,Col,Alert,Overlay} from 'react-bootstrap'
import UserInfo from '../data/user-information.json'

export default function InputFields(){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [access,setAccess] = useState(false);
    const [show,setShow] = useState(false);
    const [target,setTarget] = useState('');
    const ref = useRef(null);

    function checkFields(){
        if(username === "" || password==="") return true;
        else return false;        
    }

    function handleLeaving(event){
        console.log(ref);
        if(event.target.value.length <4){
            setTarget(event.target.placeholder);
            setShow(true);
        } 
        else setShow(false);
    }

    function handleClick(){
        setAccess(checkPass());        
    }

    function checkPass(){
        setShow(true);
        setTarget('alert')
        for(let i=0;i<UserInfo.length;i++){
            if(UserInfo[i].username === username && UserInfo[i].password === password){                
                return true;
            }
            else {
                return false;
            }
        }
    }     

    return(
        <Container fluid='lg' >           
            <Row className='justify-content-center'>                           
                <Col md='5'>
                    <InputGroup className='mb-3' size='lg' >
                        <FormControl placeholder ='username' onChange={e=>setUsername(e.target.value)} onBlur={e=> handleLeaving(e)} ref={ref}></FormControl>
                    </InputGroup>  
                   
            
                    <InputGroup className='mb-3' size='lg'>
                        <FormControl placeholder='password' onChange={e=>setPassword(e.target.value)} onBlur={e=> handleLeaving(e)}  ref={ref}></FormControl>
                    </InputGroup>
                    <Button 
                        variant='light' 
                        className='lg-button' 
                        size='lg'
                        disabled ={checkFields()}
                        block
                        onClick={()=>handleClick()}
                    >Log-In
                    </Button>
                    <Alert show={show && target === 'alert' ? true : false} variant={access ? 'success' : 'danger'} onClose={()=>setShow(false)} dismissible >
                        {access ? 'Access Granted' : 'Wrong Password / Username'}
                    </Alert>
                    <Overlay target={ref.current} show={show} placement='bottom'>
                        {(props)=>
                            <div
                            {...props}
                            style={{
                                backgroundColor: '#999999',
                                color: 'black',
                                ...props.style,
                            }}
                            >
                                popup
                            </div>
                        }
                    </Overlay>
                </Col>   

            </Row>
        </Container>        
    )
}