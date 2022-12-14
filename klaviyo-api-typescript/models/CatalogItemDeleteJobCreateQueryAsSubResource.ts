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
import type { CatalogItemDeleteJobCreateQueryAsSubResourceAttributes } from './CatalogItemDeleteJobCreateQueryAsSubResourceAttributes';
import {
    CatalogItemDeleteJobCreateQueryAsSubResourceAttributesFromJSON,
    CatalogItemDeleteJobCreateQueryAsSubResourceAttributesFromJSONTyped,
    CatalogItemDeleteJobCreateQueryAsSubResourceAttributesToJSON,
} from './CatalogItemDeleteJobCreateQueryAsSubResourceAttributes';

/**
 * 
 * @export
 * @interface CatalogItemDeleteJobCreateQueryAsSubResource
 */
export interface CatalogItemDeleteJobCreateQueryAsSubResource {
    /**
     * 
     * @type {string}
     * @memberof CatalogItemDeleteJobCreateQueryAsSubResource
     */
    type: CatalogItemDeleteJobCreateQueryAsSubResourceTypeEnum;
    /**
     * 
     * @type {CatalogItemDeleteJobCreateQueryAsSubResourceAttributes}
     * @memberof CatalogItemDeleteJobCreateQueryAsSubResource
     */
    attributes: CatalogItemDeleteJobCreateQueryAsSubResourceAttributes;
}


/**
 * @export
 */
export const CatalogItemDeleteJobCreateQueryAsSubResourceTypeEnum = {
    CatalogItemBulkDeleteJob: 'catalog-item-bulk-delete-job'
} as const;
export type CatalogItemDeleteJobCreateQueryAsSubResourceTypeEnum = typeof CatalogItemDeleteJobCreateQueryAsSubResourceTypeEnum[keyof typeof CatalogItemDeleteJobCreateQueryAsSubResourceTypeEnum];


/**
 * Check if a given object implements the CatalogItemDeleteJobCreateQueryAsSubResource interface.
 */
export function instanceOfCatalogItemDeleteJobCreateQueryAsSubResource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function CatalogItemDeleteJobCreateQueryAsSubResourceFromJSON(json: any): CatalogItemDeleteJobCreateQueryAsSubResource {
    return CatalogItemDeleteJobCreateQueryAsSubResourceFromJSONTyped(json, false);
}

export function CatalogItemDeleteJobCreateQueryAsSubResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogItemDeleteJobCreateQueryAsSubResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': CatalogItemDeleteJobCreateQueryAsSubResourceAttributesFromJSON(json['attributes']),
    };
}

export function CatalogItemDeleteJobCreateQueryAsSubResourceToJSON(value?: CatalogItemDeleteJobCreateQueryAsSubResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': CatalogItemDeleteJobCreateQueryAsSubResourceAttributesToJSON(value.attributes),
    };
}
