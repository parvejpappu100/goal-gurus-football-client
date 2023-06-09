import React from 'react';

const About = () => {
    return (
        <div className='lg:container mx-auto my-32'>
            <h3 className='text-3xl flex justify-center'>Total Europe Football <br /> Immersion.</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 px-4 lg:px-0'>
                {/* TODO: change lorem details */}
                <div>
                    <img  src="https://i.ibb.co/mRKCvwB/Ab.png" alt="" />
                    <h4 className='text-2xl my-5'>World class academy coaches and player development team</h4>
                    <p>Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna aliqua lacus vitae congue</p>
                </div>
                <div>
                    <img  src="https://i.ibb.co/WgF0F1t/About2.png" alt="" />
                    <h4 className='text-2xl my-5'>World class / elite <br /> competition</h4>
                    <p>Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna aliqua lacus vitae congue</p>
                </div>
                <div>
                    <img  src="https://i.ibb.co/VDm5XDR/About3.png" alt="" />
                    <h4 className='text-2xl my-5'>Immersion with a Liga Europe Academy team</h4>
                    <p>Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna aliqua lacus vitae congue</p>
                </div>
                <div>
                    <img  src="https://i.ibb.co/Zz5YXpQ/About4.png" alt="" />
                    <h4 className='text-2xl my-5'>World class match, training and learning ecperiences</h4>
                    <p>Lorem ipsum dolor consectetur adipiscing tempor labore dolore magna aliqua lacus vitae congue</p>
                </div>
            </div>
        </div>
    );
};

export default About;