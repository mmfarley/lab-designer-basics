import React from 'react'
import { Provider, Route } from '@triframe/designer'
import { PetList } from './views/PetList'

export default () => (
    <Provider url={process.env.REACT_APP_BACKEND_URL}>
        <Route path="/" component={PetList} />
    </Provider>
)