/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Only available for the Waiting Room Advanced subscription. If `true`, requests to the waiting room with the header `Accept: application/json` will receive a JSON response object with information on the user's status in the waiting room as opposed to the configured static HTML page. This JSON response object has one property `cfWaitingRoom` which is an object containing the following fields:
 * 1. `inWaitingRoom`: Boolean indicating if the user is in the waiting room (always **true**).
 * 2. `waitTimeKnown`: Boolean indicating if the current estimated wait times are accurate. If **false**, they are not available.
 * 3. `waitTime`: Valid only when `waitTimeKnown` is **true**. Integer indicating the current estimated time in minutes the user will wait in the waiting room. When `queueingMethod` is **random**, this is set to `waitTime50Percentile`.
 * 4. `waitTime25Percentile`: Valid only when `queueingMethod` is **random** and `waitTimeKnown` is **true**. Integer indicating the current estimated maximum wait time for the 25% of users that gain entry the fastest (25th percentile).
 * 5. `waitTime50Percentile`: Valid only when `queueingMethod` is **random** and `waitTimeKnown` is **true**. Integer indicating the current estimated maximum wait time for the 50% of users that gain entry the fastest (50th percentile). In other words, half of the queued users are expected to let into the origin website before `waitTime50Percentile` and half are expected to be let in after it.
 * 6. `waitTime75Percentile`: Valid only when `queueingMethod` is **random** and `waitTimeKnown` is **true**. Integer indicating the current estimated maximum wait time for the 75% of users that gain entry the fastest (75th percentile).
 * 7. `waitTimeFormatted`: String displaying the `waitTime` formatted in English for users. If `waitTimeKnown` is **false**, `waitTimeFormatted` will display **unavailable**.
 * 8. `queueIsFull`: Boolean indicating if the waiting room's queue is currently full and not accepting new users at the moment.
 * 9. `queueAll`: Boolean indicating if all users will be queued in the waiting room and no one will be let into the origin website.
 * 10. `lastUpdated`: String displaying the timestamp as an ISO 8601 string of the user's last attempt to leave the waiting room and be let into the origin website. The user is able to make another attempt after `refreshIntervalSeconds` past this time. If the user makes a request too soon, it will be ignored and `lastUpdated` will not change.
 * 11. `refreshIntervalSeconds`: Integer indicating the number of seconds after `lastUpdated` until the user is able to make another attempt to leave the waiting room and be let into the origin website. When the `queueingMethod` is `reject`, there is no specified refresh time — it will always be **zero**.
 * 12. `queueingMethod`: The queueing method currently used by the waiting room. It is either **fifo**, **random**, **passthrough**, or **reject**.
 * 13. `isFIFOQueue`: Boolean indicating if the waiting room uses a FIFO (First-In-First-Out) queue.
 * 14. `isRandomQueue`: Boolean indicating if the waiting room uses a Random queue where users gain access randomly.
 * 15. `isPassthroughQueue`: Boolean indicating if the waiting room uses a passthrough queue. Keep in mind that when passthrough is enabled, this JSON response will only exist when `queueAll` is **true** or `isEventPrequeueing` is **true** because in all other cases requests will go directly to the origin.
 * 16. `isRejectQueue`: Boolean indicating if the waiting room uses a reject queue.
 * 17. `isEventActive`: Boolean indicating if an event is currently occurring. Events are able to change a waiting room's behavior during a specified period of time. For additional information, look at the event properties `prequeue_start_time`, `event_start_time`, and `event_end_time` in the documentation for creating waiting room events. Events are considered active between these start and end times, as well as during the prequeueing period if it exists.
 * 18. `isEventPrequeueing`: Valid only when `isEventActive` is **true**. Boolean indicating if an event is currently prequeueing users before it starts.
 * 19. `timeUntilEventStart`: Valid only when `isEventPrequeueing` is **true**. Integer indicating the number of minutes until the event starts.
 * 20. `timeUntilEventStartFormatted`: String displaying the `timeUntilEventStart` formatted in English for users. If `isEventPrequeueing` is **false**, `timeUntilEventStartFormatted` will display **unavailable**.
 * 21. `timeUntilEventEnd`: Valid only when `isEventActive` is **true**. Integer indicating the number of minutes until the event ends.
 * 22. `timeUntilEventEndFormatted`: String displaying the `timeUntilEventEnd` formatted in English for users. If `isEventActive` is **false**, `timeUntilEventEndFormatted` will display **unavailable**.
 * 23. `shuffleAtEventStart`: Valid only when `isEventActive` is **true**. Boolean indicating if the users in the prequeue are shuffled randomly when the event starts.
 *
 * An example cURL to a waiting room could be:
 *
 * curl -X GET "https://example.com/waitingroom" \
 * -H "Accept: application/json"
 *
 * If `json_response_enabled` is **true** and the request hits the waiting room, an example JSON response when `queueingMethod` is **fifo** and no event is active could be:
 *
 * {
     * "cfWaitingRoom": {
         * "inWaitingRoom": true,
         * "waitTimeKnown": true,
         * "waitTime": 10,
         * "waitTime25Percentile": 0,
         * "waitTime50Percentile": 0,
         * "waitTime75Percentile": 0,
         * "waitTimeFormatted": "10 minutes",
         * "queueIsFull": false,
         * "queueAll": false,
         * "lastUpdated": "2020-08-03T23:46:00.000Z",
         * "refreshIntervalSeconds": 20,
         * "queueingMethod": "fifo",
         * "isFIFOQueue": true,
         * "isRandomQueue": false,
         * "isPassthroughQueue": false,
         * "isRejectQueue": false,
         * "isEventActive": false,
         * "isEventPrequeueing": false,
         * "timeUntilEventStart": 0,
         * "timeUntilEventStartFormatted": "unavailable",
         * "timeUntilEventEnd": 0,
         * "timeUntilEventEndFormatted": "unavailable",
         * "shuffleAtEventStart": false
         * }
         * }
         *
         * If `json_response_enabled` is **true** and the request hits the waiting room, an example JSON response when `queueingMethod` is **random** and an event is active could be:
         *
         * {
             * "cfWaitingRoom": {
                 * "inWaitingRoom": true,
                 * "waitTimeKnown": true,
                 * "waitTime": 10,
                 * "waitTime25Percentile": 5,
                 * "waitTime50Percentile": 10,
                 * "waitTime75Percentile": 15,
                 * "waitTimeFormatted": "5 minutes to 15 minutes",
                 * "queueIsFull": false,
                 * "queueAll": false,
                 * "lastUpdated": "2020-08-03T23:46:00.000Z",
                 * "refreshIntervalSeconds": 20,
                 * "queueingMethod": "random",
                 * "isFIFOQueue": false,
                 * "isRandomQueue": true,
                 * "isPassthroughQueue": false,
                 * "isRejectQueue": false,
                 * "isEventActive": true,
                 * "isEventPrequeueing": false,
                 * "timeUntilEventStart": 0,
                 * "timeUntilEventStartFormatted": "unavailable",
                 * "timeUntilEventEnd": 15,
                 * "timeUntilEventEndFormatted": "15 minutes",
                 * "shuffleAtEventStart": true
                 * }
                 * }.
                 */
                export type json_response_enabled = boolean;
