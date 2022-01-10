import React, { useState } from "react"

import {
  Calendar as CustomCalendar,
  LocaleConfig,
  CalendarProps,
} from "react-native-calendars"

import { Feather } from "@expo/vector-icons"
import { useTheme } from "styled-components"
import { ptBR } from "./localeConfig"

import { generateInterval } from "./generateInterval"

LocaleConfig.locales["pt-br"] = ptBR

LocaleConfig.defaultLocale = "pt-br"

interface MarkedDateProps {
  [data: string]: {
    color: string
    textColor: string
    disabled?: boolean
    disableTouchEvent?: boolean
    startingDay: boolean
    endingDay: boolean
  }
}

interface DateData {
  year: number
  month: number
  day: number
  timestamp: number
  dateString: string
}

interface DayProps {
  day: number
  month: number
  year: number
  timestamp: number
  dateString: string
}

const Calendar = ({ onDayPress, markedDates }: CalendarProps) => {
  const theme = useTheme()
  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={theme.colors.text}
          name={direction === "left" ? "chevron-left" : "chevron-right"}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,

        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textMonthFontFamily: theme.fonts.secondary_600,

        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,

        textDayHeaderFontSize: 10,

        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={String(new Date())}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  )
}

export { Calendar, DayProps, MarkedDateProps, generateInterval }
