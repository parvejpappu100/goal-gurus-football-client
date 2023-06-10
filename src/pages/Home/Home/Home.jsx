import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import CoachSay from '../CoachSay/CoachSay';
import AcademyProgram from '../AcademyProgram/AcademyProgram';

const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <About></About>
            <CoachSay></CoachSay>
            <AcademyProgram></AcademyProgram>
        </div>
    );
};

export default Home;