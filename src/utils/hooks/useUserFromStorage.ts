import React from 'react';
import {
	useAuthContextDispatch,
	useAuthContextState,
} from '../../context/AuthContext';
import SessionStorageUtils from '../storage/SessionStorageUtils';
import { AuthContextActionTypes } from '../../context/AuthReducer';
import parseJwt from '../jwt/parseJwt';

const useUserFromStorage = (): boolean => {
	const [isAdded, setIsAdded] = React.useState(false);
	const dispatch = useAuthContextDispatch();
	const { userToken } = useAuthContextState();
	React.useEffect(() => {
		const userTokenFromStorage = SessionStorageUtils.getAuthToken();
		if (!userToken && userTokenFromStorage) {
			dispatch({
				type: AuthContextActionTypes.SET_STATE,
				userData: parseJwt(userTokenFromStorage),
				userToken: userTokenFromStorage,
			});
		}
		setIsAdded(true);
	}, [dispatch, userToken]);
	return isAdded;
};

export default useUserFromStorage;
