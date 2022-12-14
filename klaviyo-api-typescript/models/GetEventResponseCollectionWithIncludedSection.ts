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
import type { GetEventResponseCollectionWithIncludedSectionDataInner } from './GetEventResponseCollectionWithIncludedSectionDataInner';
import {
    GetEventResponseCollectionWithIncludedSectionDataInnerFromJSON,
    GetEventResponseCollectionWithIncludedSectionDataInnerFromJSONTyped,
    GetEventResponseCollectionWithIncludedSectionDataInnerToJSON,
} from './GetEventResponseCollectionWithIncludedSectionDataInner';

/**
 * 
 * @export
 * @interface GetEventResponseCollectionWithIncludedSection
 */
export interface GetEventResponseCollectionWithIncludedSection {
    /**
     * 
     * @type {Array<GetEventResponseCollectionWithIncludedSectionDataInner>}
     * @memberof GetEventResponseCollectionWithIncludedSection
     */
    data: Array<GetEventResponseCollectionWithIncludedSectionDataInner>;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionLinks}
     * @memberof GetEventResponseCollectionWithIncludedSection
     */
    links: GetCatalogItemResponseCollectionWithIncludedSectionLinks;
}

/**
 * Check if a given object implements the GetEventResponseCollectionWithIncludedSection interface.
 */
export function instanceOfGetEventResponseCollectionWithIncludedSection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GetEventResponseCollectionWithIncludedSectionFromJSON(json: any): GetEventResponseCollectionWithIncludedSection {
    return GetEventResponseCollectionWithIncludedSectionFromJSONTyped(json, false);
}

export function GetEventResponseCollectionWithIncludedSectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetEventResponseCollectionWithIncludedSection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GetEventResponseCollectionWithIncludedSectionDataInnerFromJSON)),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionLinksFromJSON(json['links']),
    };
}

export function GetEventResponseCollectionWithIncludedSectionToJSON(value?: GetEventResponseCollectionWithIncludedSection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(GetEventResponseCollectionWithIncludedSectionDataInnerToJSON)),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionLinksToJSON(value.links),
    };
}
