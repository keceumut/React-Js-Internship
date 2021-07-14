import { useState } from 'react'
import { InputGroup,FormControl,Button,Container,Row ,Col,Alert} from 'react-bootstrap'
import UserInfo from '../data/user-information.json'

export default function InputFields(){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [access,setAccess] = useState(false);
    const [show,setShow] = useState(false);
    const [alrClr,setalrClr] = useState('');
    const [alrMsg,setalrMsg] =useState('');
    

    function checkFields(){
        if(username === "" || password==="") return true;
        else return false;        
    }

    function handleLeaving(event){

        if(event.target.value.length <4){
            setShow(true);
            setalrClr('warning');
            setalrMsg('You need to enter at least 3 characters for Username/Password')
        } 
        else setShow(false);

    }

    function handleClick(){
        setAccess(checkPass());        
    }

    function checkPass(){
        setShow(true);

        for(let i=0;i<UserInfo.length;i++){

            if(UserInfo[i].username === username && UserInfo[i].password === password){
                setalrClr('success');
                setalrMsg('Access Granted')                
                return true;                
            }            
            else {
                setalrClr('danger');
                setalrMsg('Wrong Password / Username');                
            }  

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
                        onClick={()=>handleClick()}
                    >Log-In
                    </Button>
                    <Alert show={show} variant={alrClr} onClose={()=>setShow(false)} dismissible >
                        {alrMsg}
                    </Alert>                    
                </Col>   

            </Row>
        </Container>        
    )
}