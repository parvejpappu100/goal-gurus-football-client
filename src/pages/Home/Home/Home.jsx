import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import CoachSay from '../CoachSay/CoachSay';
import AcademyProgram from '../AcademyProgram/AcademyProgram';
import AcademyGallery from '../AcademyGallery/AcademyGallery';
import PopularCoach from '../PopularCoach/PopularCoach';
import PopularClasses from '../PopularClasses/PopularClasses';

const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <About></About>
            <CoachSay></CoachSay>
            <AcademyProgram></AcademyProgram>
            <AcademyGallery></AcademyGallery>
            <PopularCoach></PopularCoach>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;