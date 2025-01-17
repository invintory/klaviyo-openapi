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
import type { GetCatalogItemResponseCollectionWithIncludedSectionLinks } from './GetCatalogItemResponseCollectionWithIncludedSectionLinks';
import {
    GetCatalogItemResponseCollectionWithIncludedSectionLinksFromJSON,
    GetCatalogItemResponseCollectionWithIncludedSectionLinksFromJSONTyped,
    GetCatalogItemResponseCollectionWithIncludedSectionLinksToJSON,
} from './GetCatalogItemResponseCollectionWithIncludedSectionLinks';
import type { GetSegmentResponseCollectionDataInner } from './GetSegmentResponseCollectionDataInner';
import {
    GetSegmentResponseCollectionDataInnerFromJSON,
    GetSegmentResponseCollectionDataInnerFromJSONTyped,
    GetSegmentResponseCollectionDataInnerToJSON,
} from './GetSegmentResponseCollectionDataInner';

/**
 * 
 * @export
 * @interface GetSegmentResponseCollection
 */
export interface GetSegmentResponseCollection {
    /**
     * 
     * @type {Array<GetSegmentResponseCollectionDataInner>}
     * @memberof GetSegmentResponseCollection
     */
    data: Array<GetSegmentResponseCollectionDataInner>;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionLinks}
     * @memberof GetSegmentResponseCollection
     */
    links: GetCatalogItemResponseCollectionWithIncludedSectionLinks;
}

/**
 * Check if a given object implements the GetSegmentResponseCollection interface.
 */
export function instanceOfGetSegmentResponseCollection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GetSegmentResponseCollectionFromJSON(json: any): GetSegmentResponseCollection {
    return GetSegmentResponseCollectionFromJSONTyped(json, false);
}

export function GetSegmentResponseCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSegmentResponseCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GetSegmentResponseCollectionDataInnerFromJSON)),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionLinksFromJSON(json['links']),
    };
}

export function GetSegmentResponseCollectionToJSON(value?: GetSegmentResponseCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(GetSegmentResponseCollectionDataInnerToJSON)),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionLinksToJSON(value.links),
    };
}

