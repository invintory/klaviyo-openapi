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
import type { GetFlowMessageResponseCollectionDataInner } from './GetFlowMessageResponseCollectionDataInner';
import {
    GetFlowMessageResponseCollectionDataInnerFromJSON,
    GetFlowMessageResponseCollectionDataInnerFromJSONTyped,
    GetFlowMessageResponseCollectionDataInnerToJSON,
} from './GetFlowMessageResponseCollectionDataInner';

/**
 * 
 * @export
 * @interface GetFlowMessageResponseCollection
 */
export interface GetFlowMessageResponseCollection {
    /**
     * 
     * @type {Array<GetFlowMessageResponseCollectionDataInner>}
     * @memberof GetFlowMessageResponseCollection
     */
    data: Array<GetFlowMessageResponseCollectionDataInner>;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionLinks}
     * @memberof GetFlowMessageResponseCollection
     */
    links: GetCatalogItemResponseCollectionWithIncludedSectionLinks;
}

/**
 * Check if a given object implements the GetFlowMessageResponseCollection interface.
 */
export function instanceOfGetFlowMessageResponseCollection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GetFlowMessageResponseCollectionFromJSON(json: any): GetFlowMessageResponseCollection {
    return GetFlowMessageResponseCollectionFromJSONTyped(json, false);
}

export function GetFlowMessageResponseCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFlowMessageResponseCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GetFlowMessageResponseCollectionDataInnerFromJSON)),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionLinksFromJSON(json['links']),
    };
}

export function GetFlowMessageResponseCollectionToJSON(value?: GetFlowMessageResponseCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(GetFlowMessageResponseCollectionDataInnerToJSON)),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionLinksToJSON(value.links),
    };
}

