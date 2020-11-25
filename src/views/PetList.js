import React from 'react'
import { tether, Section, Avatar, Area, TextInput, Container, Heading, Button, Redirect, List } from '@triframe/designer'
import { BubbleButton } from '@triframe/designer/dist/Button';
import { ToggleButton } from '@triframe/designer/dist/paper';


export const PetList = tether(function* ({ Api }) {

    const { Pet } = Api;

    // 1. What method can we put here to get a list of pets?:
    const pets = yield Pet.list(`
        *,
        breed {
            name
        }
    `)

    // 2. What Component should wrap a page?:
    return (
        <Container>
            <Heading>Pet List</Heading>
            {pets.map(pet => (
                <List.Item
                    left={ /* <--3.  What prop should be passed for list icons? */ () => <Avatar.Image size={40} source={pet.imageUrl} />}
                    title={pet.name}
                    description={pet.breed.name /* <-- 4. How could we pass the name of the pet's breed here? */}
                    onPress={() => Redirect(`/pets/${pet.id}`)  /* <-- 5. What function can be used to send the user to another route? */} 
                    right={() => <ToggleButton icon="delete" onPress={() => pet.delete()} />}
                />
            ))}
            <Area alignX="right" alignY="bottom"> {/* <-- 6. How could we make the Area be in the bottom left of the screen? */}
                <BubbleButton 
                    icon="plus"
                    onPress={() => Redirect('/pets/register') /* <-- 6. What function can be used to send the user to another route? */ }
                />
            </Area>
        </Container>
    )
})  