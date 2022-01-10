import { eachDayOfInterval, format, parseISO } from "date-fns"
import { MarkedDateProps, DayProps } from "."
import { getPlatformDate } from "../../utils/getPlatformDate"

import theme from "../../global/styles/theme"

export function generateInterval(start: DayProps, end: DayProps) {
  let intervalo: MarkedDateProps = {}

  eachDayOfInterval({
    start: parseISO(start.dateString),
    end: parseISO(end.dateString),
  }).forEach((item) => {
    const date = format(getPlatformDate(item), "yyyy-MM-dd")

    intervalo = {
      ...intervalo,
      [date]: {
        color:
          start.dateString === date || end.dateString === date
            ? theme.colors.main
            : theme.colors.main_light,
        textColor:
          start.dateString === date || end.dateString === date
            ? theme.colors.shape
            : theme.colors.main,
        startingDay:
          format(getPlatformDate(parseISO(start.dateString)), "yyyy-MM-dd") ===
          date,
        endingDay:
          format(getPlatformDate(parseISO(end.dateString)), "yyyy-MM-dd") ===
          date,
      },
    }
  })

  return intervalo
}
