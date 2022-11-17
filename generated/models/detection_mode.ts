/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The mode that defines how rules within the package are evaluated during the course of a request. When a package uses anomaly detection mode (`anomaly` value), each rule is given a score when triggered. If the total score of all triggered rules exceeds the sensitivity defined in the WAF package, the action configured in the package will be performed. Traditional detection mode (`traditional` value) will decide the action to take when it is triggered by the request. If multiple rules are triggered, the action providing the highest protection will be applied (for example, a 'block' action will win over a 'challenge' action).
 */
export type detection_mode = 'anomaly' | 'traditional';
