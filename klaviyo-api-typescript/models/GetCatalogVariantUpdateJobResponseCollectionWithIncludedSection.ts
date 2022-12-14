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
import type { GetCatalogVariantUpdateJobResponseCollectionWithIncludedSectionDataInner } from './GetCatalogVariantUpdateJobResponseCollectionWithIncludedSectionDataInner';
import {
    GetCatalogVariantUpdateJobResponseCollectionWithIncludedSectionDataInnerFromJSON,
    GetCatalogVariantUpdateJobResponseCollectionWithIncludedSectionDataInnerFromJSONTyped,
    GetCatalogVariantUpdateJobResponseCollectionWithIncludedSectionDataInnerToJSON,
} from './GetCatalogVariantUpdateJobResponseCollectionWithIncludedSectionDataInner';

/**
 * 
 * @export
 * @interface GetCatalogVariantUpdateJobResponseCollectionWithIncludedSection
 */
export interface GetCatalogVariantUpdateJobResponseCollectionWithIncludedSection {
    /**
     * 
     * @type {Array<GetCatalogVariantUpdateJobResponseCollectionWithIncludedSectionDataInner>}
     * @memberof GetCatalogVariantUpdateJobResponseCollectionWithIncludedSection
     */
    data: Array<GetCatalogVariantUpdateJobResponseCollectionWithIncludedSectionDataInner>;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionLinks}
     * @memberof GetCatalogVariantUpdateJobResponseCollectionWithIncludedSection
     */
    links: GetCatalogItemResponseCollectionWithIncludedSectionLinks;
}

/**
 * Check if a given object implements the GetCatalogVariantUpdateJobResponseCollectionWithIncludedSection interface.
 */
export function instanceOfGetCatalogVariantUpdateJobResponseCollectionWithIncludedSection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GetCatalogVariantUpdateJobResponseCollectionWithIncludedSectionFromJSON(json: any): GetCatalogVariantUpdateJobResponseCollectionWithIncludedSection {
    return GetCatalogVariantUpdateJobResponseCollectionWithIncludedSectionFromJSONTyped(json, false);
}

export function GetCatalogVariantUpdateJobResponseCollectionWithIncludedSectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCatalogVariantUpdateJobResponseCollectionWithIncludedSection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GetCatalogVariantUpdateJobResponseCollectionWithIncludedSectionDataInnerFromJSON)),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionLinksFromJSON(json['links']),
    };
}

export function GetCatalogVariantUpdateJobResponseCollectionWithIncludedSectionToJSON(value?: GetCatalogVariantUpdateJobResponseCollectionWithIncludedSection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(GetCatalogVariantUpdateJobResponseCollectionWithIncludedSectionDataInnerToJSON)),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionLinksToJSON(value.links),
    };
}
