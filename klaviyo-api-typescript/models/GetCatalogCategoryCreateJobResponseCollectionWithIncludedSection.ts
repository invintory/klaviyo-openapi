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
import type { GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInner } from './GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInner';
import {
    GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerFromJSON,
    GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerFromJSONTyped,
    GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerToJSON,
} from './GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInner';
import type { GetCatalogItemResponseCollectionWithIncludedSectionLinks } from './GetCatalogItemResponseCollectionWithIncludedSectionLinks';
import {
    GetCatalogItemResponseCollectionWithIncludedSectionLinksFromJSON,
    GetCatalogItemResponseCollectionWithIncludedSectionLinksFromJSONTyped,
    GetCatalogItemResponseCollectionWithIncludedSectionLinksToJSON,
} from './GetCatalogItemResponseCollectionWithIncludedSectionLinks';

/**
 * 
 * @export
 * @interface GetCatalogCategoryCreateJobResponseCollectionWithIncludedSection
 */
export interface GetCatalogCategoryCreateJobResponseCollectionWithIncludedSection {
    /**
     * 
     * @type {Array<GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInner>}
     * @memberof GetCatalogCategoryCreateJobResponseCollectionWithIncludedSection
     */
    data: Array<GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInner>;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionLinks}
     * @memberof GetCatalogCategoryCreateJobResponseCollectionWithIncludedSection
     */
    links: GetCatalogItemResponseCollectionWithIncludedSectionLinks;
}

/**
 * Check if a given object implements the GetCatalogCategoryCreateJobResponseCollectionWithIncludedSection interface.
 */
export function instanceOfGetCatalogCategoryCreateJobResponseCollectionWithIncludedSection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionFromJSON(json: any): GetCatalogCategoryCreateJobResponseCollectionWithIncludedSection {
    return GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionFromJSONTyped(json, false);
}

export function GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCatalogCategoryCreateJobResponseCollectionWithIncludedSection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerFromJSON)),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionLinksFromJSON(json['links']),
    };
}

export function GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionToJSON(value?: GetCatalogCategoryCreateJobResponseCollectionWithIncludedSection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerToJSON)),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionLinksToJSON(value.links),
    };
}

