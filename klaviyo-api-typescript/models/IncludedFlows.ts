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
import type { GetFlowResponseCollectionWithIncludedSectionDataInnerAttributes } from './GetFlowResponseCollectionWithIncludedSectionDataInnerAttributes';
import {
    GetFlowResponseCollectionWithIncludedSectionDataInnerAttributesFromJSON,
    GetFlowResponseCollectionWithIncludedSectionDataInnerAttributesFromJSONTyped,
    GetFlowResponseCollectionWithIncludedSectionDataInnerAttributesToJSON,
} from './GetFlowResponseCollectionWithIncludedSectionDataInnerAttributes';

/**
 * 
 * @export
 * @interface IncludedFlows
 */
export interface IncludedFlows {
    /**
     * 
     * @type {string}
     * @memberof IncludedFlows
     */
    type: IncludedFlowsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof IncludedFlows
     */
    id: string;
    /**
     * 
     * @type {GetFlowResponseCollectionWithIncludedSectionDataInnerAttributes}
     * @memberof IncludedFlows
     */
    attributes: GetFlowResponseCollectionWithIncludedSectionDataInnerAttributes;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof IncludedFlows
     */
    links: GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
}


/**
 * @export
 */
export const IncludedFlowsTypeEnum = {
    Flow: 'flow'
} as const;
export type IncludedFlowsTypeEnum = typeof IncludedFlowsTypeEnum[keyof typeof IncludedFlowsTypeEnum];


/**
 * Check if a given object implements the IncludedFlows interface.
 */
export function instanceOfIncludedFlows(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function IncludedFlowsFromJSON(json: any): IncludedFlows {
    return IncludedFlowsFromJSONTyped(json, false);
}

export function IncludedFlowsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncludedFlows {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': GetFlowResponseCollectionWithIncludedSectionDataInnerAttributesFromJSON(json['attributes']),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksFromJSON(json['links']),
    };
}

export function IncludedFlowsToJSON(value?: IncludedFlows | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GetFlowResponseCollectionWithIncludedSectionDataInnerAttributesToJSON(value.attributes),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksToJSON(value.links),
    };
}

