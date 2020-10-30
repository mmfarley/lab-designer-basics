import { include, Model, string, belongsTo } from '@triframe/scribe'
import { Resource } from '@triframe/core'
import { hasMany } from '@triframe/scribe/dist/decorators'

export class Pet extends Resource {

    @include(Model)

    @string
    name = ""

    @belongsTo
    breed

    @hasMany
    feedingScheduleItems = []

    @hasMany({ through: pet => pet.feedingScheduleItems.feedingTime })
    feedingTimes

}