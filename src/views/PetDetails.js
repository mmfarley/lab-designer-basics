import React from 'react'
import { tether, Section, Area, List, Subheading, Container, Heading, Caption, Image } from '@triframe/designer'


export const PetDetails = tether(function* ({ Api, useParams }) {

  const { Pet } = Api;

  const { id } = yield useParams()

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
      <Caption>{pet.breed.name}</Caption>
      <Subheading>Feeding Times:</Subheading>
      {pet.feedingTimes.map(feedingTime => (
        <List.Item
          title={feedingTime.label}
        />
      ))}
    </Container>
  )
})  