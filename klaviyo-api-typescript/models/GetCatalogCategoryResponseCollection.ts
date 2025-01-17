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
import type { GetCatalogCategoryResponseCollectionDataInner } from './GetCatalogCategoryResponseCollectionDataInner';
import {
    GetCatalogCategoryResponseCollectionDataInnerFromJSON,
    GetCatalogCategoryResponseCollectionDataInnerFromJSONTyped,
    GetCatalogCategoryResponseCollectionDataInnerToJSON,
} from './GetCatalogCategoryResponseCollectionDataInner';
import type { GetCatalogItemResponseCollectionWithIncludedSectionLinks } from './GetCatalogItemResponseCollectionWithIncludedSectionLinks';
import {
    GetCatalogItemResponseCollectionWithIncludedSectionLinksFromJSON,
    GetCatalogItemResponseCollectionWithIncludedSectionLinksFromJSONTyped,
    GetCatalogItemResponseCollectionWithIncludedSectionLinksToJSON,
} from './GetCatalogItemResponseCollectionWithIncludedSectionLinks';

/**
 * 
 * @export
 * @interface GetCatalogCategoryResponseCollection
 */
export interface GetCatalogCategoryResponseCollection {
    /**
     * 
     * @type {Array<GetCatalogCategoryResponseCollectionDataInner>}
     * @memberof GetCatalogCategoryResponseCollection
     */
    data: Array<GetCatalogCategoryResponseCollectionDataInner>;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionLinks}
     * @memberof GetCatalogCategoryResponseCollection
     */
    links: GetCatalogItemResponseCollectionWithIncludedSectionLinks;
}

/**
 * Check if a given object implements the GetCatalogCategoryResponseCollection interface.
 */
export function instanceOfGetCatalogCategoryResponseCollection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GetCatalogCategoryResponseCollectionFromJSON(json: any): GetCatalogCategoryResponseCollection {
    return GetCatalogCategoryResponseCollectionFromJSONTyped(json, false);
}

export function GetCatalogCategoryResponseCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCatalogCategoryResponseCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GetCatalogCategoryResponseCollectionDataInnerFromJSON)),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionLinksFromJSON(json['links']),
    };
}

export function GetCatalogCategoryResponseCollectionToJSON(value?: GetCatalogCategoryResponseCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(GetCatalogCategoryResponseCollectionDataInnerToJSON)),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionLinksToJSON(value.links),
    };
}

