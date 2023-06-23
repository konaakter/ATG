

import card from '../../../img/car2.png'
import card2 from '../../../img/card.png'
import card3 from '../../../img/card1.png'


import artical from '../../../img/artical.png'
import profile from '../../../img/prifile.png'
import education from '../../../img/education.png'
import job from '../../../img/job.png'

import profile1 from '../../../img/profile1.png'
import profile3 from '../../../img/profile3.png'
import profile4 from '../../../img/profile4.png'

import meet from '../../../img/meet.png'




import { FaCalendarAlt, FaExclamation, FaEye, FaMapMarkerAlt, FaPen, FaShareAlt } from 'react-icons/fa';






const Caard = () => {
    return (
        <div className=" container-xl mx-auto mt-2">
            <div className=' row'>


                <div className=' col-sm-8 md:col-sm-'>
                    <div className='   border border-light-subtle rounded  mb-4'>
                        <img className=' w-100' src={card} alt="" />

                        <div className=' p-4  mt-3'>
                            <img src={artical} alt="" />
                            <h4 className=' pt-2  mt-2'>What if famous brands had regular fonts? Meet RegulaBrands!</h4>
                            <p className=' mt-2'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className=' d-flex justify-content-between  align-items-center'>
                                <div className=' d-flex gap-2 align-items-center'>
                                    <img src={profile} alt="" />
                                    <p className=' mt-2 fw-medium fs-5'>Sarthak Kamra</p>
                                </div>
                                <div className=' d-flex gap-2 align-items-center'>
                                    <p> <FaEye></FaEye> 1.4k views</p>
                                    <p className='bg-secondary-subtle py-2 px-3'><FaShareAlt></FaShareAlt></p>
                                </div>
                            </div>
                        </div>




                    </div>
                    <div className='   border border-light-subtle rounded  mb-4'>
                        <img className=' w-100' src={card2} alt="" />

                        <div className=' p-4  mt-3'>
                            <img src={education} alt="" />
                            <h4 className=' pt-2  mt-2'>Tax Benefits for Investment under National Pension Scheme launched by Government</h4>
                            <p className=' mt-2'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className=' d-flex justify-content-between  align-items-center'>
                                <div className=' d-flex gap-2 align-items-center'>
                                    <img src={profile1} alt="" />
                                    <p className=' mt-2 fw-medium fs-5'>Sarthak Kamra</p>
                                </div>
                                <div className=' d-flex gap-2 align-items-center'>
                                    <p> <FaEye></FaEye> 1.4k views</p>
                                    <p className='bg-secondary-subtle py-2 px-3'><FaShareAlt></FaShareAlt></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='   border border-light-subtle rounded  mb-4'>
                        <img className=' w-100' src={card3} alt="" />

                        <div className=' p-4  mt-3'>
                            <img src={meet} alt="" />
                            <h4 className=' pt-2  mt-2'>Finance & Investment Elite Social Mixer @Lujiazui</h4>
                            <div className=' d-flex gap-5  align-items-center'>
                                <p> < FaCalendarAlt></FaCalendarAlt> Fri, 12 Oct, 2018</p>
                                <p><FaMapMarkerAlt  ></FaMapMarkerAlt>  Ahmedabad, India</p>
                            </div>

                            <button style={{ color:'#E56135'}} className=' bg-white mb-5 mt-2 w-100  border border-light-subtle rounded py-2'> Visit Website</button>
                            <div className=' d-flex justify-content-between  align-items-center'>
                                <div className=' d-flex gap-2 align-items-center'>
                                    <img src={profile3} alt="" />
                                    <p className=' mt-2 fw-medium fs-5'>Sarthak Kamra</p>
                                </div>
                                <div className=' d-flex gap-2 align-items-center'>
                                    <p> <FaEye></FaEye> 1.4k views</p>
                                    <p className='bg-secondary-subtle py-2 px-3'><FaShareAlt></FaShareAlt></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=' p-4   border border-light-subtle rounded  mb-4'>

                        <img className=' mb-3' src={job} alt="" />
                        <h4 className=' mb-3'>Software Developer</h4>
                        <div className=' d-flex gap-5 align-items-center  mb-2'>
                            <p> < FaCalendarAlt></FaCalendarAlt> Innovaccer Analytics Private Ltd.</p>
                            <p><FaMapMarkerAlt  ></FaMapMarkerAlt>  Noida, India</p>
                        </div>
                        <button style={{ color:'#02B875'}} className=' bg-white mb-5 mt-2 w-100  border border-light-subtle rounded py-2'> Apply on Timesjobs</button>

                        <div className=' d-flex justify-content-between align-items-center'>
                            <div className=' d-flex gap-2 align-items-center'>
                                <img src={profile4} alt="" />
                                <p className=' mt-2 fw-medium fs-5'>Sarthak Kamra</p>
                            </div>
                            <div className=' d-flex gap-2 align-items-center'>
                                <p> <FaEye></FaEye> 1.4k views</p>
                                <p className='bg-secondary-subtle py-2 px-3'><FaShareAlt></FaShareAlt></p>
                            </div>
                        </div>
                    </div>


                </div>
























                <div className=' col-sm-3'>

                    <div>
                        <div className=' d-flex justify-content-between '>
                            <p><FaMapMarkerAlt  ></FaMapMarkerAlt>  Noida, India</p>
                            <FaPen className=' fs-5'></FaPen>
                        </div>
                        <hr />
                        <div className=' d-flex gap-2'>
                            <p className=' text-secondary '> <FaExclamation className=' rounded-circle border border-secondary p-1  fs-2 mt-2'></FaExclamation></p>
                            <p className='text-secondary'> Your location will help us serve better and extend a personalised experience.</p>
                        </div>

                    </div>

                </div>

            </div>


        </div >


    );
};

export default Caard;