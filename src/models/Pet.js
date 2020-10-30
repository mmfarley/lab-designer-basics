import { include, Model, string, belongsTo } from '@triframe/scribe'
import { Resource } from '@triframe/core'

export class Pet extends Resource {

    @include(Model)

    @string
    name = ""

}