import React from 'react'
import { tether, Section, Avatar, TextInput, List, Container, Heading, Button } from '@triframe/designer'


export const PetList = tether(function*({ Api }) {

    const { Pet } = Api;

    const pets = yield Pet.list()

    return (
      null
    )
})  