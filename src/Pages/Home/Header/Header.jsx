import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaUserPlus } from 'react-icons/fa';




const Header = () => {
    return (
        <div className=" className=' container-xl mx-auto mt-5 mb-5">
            <div className=' d-flex justify-content-between'>
                <div className=" d-flex gap-4 align-items-center">
                    <h5 >All Posts(32)
                    </h5>

                    <h5 className="d-xxl-block d-xl-block d-none   text-secondary">Article</h5>
                    <h5 className=" d-xxl-block d-xl-block d-none  text-secondary">Event</h5>
                    <h5 className=" d-xxl-block d-xl-block d-none  text-secondary">Education</h5>
                    <h5 className=" d-xxl-block d-xl-block d-none  text-secondary">Job</h5>
                </div>
                <div className=' d-xxl-block d-xl-block d-none'>
                    <div className=' d-flex gap-3  '>
                        <Dropdown>
                            <Dropdown.Toggle className=' bg-secondary-subtle border border-white text-black fw-medium' variant="" id="dropdown-basic">
                                Write a Post
                            </Dropdown.Toggle>


                        </Dropdown>
                        <Button variant="primary"> <FaUserPlus className=' fs-5'></FaUserPlus>  Join Group</Button>

                    </div>
                </div>

                <div className=' d-lg-none'>
                    <Dropdown>
                        <Dropdown.Toggle className=' bg-secondary-subtle border border-white text-black fw-medium' variant="" id="dropdown-basic">
                            Filter: All
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Article</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Event</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Education</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">job</Dropdown.Item>
                    
                        </Dropdown.Menu>


                    </Dropdown>
                </div>
            </div>

            <hr />
        </div>
    );
};

export default Header;



/*
<div className=" className=' container-xl mx-auto mt-5 mb-5">
            <div className=' d-flex justify-content-between'>
                <div className=" d-flex gap-4 align-items-center">
                    <h5 >All Posts(32)
                    </h5>

                    <h5 className=" text-secondary">Article</h5>
                    <h5 className=" text-secondary">Event</h5>
                    <h5 className=" text-secondary">Education</h5>
                    <h5 className=" text-secondary">Job</h5>
                </div>
                <div className=' d-flex gap-3'>
                    <Dropdown>
                        <Dropdown.Toggle className=' bg-secondary-subtle border border-white text-black fw-medium' variant="" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                       
                    </Dropdown>
                    <Button variant="primary"> <FaUserPlus className=' fs-5'></FaUserPlus>  Join Group</Button>
                </div>
            </div>
            <hr />
        </div>*/