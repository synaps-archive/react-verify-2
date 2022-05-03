import React from 'react'

import Synaps  from '@synaps-io/react-verify'

const App = () => {
  return <Synaps 
  sessionId={'f3243476-cec44c4a-5565ccd6-e7e9622d'} 
  service={'individual'} 
  lang={'en'}
  onReady={() => console.log('component ready')} 
  onFinish={() => console.log('user finish process')}
  color={{ 
    primary:  "212b39",
    secondary:  "ffffff",
     }}
    tier={2086}
  />
}

export default App
