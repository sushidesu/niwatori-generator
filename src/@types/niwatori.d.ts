
interface Niwatori {
  place: string
  count: number
  unit: string
  niwatori: string
  whatHappened: string
}

type NiwatoriInput = Record<keyof Niwatori, string>
