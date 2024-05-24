import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {
	const auth = useContext(AuthContext);
	// auth mean AuthContext value (authInfo)
	return auth;
};

export default useAuth;
