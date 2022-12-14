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
import type { CatalogVariantDeleteQueryAsSubResource } from './CatalogVariantDeleteQueryAsSubResource';
import {
    CatalogVariantDeleteQueryAsSubResourceFromJSON,
    CatalogVariantDeleteQueryAsSubResourceFromJSONTyped,
    CatalogVariantDeleteQueryAsSubResourceToJSON,
} from './CatalogVariantDeleteQueryAsSubResource';

/**
 * 
 * @export
 * @interface CatalogVariantDeleteJobCreateQueryAsSubResourceAttributes
 */
export interface CatalogVariantDeleteJobCreateQueryAsSubResourceAttributes {
    /**
     * 
     * @type {Array<CatalogVariantDeleteQueryAsSubResource>}
     * @memberof CatalogVariantDeleteJobCreateQueryAsSubResourceAttributes
     */
    variants: Array<CatalogVariantDeleteQueryAsSubResource>;
}

/**
 * Check if a given object implements the CatalogVariantDeleteJobCreateQueryAsSubResourceAttributes interface.
 */
export function instanceOfCatalogVariantDeleteJobCreateQueryAsSubResourceAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "variants" in value;

    return isInstance;
}

export function CatalogVariantDeleteJobCreateQueryAsSubResourceAttributesFromJSON(json: any): CatalogVariantDeleteJobCreateQueryAsSubResourceAttributes {
    return CatalogVariantDeleteJobCreateQueryAsSubResourceAttributesFromJSONTyped(json, false);
}

export function CatalogVariantDeleteJobCreateQueryAsSubResourceAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogVariantDeleteJobCreateQueryAsSubResourceAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'variants': ((json['variants'] as Array<any>).map(CatalogVariantDeleteQueryAsSubResourceFromJSON)),
    };
}

export function CatalogVariantDeleteJobCreateQueryAsSubResourceAttributesToJSON(value?: CatalogVariantDeleteJobCreateQueryAsSubResourceAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'variants': ((value.variants as Array<any>).map(CatalogVariantDeleteQueryAsSubResourceToJSON)),
    };
}

