/* tslint:disable */
/* eslint-disable */
/**
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * The version of the OpenAPI document: 2022-10-17
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UTMParamsSubObject } from './UTMParamsSubObject';
import {
    UTMParamsSubObjectFromJSON,
    UTMParamsSubObjectFromJSONTyped,
    UTMParamsSubObjectToJSON,
} from './UTMParamsSubObject';

/**
 * 
 * @export
 * @interface TrackingOptionsSubObject
 */
export interface TrackingOptionsSubObject {
    /**
     * 
     * @type {boolean}
     * @memberof TrackingOptionsSubObject
     */
    isTrackingOpens?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TrackingOptionsSubObject
     */
    isTrackingClicks?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TrackingOptionsSubObject
     */
    isAddUtm?: boolean;
    /**
     * 
     * @type {Array<UTMParamsSubObject>}
     * @memberof TrackingOptionsSubObject
     */
    utmParams?: Array<UTMParamsSubObject>;
}

/**
 * Check if a given object implements the TrackingOptionsSubObject interface.
 */
export function instanceOfTrackingOptionsSubObject(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TrackingOptionsSubObjectFromJSON(json: any): TrackingOptionsSubObject {
    return TrackingOptionsSubObjectFromJSONTyped(json, false);
}

export function TrackingOptionsSubObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackingOptionsSubObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isTrackingOpens': !exists(json, 'is_tracking_opens') ? undefined : json['is_tracking_opens'],
        'isTrackingClicks': !exists(json, 'is_tracking_clicks') ? undefined : json['is_tracking_clicks'],
        'isAddUtm': !exists(json, 'is_add_utm') ? undefined : json['is_add_utm'],
        'utmParams': !exists(json, 'utm_params') ? undefined : ((json['utm_params'] as Array<any>).map(UTMParamsSubObjectFromJSON)),
    };
}

export function TrackingOptionsSubObjectToJSON(value?: TrackingOptionsSubObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'is_tracking_opens': value.isTrackingOpens,
        'is_tracking_clicks': value.isTrackingClicks,
        'is_add_utm': value.isAddUtm,
        'utm_params': value.utmParams === undefined ? undefined : ((value.utmParams as Array<any>).map(UTMParamsSubObjectToJSON)),
    };
}

