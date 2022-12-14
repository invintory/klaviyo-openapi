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
import type { GetFlowMessageResponseCollectionDataInnerAttributes } from './GetFlowMessageResponseCollectionDataInnerAttributes';
import {
    GetFlowMessageResponseCollectionDataInnerAttributesFromJSON,
    GetFlowMessageResponseCollectionDataInnerAttributesFromJSONTyped,
    GetFlowMessageResponseCollectionDataInnerAttributesToJSON,
} from './GetFlowMessageResponseCollectionDataInnerAttributes';

/**
 * 
 * @export
 * @interface IncludedFlowMessages
 */
export interface IncludedFlowMessages {
    /**
     * 
     * @type {string}
     * @memberof IncludedFlowMessages
     */
    type: IncludedFlowMessagesTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof IncludedFlowMessages
     */
    id: string;
    /**
     * 
     * @type {GetFlowMessageResponseCollectionDataInnerAttributes}
     * @memberof IncludedFlowMessages
     */
    attributes: GetFlowMessageResponseCollectionDataInnerAttributes;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof IncludedFlowMessages
     */
    links: GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
}


/**
 * @export
 */
export const IncludedFlowMessagesTypeEnum = {
    FlowMessage: 'flow-message'
} as const;
export type IncludedFlowMessagesTypeEnum = typeof IncludedFlowMessagesTypeEnum[keyof typeof IncludedFlowMessagesTypeEnum];


/**
 * Check if a given object implements the IncludedFlowMessages interface.
 */
export function instanceOfIncludedFlowMessages(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function IncludedFlowMessagesFromJSON(json: any): IncludedFlowMessages {
    return IncludedFlowMessagesFromJSONTyped(json, false);
}

export function IncludedFlowMessagesFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncludedFlowMessages {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': GetFlowMessageResponseCollectionDataInnerAttributesFromJSON(json['attributes']),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksFromJSON(json['links']),
    };
}

export function IncludedFlowMessagesToJSON(value?: IncludedFlowMessages | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GetFlowMessageResponseCollectionDataInnerAttributesToJSON(value.attributes),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksToJSON(value.links),
    };
}

