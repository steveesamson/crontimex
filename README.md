# CronTimex

Cron Time Expression Generator/Builder written in Typescript. It is a non-class-based port of [Cron-Time](https://github.com/trapcodeio/cron-time). Every functionality remains the same as in `Cron-Time`; it is just not class-based.

Tested on [CronTab.Guru](https://crontab.guru)

### Install

```console
npm install crontimex
```

OR

```console
yarn add crontimex
```

### Setup

```javascript
// Javascript
const { CronTimex } = require('crontimex');
// OR
const { default: CronTimex } = require('crontimex');

// Typescript
import { CronTimex } from 'crontimex';
// OR
import CronTimex from 'crontimex';
```

The `CronTimex` contains all the methods for generating cron expressions.
it is the default export of the package and also has a named export called `CronTimex`

```javascript
CronTimex.everyMinute();
// * * * * *

CronTimex.everyHour();
// 0 * * * *

CronTimex.everyDay();
// 0 0 * * *

CronTimex.everyDayAt(6);
// 0 6 * * *

CronTimex.everyDayAt(6, 15);
// 15 6 * * *

CronTimex.everySunday();
// 0 0 * * SUN

CronTimex.everySundayAt(4, 30);
// 30 4 * * SUN

CronTimex.everyWeekDay();
// 0 0 * * 1-5
// from Monday to Friday

CronTimex.everyWeekDayAt(1, 30);
// 30 1 * * 1-5
// 1:30 AM from Monday to Friday

CronTimex.everyWeekend();
// 0 0 * * 6,0
// on Saturday and Sunday

CronTimex.everyWeekendAt(1, 30);
// 30 1 * * 6,0
// 1:30 AM on Saturday and Sunday

// E.T.C
```

For `everyWeekDay` and `everyWeekend` there is also an option to change the starting day.

By default, week days is from **Monday** to **Friday** while weekend days are **Saturdays** and **Sundays**

This can be changed like so:

```javascript
CronTimex.everyWeekDay('sunday', 'thursday');
// 0 0 * * 0-4
// from Sunday to Thursday

CronTimex.everyWeekDayAt(1, 30, 'sunday', 'thursday');
// 30 1 * * 0-4
// 1:30 AM from Sunday to Thursday

CronTimex.everyWeekend('friday', 'saturday');
// 0 0 * * 5,6
// on Friday and Saturday

CronTimex.everyWeekendAt(1, 30, 'friday', 'saturday');
// 30 1 * * 5,6
// 1:30 AM on Friday and Saturday
```

Note: if a `startDay` is specified then an `endDay` must be specified also, else it will use the default values which
may not tally with your new `$startDay`

Every method of `CronTimex` returns exactly what its name says.

### onSpecificDays and onSpecificDaysAt

To target specific days

```javascript
CronTimex.onSpecificDays(['sunday', 'tuesday', 'thursday']); // 0 0 * * 0,2,4

// With time
CronTimex.onSpecificDaysAt(['sunday', 'tuesday', 'thursday'], 3, 30); // 0 0 * * 0,2,4
```

### Every Nth Time

```javascript
const CronTimex = require('crontimex');

CronTimex.every(5).minutes();
// Every Five Minutes

CronTimex.every(2).hours();
// Every 2 Hours

CronTimex.every(7).days();
// Every 7 Days

CronTimex.every(7).days(9, 5);
// Every 7 days at 9:05

CronTimex.every('even').hours();
// Every Even Hours
// * */2 * * *

CronTimex.every('uneven').hours();
// Every Uneven Hours
// * 1-23/2 * * *
```

### Between

```javascript
const { CronTimex } = require('crontimex');

CronTimex.between(1, 4).days();
// Between  1 - 4 th day of the month
```

### All Functions

`every`

`between`

`everyMinute`

`everyHour`

`everyHourAt(minuteOfTheHour)`

`everyDay`

`everyDayAt(hoursOfTheDay)`

`everySunday`

`everySundayAt(hours, minutes?)`

`everyMonday`

`everyMondayAt(hours, minutes?)`

`everyTuesday`

`everyTuesdayAt(hours, minutes?)`

`everyWednesday`

`everyWednesdayAt(hours, minutes?)`

`everyThursday`

`everyThursdayAt(hours, minutes?)`

`everyFriday`

`everyFridayAt(hours, minutes?)`

`everySaturday`

`everySaturdayAt(hours, minutes?)`

`everyWeek`

`everyWeekAt(days, hours?, minutes?)`

`everyWeekDay`

`everyWeekDayAt(hours, minutes?, startDay?, endDay?)`

`everyWeekend`

`everyWeekendAt(hours, minutes?, startDay?, endDay?)`

`everyMonth`

`everyMonthOn(days, hours?, minutes?)`

`everyYear`

`everyYearIn(months, days?, hours?, minutes?)`

`onSpecificDays(days)`

`onSpecificDaysAt(days, hour, minutes?)`
