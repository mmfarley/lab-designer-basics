
import { include, Model, string, belongsTo } from '@triframe/scribe'
import { Resource } from '@triframe/core'

export class FeedingScheduleItem extends Resource {

    @include(Model)

    @string
    name = ""

    @belongsTo
    pet = null

    @belongsTo
    feedingTime = null

}