import React from 'react'
import { tether, Section, Avatar, Area, TextInput, List, Container, Heading, Button } from '@triframe/designer'
import { BubbleButton } from '@triframe/designer/dist/Button';
import { ToggleButton } from '@triframe/designer/dist/paper';


export const PetList = tether(function* ({ Api, redirect }) {

    const { Pet } = Api;

    // What method can we put here to get a list of pets?:
    const pets = yield Pet.list(`
        *,
        breed {
            name
        }
    `)

    return (
        <Container>
            <Heading>Pet List</Heading>
            {pets.map(pet => (
                <List.Item
                    left={() => <Avatar.Image size={40} source={pet.imageUrl} />}
                    title={pet.name}
                    description={pet.breed.name}
                    onPress={() => redirect(`/pets/${pet.id}`)}
                    right={() => <ToggleButton icon="delete" onPress={() => pet.delete()} />}
                />
            ))}
            <Area alignX="right" alignY="bottom">
                <BubbleButton 
                    icon="plus"
                    onPress={() => redirect('/pets/register')}
                />
            </Area>
        </Container>
    )
})  