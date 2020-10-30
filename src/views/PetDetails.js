import React from 'react'
import { tether, Section, Area, List, Subheading, Container, Heading, Caption, Image } from '@triframe/designer'


export const PetDetails = tether(function* ({ Api }) {

  const { Pet } = Api;

  const { id } = yield ______() // <-- 1. What method can we call here to get params from the path?

  const pet = yield Pet.read(id, `
      name,
      imageUrl,
      breed {
        name
      },
      feedingTimes {
        label
      }
  `)

  return (
    <Container>
      <Heading>{pet.name}</Heading>
      {/* 2. Render a caption with the name of the pet's breed here */}
      <Subheading>Feeding Times:</Subheading>
      {/* 3. Loop over all of the pet's feeding times here */}
        <List.Item
          title={null /* 4. Put the feeding time's label here */}
        />
      {/* 3. (end the loop here) */}
    </Container>
  )
})  