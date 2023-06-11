import { useQuery } from 'react-query'
import useAuth from './useAuth';


const useCart = () => {
    const {user} = useAuth();

}

export default useCart;