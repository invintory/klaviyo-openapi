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
import type { GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks } from './GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks';
import {
    GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksFromJSON,
    GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksFromJSONTyped,
    GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksToJSON,
} from './GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks';
import type { GetMetricResponseCollectionDataInnerAttributes } from './GetMetricResponseCollectionDataInnerAttributes';
import {
    GetMetricResponseCollectionDataInnerAttributesFromJSON,
    GetMetricResponseCollectionDataInnerAttributesFromJSONTyped,
    GetMetricResponseCollectionDataInnerAttributesToJSON,
} from './GetMetricResponseCollectionDataInnerAttributes';

/**
 * 
 * @export
 * @interface GetMetricResponseCollectionDataInner
 */
export interface GetMetricResponseCollectionDataInner {
    /**
     * 
     * @type {string}
     * @memberof GetMetricResponseCollectionDataInner
     */
    type: GetMetricResponseCollectionDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GetMetricResponseCollectionDataInner
     */
    id: string;
    /**
     * 
     * @type {GetMetricResponseCollectionDataInnerAttributes}
     * @memberof GetMetricResponseCollectionDataInner
     */
    attributes: GetMetricResponseCollectionDataInnerAttributes;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof GetMetricResponseCollectionDataInner
     */
    links: GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
}


/**
 * @export
 */
export const GetMetricResponseCollectionDataInnerTypeEnum = {
    Metric: 'metric'
} as const;
export type GetMetricResponseCollectionDataInnerTypeEnum = typeof GetMetricResponseCollectionDataInnerTypeEnum[keyof typeof GetMetricResponseCollectionDataInnerTypeEnum];


/**
 * Check if a given object implements the GetMetricResponseCollectionDataInner interface.
 */
export function instanceOfGetMetricResponseCollectionDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GetMetricResponseCollectionDataInnerFromJSON(json: any): GetMetricResponseCollectionDataInner {
    return GetMetricResponseCollectionDataInnerFromJSONTyped(json, false);
}

export function GetMetricResponseCollectionDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMetricResponseCollectionDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': GetMetricResponseCollectionDataInnerAttributesFromJSON(json['attributes']),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksFromJSON(json['links']),
    };
}

export function GetMetricResponseCollectionDataInnerToJSON(value?: GetMetricResponseCollectionDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GetMetricResponseCollectionDataInnerAttributesToJSON(value.attributes),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksToJSON(value.links),
    };
}

