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
import type { GetFlowResponseCollectionWithIncludedSectionDataInner } from './GetFlowResponseCollectionWithIncludedSectionDataInner';
import {
    GetFlowResponseCollectionWithIncludedSectionDataInnerFromJSON,
    GetFlowResponseCollectionWithIncludedSectionDataInnerFromJSONTyped,
    GetFlowResponseCollectionWithIncludedSectionDataInnerToJSON,
} from './GetFlowResponseCollectionWithIncludedSectionDataInner';

/**
 * 
 * @export
 * @interface GetFlowResponseCollectionWithIncludedSection
 */
export interface GetFlowResponseCollectionWithIncludedSection {
    /**
     * 
     * @type {Array<GetFlowResponseCollectionWithIncludedSectionDataInner>}
     * @memberof GetFlowResponseCollectionWithIncludedSection
     */
    data: Array<GetFlowResponseCollectionWithIncludedSectionDataInner>;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionLinks}
     * @memberof GetFlowResponseCollectionWithIncludedSection
     */
    links: GetCatalogItemResponseCollectionWithIncludedSectionLinks;
}

/**
 * Check if a given object implements the GetFlowResponseCollectionWithIncludedSection interface.
 */
export function instanceOfGetFlowResponseCollectionWithIncludedSection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GetFlowResponseCollectionWithIncludedSectionFromJSON(json: any): GetFlowResponseCollectionWithIncludedSection {
    return GetFlowResponseCollectionWithIncludedSectionFromJSONTyped(json, false);
}

export function GetFlowResponseCollectionWithIncludedSectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFlowResponseCollectionWithIncludedSection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GetFlowResponseCollectionWithIncludedSectionDataInnerFromJSON)),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionLinksFromJSON(json['links']),
    };
}

export function GetFlowResponseCollectionWithIncludedSectionToJSON(value?: GetFlowResponseCollectionWithIncludedSection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(GetFlowResponseCollectionWithIncludedSectionDataInnerToJSON)),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionLinksToJSON(value.links),
    };
}
