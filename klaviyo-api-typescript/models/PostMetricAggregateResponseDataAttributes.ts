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
import type { MetricAggregateRowDTO } from './MetricAggregateRowDTO';
import {
    MetricAggregateRowDTOFromJSON,
    MetricAggregateRowDTOFromJSONTyped,
    MetricAggregateRowDTOToJSON,
} from './MetricAggregateRowDTO';

/**
 * 
 * @export
 * @interface PostMetricAggregateResponseDataAttributes
 */
export interface PostMetricAggregateResponseDataAttributes {
    /**
     * 
     * @type {Array<Date>}
     * @memberof PostMetricAggregateResponseDataAttributes
     */
    dates: Array<Date>;
    /**
     * 
     * @type {Array<MetricAggregateRowDTO>}
     * @memberof PostMetricAggregateResponseDataAttributes
     */
    data: Array<MetricAggregateRowDTO>;
}

/**
 * Check if a given object implements the PostMetricAggregateResponseDataAttributes interface.
 */
export function instanceOfPostMetricAggregateResponseDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "dates" in value;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function PostMetricAggregateResponseDataAttributesFromJSON(json: any): PostMetricAggregateResponseDataAttributes {
    return PostMetricAggregateResponseDataAttributesFromJSONTyped(json, false);
}

export function PostMetricAggregateResponseDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostMetricAggregateResponseDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dates': json['dates'],
        'data': ((json['data'] as Array<any>).map(MetricAggregateRowDTOFromJSON)),
    };
}

export function PostMetricAggregateResponseDataAttributesToJSON(value?: PostMetricAggregateResponseDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dates': value.dates,
        'data': ((value.data as Array<any>).map(MetricAggregateRowDTOToJSON)),
    };
}

