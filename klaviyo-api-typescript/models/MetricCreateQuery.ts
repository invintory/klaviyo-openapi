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
/**
 * 
 * @export
 * @interface MetricCreateQuery
 */
export interface MetricCreateQuery {
    /**
     * 
     * @type {string}
     * @memberof MetricCreateQuery
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof MetricCreateQuery
     */
    service?: string;
}

/**
 * Check if a given object implements the MetricCreateQuery interface.
 */
export function instanceOfMetricCreateQuery(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function MetricCreateQueryFromJSON(json: any): MetricCreateQuery {
    return MetricCreateQueryFromJSONTyped(json, false);
}

export function MetricCreateQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricCreateQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'service': !exists(json, 'service') ? undefined : json['service'],
    };
}

export function MetricCreateQueryToJSON(value?: MetricCreateQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'service': value.service,
    };
}

