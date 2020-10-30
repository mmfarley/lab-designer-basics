import { include, Model, string, float, hasMany } from '@triframe/scribe'
import { Resource } from '@triframe/core'

export class Breed extends Resource {

    @include(Model)

    @string
    name = ""

    @float
    averageWeight

    @hasMany
    pets

}