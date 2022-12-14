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
import type { GetFlowActionResponseCollectionDataInnerAttributes } from './GetFlowActionResponseCollectionDataInnerAttributes';
import {
    GetFlowActionResponseCollectionDataInnerAttributesFromJSON,
    GetFlowActionResponseCollectionDataInnerAttributesFromJSONTyped,
    GetFlowActionResponseCollectionDataInnerAttributesToJSON,
} from './GetFlowActionResponseCollectionDataInnerAttributes';
import type { GetFlowActionResponseWithIncludedSectionDataIncludedInner } from './GetFlowActionResponseWithIncludedSectionDataIncludedInner';
import {
    GetFlowActionResponseWithIncludedSectionDataIncludedInnerFromJSON,
    GetFlowActionResponseWithIncludedSectionDataIncludedInnerFromJSONTyped,
    GetFlowActionResponseWithIncludedSectionDataIncludedInnerToJSON,
} from './GetFlowActionResponseWithIncludedSectionDataIncludedInner';
import type { GetFlowActionResponseWithIncludedSectionDataRelationships } from './GetFlowActionResponseWithIncludedSectionDataRelationships';
import {
    GetFlowActionResponseWithIncludedSectionDataRelationshipsFromJSON,
    GetFlowActionResponseWithIncludedSectionDataRelationshipsFromJSONTyped,
    GetFlowActionResponseWithIncludedSectionDataRelationshipsToJSON,
} from './GetFlowActionResponseWithIncludedSectionDataRelationships';

/**
 * 
 * @export
 * @interface GetFlowActionResponseWithIncludedSectionData
 */
export interface GetFlowActionResponseWithIncludedSectionData {
    /**
     * 
     * @type {string}
     * @memberof GetFlowActionResponseWithIncludedSectionData
     */
    type: GetFlowActionResponseWithIncludedSectionDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GetFlowActionResponseWithIncludedSectionData
     */
    id: string;
    /**
     * 
     * @type {GetFlowActionResponseCollectionDataInnerAttributes}
     * @memberof GetFlowActionResponseWithIncludedSectionData
     */
    attributes: GetFlowActionResponseCollectionDataInnerAttributes;
    /**
     * 
     * @type {GetFlowActionResponseWithIncludedSectionDataRelationships}
     * @memberof GetFlowActionResponseWithIncludedSectionData
     */
    relationships?: GetFlowActionResponseWithIncludedSectionDataRelationships;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof GetFlowActionResponseWithIncludedSectionData
     */
    links: GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
    /**
     * 
     * @type {Array<GetFlowActionResponseWithIncludedSectionDataIncludedInner>}
     * @memberof GetFlowActionResponseWithIncludedSectionData
     */
    included?: Array<GetFlowActionResponseWithIncludedSectionDataIncludedInner>;
}


/**
 * @export
 */
export const GetFlowActionResponseWithIncludedSectionDataTypeEnum = {
    FlowAction: 'flow-action'
} as const;
export type GetFlowActionResponseWithIncludedSectionDataTypeEnum = typeof GetFlowActionResponseWithIncludedSectionDataTypeEnum[keyof typeof GetFlowActionResponseWithIncludedSectionDataTypeEnum];


/**
 * Check if a given object implements the GetFlowActionResponseWithIncludedSectionData interface.
 */
export function instanceOfGetFlowActionResponseWithIncludedSectionData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GetFlowActionResponseWithIncludedSectionDataFromJSON(json: any): GetFlowActionResponseWithIncludedSectionData {
    return GetFlowActionResponseWithIncludedSectionDataFromJSONTyped(json, false);
}

export function GetFlowActionResponseWithIncludedSectionDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFlowActionResponseWithIncludedSectionData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': GetFlowActionResponseCollectionDataInnerAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : GetFlowActionResponseWithIncludedSectionDataRelationshipsFromJSON(json['relationships']),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksFromJSON(json['links']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(GetFlowActionResponseWithIncludedSectionDataIncludedInnerFromJSON)),
    };
}

export function GetFlowActionResponseWithIncludedSectionDataToJSON(value?: GetFlowActionResponseWithIncludedSectionData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GetFlowActionResponseCollectionDataInnerAttributesToJSON(value.attributes),
        'relationships': GetFlowActionResponseWithIncludedSectionDataRelationshipsToJSON(value.relationships),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksToJSON(value.links),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(GetFlowActionResponseWithIncludedSectionDataIncludedInnerToJSON)),
    };
}

