import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import log from '../../img/whole.png'
import { FaAngleDown } from 'react-icons/fa';

const Navber = () => {
    
    return (
        <div className=' container-xxl		 mx-auto mt-2'>
            <Navbar expand="lg" className="  mx-5">
               
                    <Navbar.Brand href="#"><img src={log} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className=" mx-auto p-2 my-2 my-lg-0"
                            style={{ maxHeight: '100px' , width: '400px' }} 
                            navbarScroll
                        >
                            <Form className=" d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder= "  Search for your favorite groups in ATG"
                                    className=" me-2 rounded-pill"
                                    aria-label="Search"
                                />



                                <Nav.Link href="#" disabled>
                                    Link
                                </Nav.Link>
                                
                        

                            </Form>
                        </Nav>
                       <Nav
                            className=" my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className=' text-[#2E2E2E]  fw-medium' href="#action1">Create account.<span  className=' text-primary'> Its free! <FaAngleDown></FaAngleDown></span> </Nav.Link>
                          
                            
                          </Nav>
                        

                    </Navbar.Collapse>
               
            </Navbar>
            
        </div>
    );
};

export default Navber;

