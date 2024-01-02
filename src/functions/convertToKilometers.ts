export function convertToKilometers(distance: number): string {
  const kilometers = distance / 1000 // Convert meters to kilometers
  return `${kilometers.toFixed(2)} KM`
}
