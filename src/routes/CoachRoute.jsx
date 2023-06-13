import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useCoach from '../hooks/useCoach';

const CoachRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [isCoach, isCoachLoading] = useCoach();

    if (loading || isCoachLoading) {
        return (
            <div className='text-center py-24'>
                <progress className="progress w-56"></progress>
            </div>
        )
    }

    if (user && isCoach) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default CoachRoute;