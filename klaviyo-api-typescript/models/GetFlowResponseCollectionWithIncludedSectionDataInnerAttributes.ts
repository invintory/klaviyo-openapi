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
 * @interface GetFlowResponseCollectionWithIncludedSectionDataInnerAttributes
 */
export interface GetFlowResponseCollectionWithIncludedSectionDataInnerAttributes {
    /**
     * 
     * @type {string}
     * @memberof GetFlowResponseCollectionWithIncludedSectionDataInnerAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof GetFlowResponseCollectionWithIncludedSectionDataInnerAttributes
     */
    status?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetFlowResponseCollectionWithIncludedSectionDataInnerAttributes
     */
    archived?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof GetFlowResponseCollectionWithIncludedSectionDataInnerAttributes
     */
    created?: Date;
    /**
     * 
     * @type {Date}
     * @memberof GetFlowResponseCollectionWithIncludedSectionDataInnerAttributes
     */
    updated?: Date;
    /**
     * 
     * @type {string}
     * @memberof GetFlowResponseCollectionWithIncludedSectionDataInnerAttributes
     */
    triggerType?: string;
}

/**
 * Check if a given object implements the GetFlowResponseCollectionWithIncludedSectionDataInnerAttributes interface.
 */
export function instanceOfGetFlowResponseCollectionWithIncludedSectionDataInnerAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetFlowResponseCollectionWithIncludedSectionDataInnerAttributesFromJSON(json: any): GetFlowResponseCollectionWithIncludedSectionDataInnerAttributes {
    return GetFlowResponseCollectionWithIncludedSectionDataInnerAttributesFromJSONTyped(json, false);
}

export function GetFlowResponseCollectionWithIncludedSectionDataInnerAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFlowResponseCollectionWithIncludedSectionDataInnerAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'archived': !exists(json, 'archived') ? undefined : json['archived'],
        'created': !exists(json, 'created') ? undefined : (new Date(json['created'])),
        'updated': !exists(json, 'updated') ? undefined : (new Date(json['updated'])),
        'triggerType': !exists(json, 'trigger_type') ? undefined : json['trigger_type'],
    };
}

export function GetFlowResponseCollectionWithIncludedSectionDataInnerAttributesToJSON(value?: GetFlowResponseCollectionWithIncludedSectionDataInnerAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'status': value.status,
        'archived': value.archived,
        'created': value.created === undefined ? undefined : (value.created.toISOString()),
        'updated': value.updated === undefined ? undefined : (value.updated.toISOString()),
        'trigger_type': value.triggerType,
    };
}

