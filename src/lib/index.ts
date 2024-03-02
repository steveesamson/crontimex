import Helpers, { Days } from "./helpers.js";
import EveryTime from "./EveryTime.js";

// type MinutesOfTheHour = number | number[];
// type HoursOfTheDay = number | number[];

/**
 * Cron Time Object
 */
export const CronTimex = {
    /**
     * Every nth Time
     * @return {EveryTime}
     * @param interval
     */
    every(interval: number): EveryTime {
        return new EveryTime(interval);
    },

    /**
     * Every Minute
     */
    everyMinute(): string {
        return Helpers.minute();
    },

    /**
     * Every Hour
     */
    everyHour(): string {
        return Helpers.hour();
    },

    /**
     * Every Hour At
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour.
     * @returns {string}
     */
    everyHourAt(minutesOfTheHour: number | number[]): string {
        return `${minutesOfTheHour} * * * *`;
    },

    /**
     * Every Day
     */
    everyDay(): string {
        return Helpers.day();
    },

    /**
     * Every Day At
     * @param {number|number[]} hoursOfTheDay - Hours of the day
     * @param {number|number[]} minutesOfTheHour - Minutes of the Hour
     */
    everyDayAt(
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0
    ): string {
        return Helpers.day(hoursOfTheDay, minutesOfTheHour);
    },

    /**
     * Every Sunday At
     * @param {number|number[]} hoursOfTheDay - Hours Of the Day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour.
     */
    everySundayAt(
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0
    ): string {
        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${Days.sunday}`;
    },

    /**
     * Every Sunday
     */
    everySunday(): string {
        return this.everySundayAt(0);
    },

    /**
     * Every Monday At
     * @param {number|number[]} hoursOfTheDay - Hours Of the Day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour.
     */
    everyMondayAt(
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0
    ): string {
        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${Days.monday}`;
    },

    /**
     * Every Monday
     */
    everyMonday(): string {
        return this.everyMondayAt(0);
    },

    /**
     * Every Tuesday At
     * @param {number|number[]} hoursOfTheDay - Hours Of the Day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour.
     */
    everyTuesdayAt(
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0
    ): string {
        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${Days.tuesday}`;
    },

    /**
     * Every Tuesday
     */
    everyTuesday(): string {
        return this.everyTuesdayAt(0);
    },

    /**
     * Every Wednesday At
     * @param {number|number[]} hoursOfTheDay - Hours Of the Day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour.
     */
    everyWednesdayAt(
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0
    ): string {
        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${Days.wednesday}`;
    },

    /**
     * Every Wednesday
     */
    everyWednesday(): string {
        return this.everyWednesdayAt(0);
    },

    /**
     * Every Thursday At
     * @param {number|number[]} hoursOfTheDay - Hours Of the Day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour.
     */
    everyThursdayAt(
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0
    ): string {
        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${Days.thursday}`;
    },

    /**
     * Every Thursday
     */
    everyThursday(): string {
        return this.everyThursdayAt(0);
    },

    /**
     * Every Friday At
     * @param {number|number[]} hoursOfTheDay - Hours Of the Day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour.
     */
    everyFridayAt(
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0
    ): string {
        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${Days.friday}`;
    },

    /**
     * Every Friday
     */
    everyFriday(): string {
        return this.everyFridayAt(0);
    },

    /**
     * Every Saturday At
     * @param {number|number[]} hoursOfTheDay - Hours Of the Day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour.
     */
    everySaturdayAt(
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0
    ): string {
        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${Days.saturday}`;
    },

    /**
     * Every Saturday
     */
    everySaturday(): string {
        return this.everySaturdayAt(0);
    },

    /**
     * On Specific Days
     * @param {(string|number)[]} days
     */
    onSpecificDays(days: (string | number)[]) {
        if (!Array.isArray(days) || days.length === 0) {
            throw new Error("onSpecificDays expects days to be an array of days string.");
        }

        days = Helpers.daysToIntegers(days);
        return `0 0 * * ${days}`;
    },

    /**
     * On Specific Days At
     * @param {(string|number)[]} days
     * @param {number|number[]} hoursOfTheDay - Hours of the Day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour
     */
    onSpecificDaysAt(
        days: (string | number)[],
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0
    ) {
        if (!Array.isArray(days) || days.length === 0) {
            throw new Error("onSpecificDaysAt expects days to be an array of days string.");
        }

        days = Helpers.daysToIntegers(days);
        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${days}`;
    },

    /**
     * Every Week
     */
    everyWeek(): string {
        return this.everyWeekAt(0);
    },

    /**
     * Every Week At
     * @param {number|number[]|string|string[]} daysOfTheWeek - Days of the week
     * @param {number|number[]} hoursOfTheDay - Hours of the day.
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour
     */
    everyWeekAt(
        daysOfTheWeek: number | string | number[] | string[],
        hoursOfTheDay: number | number[] = 0,
        minutesOfTheHour: number | number[] = 0
    ): string {
        const days = Helpers.daysToIntegers(daysOfTheWeek);
        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${days}`;
    },

    /**
     * Every WeekDay
     * @param {number|string} startDay - Starting day (Monday=1, Sunday=0)
     * @param {number|string} endDay - Starting day (Monday=1, Sunday=0)
     * @returns {string}
     *
     * @example
     * CronTime.everyWeekDay()
     *  // Monday to Friday
     * CronTime.everyWeekDay('sunday', 'thursday')
     *  // Sunday to Thursday
     */
    everyWeekDay(
        startDay: string | number = "monday",
        endDay: string | number = "friday"
    ): string {
        return this.everyWeekDayAt(0, 0, startDay, endDay);
    },

    /**
     * Every WeekDay At
     * @param {number|number[]} hoursOfTheDay - Hours of the day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour
     * @param {number|string} startDay - Starting day
     * @param {number|string} endDay - Ending day
     * @returns {string}
     */
    everyWeekDayAt(
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0,
        startDay: string | number = "monday",
        endDay: string | number = "friday"
    ): string {
        startDay = Helpers.dayToInt(startDay);
        endDay = Helpers.dayToInt(endDay);

        Helpers.validateStartToEndDay(startDay, endDay);

        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${startDay}-${endDay}`;
    },

    /**
     * Every Weekend
     * @param {number|string} startDay - Starting day (Monday=1, Sunday=0)
     * @param {number|string} endDay - Starting day (Monday=1, Sunday=0)
     * @returns {string}
     *
     * @example
     * CronTime.everyWeekend()
     *  // Saturday and Sunday
     * CronTime.everyWeekend('friday', 'saturday')
     *  // Friday and Saturday
     */
    everyWeekend(
        startDay: string | number = "saturday",
        endDay: string | number = "sunday"
    ): string {
        return this.everyWeekendAt(0, 0, startDay, endDay);
    },

    /**
     * Every Weekend At
     * @param {number|number[]} hoursOfTheDay - Hours of the day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour
     * @param {number|string} startDay - Starting day
     * @param {number|string} endDay - Ending day
     * @returns {string}
     */
    everyWeekendAt(
        hoursOfTheDay: number | number[],
        minutesOfTheHour: number | number[] = 0,
        startDay: string | number = "saturday",
        endDay: string | number = "sunday"
    ): string {
        const days = Helpers.daysToIntegers([startDay, endDay]);
        return `${minutesOfTheHour} ${hoursOfTheDay} * * ${days}`;
    },

    /**
     * Every Month
     */
    everyMonth(): string {
        return this.everyMonthOn(1);
    },

    /**
     * Every Month on
     * @param {number|number[]} daysOfTheMonth - Days of the month
     * @param {number|number[]} hoursOfTheDay - Hours of the day
     * @param {number|number[]} minutesOfTheHour - Minutes of the hour
     */
    everyMonthOn(
        daysOfTheMonth: number | number[],
        hoursOfTheDay: number | number[] = 0,
        minutesOfTheHour: number | number[] = 0
    ): string {
        const days = Helpers.daysToIntegers(daysOfTheMonth);
        return `${minutesOfTheHour} ${hoursOfTheDay} ${days} * *`;
    },

    /**
     * Every Year
     */
    everyYear(): string {
        return this.everyYearIn(1);
    },

    /**
     * Every Year In
     * @param {number|number[]} monthsOfTheYear  - Months of the year
     * @param daysOfTheMonth - Days of the month
     * @param hoursOfTheDay - Hours of the day
     * @param minutesOfTheHour - Minutes of the hour.
     */
    everyYearIn(
        monthsOfTheYear: number | number[],
        daysOfTheMonth: number | number[] = 1,
        hoursOfTheDay: number | number[] = 0,
        minutesOfTheHour: number | number[] = 0
    ): string {
        const days = Helpers.daysToIntegers(daysOfTheMonth);
        return `${minutesOfTheHour} ${hoursOfTheDay} ${days} ${monthsOfTheYear} *`;
    },

    /**
     * Between Time Frames
     * @param {number} start - Start
     * @param {number} end - End
     */
    between(start: number, end: number) {
        return new EveryTime([start, end], {
            between: true
        });
    }
};

export default CronTimex;
