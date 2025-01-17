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
import type { GetListResponseCollectionWithIncludedSectionDataInnerAttributes } from './GetListResponseCollectionWithIncludedSectionDataInnerAttributes';
import {
    GetListResponseCollectionWithIncludedSectionDataInnerAttributesFromJSON,
    GetListResponseCollectionWithIncludedSectionDataInnerAttributesFromJSONTyped,
    GetListResponseCollectionWithIncludedSectionDataInnerAttributesToJSON,
} from './GetListResponseCollectionWithIncludedSectionDataInnerAttributes';

/**
 * 
 * @export
 * @interface GetListResponseCollectionDataInner
 */
export interface GetListResponseCollectionDataInner {
    /**
     * 
     * @type {string}
     * @memberof GetListResponseCollectionDataInner
     */
    type: GetListResponseCollectionDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GetListResponseCollectionDataInner
     */
    id: string;
    /**
     * 
     * @type {GetListResponseCollectionWithIncludedSectionDataInnerAttributes}
     * @memberof GetListResponseCollectionDataInner
     */
    attributes: GetListResponseCollectionWithIncludedSectionDataInnerAttributes;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof GetListResponseCollectionDataInner
     */
    links: GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
}


/**
 * @export
 */
export const GetListResponseCollectionDataInnerTypeEnum = {
    List: 'list'
} as const;
export type GetListResponseCollectionDataInnerTypeEnum = typeof GetListResponseCollectionDataInnerTypeEnum[keyof typeof GetListResponseCollectionDataInnerTypeEnum];


/**
 * Check if a given object implements the GetListResponseCollectionDataInner interface.
 */
export function instanceOfGetListResponseCollectionDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GetListResponseCollectionDataInnerFromJSON(json: any): GetListResponseCollectionDataInner {
    return GetListResponseCollectionDataInnerFromJSONTyped(json, false);
}

export function GetListResponseCollectionDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetListResponseCollectionDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': GetListResponseCollectionWithIncludedSectionDataInnerAttributesFromJSON(json['attributes']),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksFromJSON(json['links']),
    };
}

export function GetListResponseCollectionDataInnerToJSON(value?: GetListResponseCollectionDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GetListResponseCollectionWithIncludedSectionDataInnerAttributesToJSON(value.attributes),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksToJSON(value.links),
    };
}

