/* eslint-disable @typescript-eslint/no-explicit-any */
import test from "japa";
import { isValidCron } from "cron-validator";
import CronTimex from "./index.js";
import Helpers from "./helpers.js";

type TestItem<T = any> = {
    title: string;
    expects: T;
    test: () => T;
    expectsType?: "cron";
};

const HelpersTests: TestItem[] = [
    {
        title: `spliceIntoPosition(0, "2")`,
        expects: "2 * * * *",
        test: () => Helpers.spliceIntoPosition(0, "2")
    },

    {
        title: `spliceIntoPosition(4, "5")`,
        expects: "* * * * 5",
        test: () => Helpers.spliceIntoPosition(4, "5")
    },

    {
        title: "minute()",
        expects: "* * * * *",
        test: () => Helpers.minute()
    },

    {
        title: "hour()",
        expects: "0 * * * *",
        test: () => Helpers.hour()
    },

    {
        title: "day(10, 30)",
        expects: "30 10 * * *",
        test: () => Helpers.day(10, 30)
    },

    {
        title: `dayToInt(0) === dayToInt("sunday")`,
        expects: true,
        test: () => Helpers.dayToInt(0) === Helpers.dayToInt("sunday")
    },
    {
        title: `dayToInt(...) using all days`,
        expects: [0, 1, 2, 3, 4, 5, 6],
        test: () =>
            ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].map(
                Helpers.dayToInt
            )
    },
    {
        title: `daysToIntegers(["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"])`,
        expects: [0, 1, 2, 3, 4, 5, 6],
        test: () =>
            Helpers.daysToIntegers([
                "sunday",
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday",
                "saturday"
            ])
    }
];

