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
import type { CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes } from './CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes';
import {
    CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributesFromJSON,
    CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributesFromJSONTyped,
    CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributesToJSON,
} from './CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes';

/**
 * 
 * @export
 * @interface CatalogCategoryDeleteJobCreateQueryAsSubResource
 */
export interface CatalogCategoryDeleteJobCreateQueryAsSubResource {
    /**
     * 
     * @type {string}
     * @memberof CatalogCategoryDeleteJobCreateQueryAsSubResource
     */
    type: CatalogCategoryDeleteJobCreateQueryAsSubResourceTypeEnum;
    /**
     * 
     * @type {CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes}
     * @memberof CatalogCategoryDeleteJobCreateQueryAsSubResource
     */
    attributes: CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes;
}


/**
 * @export
 */
export const CatalogCategoryDeleteJobCreateQueryAsSubResourceTypeEnum = {
    CatalogCategoryBulkDeleteJob: 'catalog-category-bulk-delete-job'
} as const;
export type CatalogCategoryDeleteJobCreateQueryAsSubResourceTypeEnum = typeof CatalogCategoryDeleteJobCreateQueryAsSubResourceTypeEnum[keyof typeof CatalogCategoryDeleteJobCreateQueryAsSubResourceTypeEnum];


/**
 * Check if a given object implements the CatalogCategoryDeleteJobCreateQueryAsSubResource interface.
 */
export function instanceOfCatalogCategoryDeleteJobCreateQueryAsSubResource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function CatalogCategoryDeleteJobCreateQueryAsSubResourceFromJSON(json: any): CatalogCategoryDeleteJobCreateQueryAsSubResource {
    return CatalogCategoryDeleteJobCreateQueryAsSubResourceFromJSONTyped(json, false);
}

export function CatalogCategoryDeleteJobCreateQueryAsSubResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogCategoryDeleteJobCreateQueryAsSubResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributesFromJSON(json['attributes']),
    };
}

export function CatalogCategoryDeleteJobCreateQueryAsSubResourceToJSON(value?: CatalogCategoryDeleteJobCreateQueryAsSubResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributesToJSON(value.attributes),
    };
}

