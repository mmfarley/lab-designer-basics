import { include, Model, string, hasMany } from '@triframe/scribe'
import { Resource } from '@triframe/core'

export class FeedingTime extends Resource {

    @include(Model)

    @string
    label = ""

    @hasMany
    feedingScheduleItems

    @hasMany({ through: feedingTime => feedingTime.feedingScheduleItems.pet })
    pets = []

}