const MethodsTests: TestItem[] = [
    {
        title: "everyMinute()",
        expects: "* * * * *",
        test: () => CronTimex.everyMinute()
    },
    {
        title: "everyHour()",
        expects: "0 * * * *",
        test: () => CronTimex.everyHour()
    },
    {
        title: "everyHourAt(15)",
        expects: "15 * * * *",
        test: () => CronTimex.everyHourAt(15)
    },
    {
        title: "everyHourAt(10, 20, 30) - Multiple minutes of an hour",
        expects: "10,20,30 * * * *",
        test: () => CronTimex.everyHourAt([10, 20, 30])
    },
    {
        title: "everyDay()",
        expects: "0 0 * * *",
        test: () => CronTimex.everyDay()
    },
    {
        title: "everyDayAt(10, 30)",
        expects: "30 10 * * *",
        test: () => CronTimex.everyDayAt(10, 30)
    },
    {
        title: "everyDayAt([6, 9, 12], [10, 30]) - Multiple hours and minutes of a day",
        expects: "10,30 6,9,12 * * *",
        test: () => CronTimex.everyDayAt([6, 9, 12], [10, 30])
    },
    {
        title: "everySunday()",
        expects: "0 0 * * 0",
        test: () => CronTimex.everySunday()
    },
    {
        title: "everySundayAt(9, 30)",
        expects: "30 9 * * 0",
        test: () => CronTimex.everySundayAt(9, 30)
    },
    {
        title: "everySundayAt([9, 10, 11], [30, 45]) - Multiple hours and minutes of a day",
        expects: "30,45 9,10,11 * * 0",
        test: () => CronTimex.everySundayAt([9, 10, 11], [30, 45])
    },
    {
        title: "everyMonday()",
        expects: "0 0 * * 1",
        test: () => CronTimex.everyMonday()
    },
    {
        title: "everyMondayAt(9, 30)",
        expects: "30 9 * * 1",
        test: () => CronTimex.everyMondayAt(9, 30)
    },
    {
        title: "everyMondayAt([9, 10, 11], [30, 45]) - Multiple hours and minutes of a day",
        expects: "30,45 9,10,11 * * 1",
        test: () => CronTimex.everyMondayAt([9, 10, 11], [30, 45])
    },
    {
        title: "everyTuesday",
        expects: "0 0 * * 2",
        test: () => CronTimex.everyTuesday()
    },
    {
        title: "everyTuesdayAt(9, 30)",
        expects: "30 9 * * 2",
        test: () => CronTimex.everyTuesdayAt(9, 30)
    },
    {
        title: "everyTuesdayAt([9, 10, 11], [30, 45]) - Multiple hours and minutes of a day",
        expects: "30,45 9,10,11 * * 2",
        test: () => CronTimex.everyTuesdayAt([9, 10, 11], [30, 45])
    },
    {
        title: "everyWednesday",
        expects: "0 0 * * 3",
        test: () => CronTimex.everyWednesday()
    },
    {
        title: "everyWednesdayAt(9, 30)",
        expects: "30 9 * * 3",
        test: () => CronTimex.everyWednesdayAt(9, 30)
    },
    {
        title: "everyWednesdayAt([9, 10, 11], [30, 45]) - Multiple hours and minutes of a day",
        expects: "30,45 9,10,11 * * 3",
        test: () => CronTimex.everyWednesdayAt([9, 10, 11], [30, 45])
    },
    {
        title: "everyThursday",
        expects: "0 0 * * 4",
        test: () => CronTimex.everyThursday()
    },
    {
        title: "everyThursdayAt(9, 30)",
        expects: "30 9 * * 4",
        test: () => CronTimex.everyThursdayAt(9, 30)
    },
    {
        title: "everyThursdayAt([9, 10, 11], [30, 45]) - Multiple hours and minutes of a day",
        expects: "30,45 9,10,11 * * 4",
        test: () => CronTimex.everyThursdayAt([9, 10, 11], [30, 45])
    },
    {
        title: "everyFriday",
        expects: "0 0 * * 5",
        test: () => CronTimex.everyFriday()
    },
    {
        title: "everyFridayAt(9, 30)",
        expects: "30 9 * * 5",
        test: () => CronTimex.everyFridayAt(9, 30)
    },
    {
        title: "everyFridayAt([9, 10, 11], [30, 45]) - Multiple hours and minutes of a day",
        expects: "30,45 9,10,11 * * 5",
        test: () => CronTimex.everyFridayAt([9, 10, 11], [30, 45])
    },
    {
        title: "everySaturday",
        expects: "0 0 * * 6",
        test: () => CronTimex.everySaturday()
    },
    {
        title: "everySaturdayAt(9, 30)",
        expects: "30 9 * * 6",
        test: () => CronTimex.everySaturdayAt(9, 30)
    },
    {
        title: "everySaturdayAt([9, 10, 11], [30, 45]) - Multiple hours and minutes of a day",
        expects: "30,45 9,10,11 * * 6",
        test: () => CronTimex.everySaturdayAt([9, 10, 11], [30, 45])
    },
    {
        title: "onSpecificDays(['monday', 'wednesday', 'friday'])",
        expects: "0 0 * * 1,3,5",
        test: () => CronTimex.onSpecificDays(["monday", "wednesday", "friday"])
    },
    {
        title: "everyWeek()",
        expects: "0 0 * * 0",
        test: () => CronTimex.everyWeek()
    },
    {
        title: "everyWeekAt(['monday', 'wednesday'], 9, 30)",
        expects: "30 9 * * 1,3",
        test: () => CronTimex.everyWeekAt(["monday", "wednesday"], 9, 30)
    },
    {
        title: "everyWeekDay",
        expects: "0 0 * * 1-5",
        test: () => CronTimex.everyWeekDay()
    },
    {
        title: "everyWeekDayAt(9, 30)",
        expects: "30 9 * * 1-5",
        test: () => CronTimex.everyWeekDayAt(9, 30)
    },
    {
        title: "everyWeekend",
        expects: "0 0 * * 6,0",
        test: () => CronTimex.everyWeekend()
    },
    {
        title: "everyWeekendAt(10, 15)",
        expects: "15 10 * * 6,0",
        test: () => CronTimex.everyWeekendAt(10, 15)
    },
    {
        title: "everyMonth",
        expects: "0 0 1 * *",
        test: () => CronTimex.everyMonth()
    },
    {
        title: "everyMonthOn(15, 9, 30)",
        expects: "30 9 15 * *",
        test: () => CronTimex.everyMonthOn(15, 9, 30)
    },
    {
        title: "everyYear",
        expects: "0 0 1 1 *",
        test: () => CronTimex.everyYear()
    },
    {
        title: "everyYearIn(6, 15, 9, 30)",
        expects: "30 9 15 6 *",
        test: () => CronTimex.everyYearIn(6, 15, 9, 30)
    },
    {
        title: "between(1, 4).days()",
        expects: "0 0 10-20 * *",
        test: () => CronTimex.between(10, 20).days()
    }
];

// add expectsType to MethodsTests
for (const test of MethodsTests) test.expectsType = "cron";

/**
 * Test Runner
 * @param tests
 */
function runTests(tests: TestItem[]) {
    for (const cron of tests) {
        const title = `${cron.title} => [${cron.expects}]`;
        const expectsCron = cron.expectsType === "cron";

        test(title, (assert) => {
            // check if expects is a valid cron
            if (expectsCron && !isValidCron(cron.expects))
                throw new Error(`Invalid expects cron: ${cron.expects}`);

            const value = cron.test();

            // if string, check if valid cron
            if (expectsCron) assert.isTrue(isValidCron(value));

            assert.deepEqual(value, cron.expects);
        });
    }
}

/**
 * Run Tests
 */
runTests(([...HelpersTests, ...MethodsTests]));
