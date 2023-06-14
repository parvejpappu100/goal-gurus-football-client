import React, { useState } from 'react';
import About from '../About/About';
import CoachSay from '../CoachSay/CoachSay';
import AcademyProgram from '../AcademyProgram/AcademyProgram';
import AcademyGallery from '../AcademyGallery/AcademyGallery';
import PopularCoach from '../PopularCoach/PopularCoach';
import PopularClasses from '../PopularClasses/PopularClasses';
import { Helmet } from 'react-helmet-async';
import Slider from '../Slider/Slider';
import "./Home.css"


const Home = () => {

    const [theme, setTheme] = useState("light");

    const handleThemeToggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className={theme === "light" ? "light" : "dark"}>
            <Helmet>
                <title>Home | GoalGurus Football Academy</title>
            </Helmet>
            <Slider></Slider>
            <div className='text-center my-10'>
                <input type="checkbox" className="toggle toggle-lg" checked={theme === "dark"} onChange={handleThemeToggle} />
            </div>
            <About></About>
            <CoachSay></CoachSay>
            <AcademyProgram theme={theme}></AcademyProgram>
            <AcademyGallery></AcademyGallery>
            <PopularCoach></PopularCoach>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;