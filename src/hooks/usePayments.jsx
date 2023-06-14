import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePayments = () => {

    const { user, loading } = useAuth();

    const [axiosSecure] = useAxiosSecure();

    const { refetch : paymentsRefetch, data: payments = [], } = useQuery({
        queryKey: ["payments", user?.email],
        enabled: !loading,

        queryFn: async () => {
            const response = await axiosSecure(`/payments?email=${user?.email}`)
            return response.data;
        }
    })

    return [payments, paymentsRefetch]

}

export default usePayments;