import { include, Model, string, belongsTo } from '@triframe/scribe'
import { Resource } from '@triframe/core'
import { float, hasMany } from '@triframe/scribe/dist/decorators'

export class Pet extends Resource {

    @include(Model)

    @string
    name = ""

    @string
    imageUrl = null

    @float
    age = null

    @belongsTo
    breed

    @hasMany
    feedingScheduleItems = []

    @hasMany({ through: pet => pet.feedingScheduleItems.feedingTime })
    feedingTimes

}