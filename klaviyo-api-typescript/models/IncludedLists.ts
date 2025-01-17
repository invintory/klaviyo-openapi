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
 * @interface IncludedLists
 */
export interface IncludedLists {
    /**
     * 
     * @type {string}
     * @memberof IncludedLists
     */
    type: IncludedListsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof IncludedLists
     */
    id: string;
    /**
     * 
     * @type {GetListResponseCollectionWithIncludedSectionDataInnerAttributes}
     * @memberof IncludedLists
     */
    attributes: GetListResponseCollectionWithIncludedSectionDataInnerAttributes;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof IncludedLists
     */
    links: GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
}


/**
 * @export
 */
export const IncludedListsTypeEnum = {
    List: 'list'
} as const;
export type IncludedListsTypeEnum = typeof IncludedListsTypeEnum[keyof typeof IncludedListsTypeEnum];


/**
 * Check if a given object implements the IncludedLists interface.
 */
export function instanceOfIncludedLists(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function IncludedListsFromJSON(json: any): IncludedLists {
    return IncludedListsFromJSONTyped(json, false);
}

export function IncludedListsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncludedLists {
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

export function IncludedListsToJSON(value?: IncludedLists | null): any {
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

