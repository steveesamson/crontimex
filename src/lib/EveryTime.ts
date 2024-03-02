import Helpers from "./helpers.js";

type TimeInterval = number | "even" | "uneven" | number[];
type EveryTimeConfig = {
    between?: boolean;
};

/**
 * Every Time Class
 */
class EveryTime {
    timeInterval: TimeInterval = 1;
    config: EveryTimeConfig = {};

    /**
     *
     * @param {number[]|string|number} every
     * @param {{}} config
     */
    constructor(every: TimeInterval, config: EveryTimeConfig = {}) {
        if (every === "even") every = 2;
        this.timeInterval = every;

        this.config = Object.assign(this.config, config);
        return this;
    }

    /**
     * Every nth Minute
     */
    minutes(): string {
        if (this.config["between"] && Array.isArray(this.timeInterval)) {
            this.config["between"] = false;
            return Helpers.spliceIntoPosition(0, this.timeInterval.join("-"), Helpers.minute());
        }

        if (typeof this.timeInterval === "number" && this.timeInterval > 1) {
            return Helpers.spliceIntoPosition(0, "*/" + this.timeInterval);
        } else if (this.timeInterval === "uneven") {
            return Helpers.spliceIntoPosition(0, "1-59/2");
        }

        return Helpers.minute();
    }

    /**
     * Every nth Hour
     */
    hours(): string {
        const hour = Helpers.hour();

        if (this.config["between"] && Array.isArray(this.timeInterval)) {
            this.config["between"] = false;
            return Helpers.spliceIntoPosition(1, this.timeInterval.join("-"), hour);
        }

        if (typeof this.timeInterval === "number" && this.timeInterval > 1) {
            return Helpers.spliceIntoPosition(1, "*/" + this.timeInterval, hour);
        } else if (this.timeInterval === "uneven") {
            return Helpers.spliceIntoPosition(1, "1-23/2", hour);
        }

        return hour;
    }

    /**
     * Every nth Days after
     * @param hoursOfDay
     * @param $minutesOfDay
     */
    days(hoursOfDay = 0, $minutesOfDay = 0): string {
        const day = Helpers.day(hoursOfDay, $minutesOfDay);

        if (this.config["between"] && Array.isArray(this.timeInterval)) {
            this.config["between"] = false;
            return Helpers.spliceIntoPosition(2, this.timeInterval.join("-"), day);
        }

        if (typeof this.timeInterval === "number" && this.timeInterval > 1) {
            return Helpers.spliceIntoPosition(2, "*/" + this.timeInterval, day);
        } else if (this.timeInterval === "uneven") {
            return Helpers.spliceIntoPosition(2, "1-31/2", day);
        }

        return day;
    }
}

export default EveryTime;
