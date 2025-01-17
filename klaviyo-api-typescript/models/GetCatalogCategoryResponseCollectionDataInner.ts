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
import type { GetCatalogCategoryResponseCollectionDataInnerAttributes } from './GetCatalogCategoryResponseCollectionDataInnerAttributes';
import {
    GetCatalogCategoryResponseCollectionDataInnerAttributesFromJSON,
    GetCatalogCategoryResponseCollectionDataInnerAttributesFromJSONTyped,
    GetCatalogCategoryResponseCollectionDataInnerAttributesToJSON,
} from './GetCatalogCategoryResponseCollectionDataInnerAttributes';
import type { GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks } from './GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks';
import {
    GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksFromJSON,
    GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksFromJSONTyped,
    GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksToJSON,
} from './GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks';

/**
 * 
 * @export
 * @interface GetCatalogCategoryResponseCollectionDataInner
 */
export interface GetCatalogCategoryResponseCollectionDataInner {
    /**
     * 
     * @type {string}
     * @memberof GetCatalogCategoryResponseCollectionDataInner
     */
    type: GetCatalogCategoryResponseCollectionDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GetCatalogCategoryResponseCollectionDataInner
     */
    id: string;
    /**
     * 
     * @type {GetCatalogCategoryResponseCollectionDataInnerAttributes}
     * @memberof GetCatalogCategoryResponseCollectionDataInner
     */
    attributes: GetCatalogCategoryResponseCollectionDataInnerAttributes;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof GetCatalogCategoryResponseCollectionDataInner
     */
    links: GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
}


/**
 * @export
 */
export const GetCatalogCategoryResponseCollectionDataInnerTypeEnum = {
    CatalogCategory: 'catalog-category'
} as const;
export type GetCatalogCategoryResponseCollectionDataInnerTypeEnum = typeof GetCatalogCategoryResponseCollectionDataInnerTypeEnum[keyof typeof GetCatalogCategoryResponseCollectionDataInnerTypeEnum];


/**
 * Check if a given object implements the GetCatalogCategoryResponseCollectionDataInner interface.
 */
export function instanceOfGetCatalogCategoryResponseCollectionDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GetCatalogCategoryResponseCollectionDataInnerFromJSON(json: any): GetCatalogCategoryResponseCollectionDataInner {
    return GetCatalogCategoryResponseCollectionDataInnerFromJSONTyped(json, false);
}

export function GetCatalogCategoryResponseCollectionDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCatalogCategoryResponseCollectionDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': GetCatalogCategoryResponseCollectionDataInnerAttributesFromJSON(json['attributes']),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksFromJSON(json['links']),
    };
}

export function GetCatalogCategoryResponseCollectionDataInnerToJSON(value?: GetCatalogCategoryResponseCollectionDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GetCatalogCategoryResponseCollectionDataInnerAttributesToJSON(value.attributes),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksToJSON(value.links),
    };
}

