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
import type { MetricAggregateQueryAsSubResourceAttributes } from './MetricAggregateQueryAsSubResourceAttributes';
import {
    MetricAggregateQueryAsSubResourceAttributesFromJSON,
    MetricAggregateQueryAsSubResourceAttributesFromJSONTyped,
    MetricAggregateQueryAsSubResourceAttributesToJSON,
} from './MetricAggregateQueryAsSubResourceAttributes';

/**
 * 
 * @export
 * @interface MetricAggregateQueryAsSubResource
 */
export interface MetricAggregateQueryAsSubResource {
    /**
     * 
     * @type {string}
     * @memberof MetricAggregateQueryAsSubResource
     */
    type: MetricAggregateQueryAsSubResourceTypeEnum;
    /**
     * 
     * @type {MetricAggregateQueryAsSubResourceAttributes}
     * @memberof MetricAggregateQueryAsSubResource
     */
    attributes: MetricAggregateQueryAsSubResourceAttributes;
}


/**
 * @export
 */
export const MetricAggregateQueryAsSubResourceTypeEnum = {
    MetricAggregate: 'metric-aggregate'
} as const;
export type MetricAggregateQueryAsSubResourceTypeEnum = typeof MetricAggregateQueryAsSubResourceTypeEnum[keyof typeof MetricAggregateQueryAsSubResourceTypeEnum];


/**
 * Check if a given object implements the MetricAggregateQueryAsSubResource interface.
 */
export function instanceOfMetricAggregateQueryAsSubResource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function MetricAggregateQueryAsSubResourceFromJSON(json: any): MetricAggregateQueryAsSubResource {
    return MetricAggregateQueryAsSubResourceFromJSONTyped(json, false);
}

export function MetricAggregateQueryAsSubResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricAggregateQueryAsSubResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': MetricAggregateQueryAsSubResourceAttributesFromJSON(json['attributes']),
    };
}

export function MetricAggregateQueryAsSubResourceToJSON(value?: MetricAggregateQueryAsSubResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': MetricAggregateQueryAsSubResourceAttributesToJSON(value.attributes),
    };
}

