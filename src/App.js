import React from 'react'
import { Provider, Route } from '@triframe/designer'
// import { PetList } from './views/PetList'
// import { RegisterPet } from './views/RegisterPet'
// import { PetDetails } from './views/PetDetails'


export default () => (
    <Provider url={process.env.REACT_APP_BACKEND_URL.trimEnd()}>
        {/* <Route exact path="/" component={PetList} /> */}
        {/* <Route exact path="/pets/register" component={RegisterPet} /> */}
        {/* <Route exact path="/pets/:id" component={PetDetails} /> */}
    </Provider>
)