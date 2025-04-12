import { useContext } from 'react';
import { UserContext } from '../auth/contexts/User.Context';
import { UserProvider } from '../auth/contexts/User.Provider';
import { AppRoutes } from '../routes/AppRoutes';

export const EventApp = () => {

  const {user, setUser} = useContext(UserContext);
  return (
      <UserProvider>
        <AppRoutes></AppRoutes>
      </UserProvider>
  );
}

