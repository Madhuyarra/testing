import './App.css';

import {Amplify} from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// Configure Amplify in index file or root file
Amplify.configure({
  Auth: {
    region: 'REGION',
    userPoolId: 'eu-north-1_NFqKInyU5',
    userPoolWebClientId: '2jmtd6iek27ojvjhjljqtccdri'
  }
})

function App() {
  return (
      <Authenticator>
        {({ signOut, user }) => (
            <div>
              <p>Welcome {user.username}</p>
              <button onClick={signOut}>Sign out</button>
            </div>
        )}
      </Authenticator>
  );
}

export default App;