import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import CoachSay from '../CoachSay/CoachSay';
import AcademyProgram from '../AcademyProgram/AcademyProgram';
import AcademyGallery from '../AcademyGallery/AcademyGallery';

const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <About></About>
            <CoachSay></CoachSay>
            <AcademyProgram></AcademyProgram>
            <AcademyGallery></AcademyGallery>
        </div>
    );
};

export default Home;