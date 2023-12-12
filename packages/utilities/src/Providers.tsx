import { ApolloProvider } from '@utilities/contexts/ApolloContext';
import { AuthProvider } from '@utilities/contexts/AuthContext';
import { UserProvider } from '@utilities/contexts/UserContext';
import { TamaguiProvider } from '@utilities/contexts/TamaguiContext';
import { ModalProvider } from '@utilities/contexts/ModalContext';

import { combineProviders } from '@utilities/functions/combineProviders';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) =>
  combineProviders(
    [
      ApolloProvider,
      AuthProvider,
      UserProvider,
      TamaguiProvider,
      ModalProvider,
    ],
    children
  );

export default Providers;
