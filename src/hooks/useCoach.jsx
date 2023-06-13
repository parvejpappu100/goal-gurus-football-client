import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCoach = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isCoach, isLoading: isCoachLoading } = useQuery({
        queryKey: ["isCoach", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/coach/${user?.email}`);
            return res.data.coach;
        }
    })
    return [isCoach, isCoachLoading]
}

export default useCoach;