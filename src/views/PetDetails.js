import React from 'react'
import { tether, Section, TextInput, List, Container, Heading, Button } from '@triframe/designer'


export const PetDetails = tether(function*({ Api }) {

    const { Pet } = Api;

    const pet = yield Pet.read(1)

    return (
      null
    )
})  