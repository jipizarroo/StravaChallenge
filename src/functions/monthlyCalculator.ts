import { SetActivitiesPayloadTypes } from "../types/Activities"

const monthlyCalculator = (
  activities: SetActivitiesPayloadTypes[],
  property: keyof SetActivitiesPayloadTypes,
): number => {
  if (!activities || activities.length === 0) {
    return 0
  }

  const total = activities.reduce((sum, activity) => {
    return sum + Number(activity[property] || 0)
  }, 0)

  return total
}

export default monthlyCalculator
