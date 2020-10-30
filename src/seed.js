import { Breed } from './models/Breed'
import { FeedingScheduleItem } from './models/FeedingScheduleItem'
import { FeedingTime } from './models/FeedingTime'
import { Pet } from './models/Pet'

export const seed = async () => {
    let [rizzo] = await Pet.where({ name: 'Rizzo' })
    if (rizzo === undefined) {
        await Pet.truncate()
        await Breed.truncate()
        await FeedingTime.truncate()
        await FeedingScheduleItem.truncate()

        let terrier = await Breed.create({ name: 'Terrier', averageWeight: 18 })
        let goldenRetriever = await Breed.create({ name: 'Golden Retriever', averageWeight: 71 })
        let schnauzer = await Breed.create({ name: 'Schnauzer', averageWeight: 44 })

        let morning = await FeedingTime.create({ label: 'Morning' })
        let afternoon = await FeedingTime.create({ label: 'Afternoon' })
        let evening = await FeedingTime.create({ label: 'Evening' })

        let tess = await Pet.create({
            name: 'Tess',
            age: 10,
            breedId: terrier.id,
            img_url: "https://res.cloudinary.com/jmiles/image/upload/v1585587772/lecture-assets/master/appendix/doggos/tess.jpg"
        })

        let rizzo = await Pet.create({
            name: 'Rizzo',
            age: 2,
            breedId: schnauzer.id,
            img_url: "https://res.cloudinary.com/jmiles/image/upload/v1585587772/lecture-assets/master/appendix/doggos/rizzo.jpg"
        })

        let pip = await Pet.create({
            name: 'Pip',
            age: 5,
            breedId: goldenRetriever.id,
            img_url: "https://res.cloudinary.com/jmiles/image/upload/v1585587772/lecture-assets/master/appendix/doggos/pip.jpg"
        })

        await FeedingScheduleItem.create({ feedingTimeId: morning.id, petId: tess.id })

        await FeedingScheduleItem.create({ feedingTimeId: evening.id, petId: tess.id })

        await FeedingScheduleItem.create({ feedingTimeId: afternoon.id, petId: rizzo.id })

        await FeedingScheduleItem.create({ feedingTimeId: evening.id, petId: rizzo.id })

        await FeedingScheduleItem.create({ feedingTimeId: morning.id, petId: pip.id })

        await FeedingScheduleItem.create({ feedingTimeId: afternoon.id, petId: pip.id })

        await FeedingScheduleItem.create({ feedingTimeId: evening.id, petId: pip.id })

    }
}