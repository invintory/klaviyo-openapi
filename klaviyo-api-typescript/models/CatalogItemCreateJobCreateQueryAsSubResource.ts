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
import type { CatalogItemCreateJobCreateQueryAsSubResourceAttributes } from './CatalogItemCreateJobCreateQueryAsSubResourceAttributes';
import {
    CatalogItemCreateJobCreateQueryAsSubResourceAttributesFromJSON,
    CatalogItemCreateJobCreateQueryAsSubResourceAttributesFromJSONTyped,
    CatalogItemCreateJobCreateQueryAsSubResourceAttributesToJSON,
} from './CatalogItemCreateJobCreateQueryAsSubResourceAttributes';

/**
 * 
 * @export
 * @interface CatalogItemCreateJobCreateQueryAsSubResource
 */
export interface CatalogItemCreateJobCreateQueryAsSubResource {
    /**
     * 
     * @type {string}
     * @memberof CatalogItemCreateJobCreateQueryAsSubResource
     */
    type: CatalogItemCreateJobCreateQueryAsSubResourceTypeEnum;
    /**
     * 
     * @type {CatalogItemCreateJobCreateQueryAsSubResourceAttributes}
     * @memberof CatalogItemCreateJobCreateQueryAsSubResource
     */
    attributes: CatalogItemCreateJobCreateQueryAsSubResourceAttributes;
}


/**
 * @export
 */
export const CatalogItemCreateJobCreateQueryAsSubResourceTypeEnum = {
    CatalogItemBulkCreateJob: 'catalog-item-bulk-create-job'
} as const;
export type CatalogItemCreateJobCreateQueryAsSubResourceTypeEnum = typeof CatalogItemCreateJobCreateQueryAsSubResourceTypeEnum[keyof typeof CatalogItemCreateJobCreateQueryAsSubResourceTypeEnum];


/**
 * Check if a given object implements the CatalogItemCreateJobCreateQueryAsSubResource interface.
 */
export function instanceOfCatalogItemCreateJobCreateQueryAsSubResource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function CatalogItemCreateJobCreateQueryAsSubResourceFromJSON(json: any): CatalogItemCreateJobCreateQueryAsSubResource {
    return CatalogItemCreateJobCreateQueryAsSubResourceFromJSONTyped(json, false);
}

export function CatalogItemCreateJobCreateQueryAsSubResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogItemCreateJobCreateQueryAsSubResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': CatalogItemCreateJobCreateQueryAsSubResourceAttributesFromJSON(json['attributes']),
    };
}

export function CatalogItemCreateJobCreateQueryAsSubResourceToJSON(value?: CatalogItemCreateJobCreateQueryAsSubResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': CatalogItemCreateJobCreateQueryAsSubResourceAttributesToJSON(value.attributes),
    };
}

