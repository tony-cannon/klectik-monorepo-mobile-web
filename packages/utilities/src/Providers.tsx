import { ApolloProvider } from '@utilities/contexts/ApolloContext';
import { AuthProvider } from '@utilities/contexts/AuthContext';
import { ModalProvider } from '@utilities/contexts/ModalContext';
import { TamaguiProvider } from '@utilities/contexts/TamaguiContext';

import { combineProviders } from '@utilities/functions/combineProviders';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    combineProviders(
        [ApolloProvider, AuthProvider, TamaguiProvider, ModalProvider],
        children
    );

export default Providers;
