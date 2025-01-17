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
import type { CatalogVariantUpdateQueryAsSubResource } from './CatalogVariantUpdateQueryAsSubResource';
import {
    CatalogVariantUpdateQueryAsSubResourceFromJSON,
    CatalogVariantUpdateQueryAsSubResourceFromJSONTyped,
    CatalogVariantUpdateQueryAsSubResourceToJSON,
} from './CatalogVariantUpdateQueryAsSubResource';

/**
 * 
 * @export
 * @interface CatalogVariantUpdateJobCreateQueryAsSubResourceAttributes
 */
export interface CatalogVariantUpdateJobCreateQueryAsSubResourceAttributes {
    /**
     * 
     * @type {Array<CatalogVariantUpdateQueryAsSubResource>}
     * @memberof CatalogVariantUpdateJobCreateQueryAsSubResourceAttributes
     */
    variants: Array<CatalogVariantUpdateQueryAsSubResource>;
}

/**
 * Check if a given object implements the CatalogVariantUpdateJobCreateQueryAsSubResourceAttributes interface.
 */
export function instanceOfCatalogVariantUpdateJobCreateQueryAsSubResourceAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "variants" in value;

    return isInstance;
}

export function CatalogVariantUpdateJobCreateQueryAsSubResourceAttributesFromJSON(json: any): CatalogVariantUpdateJobCreateQueryAsSubResourceAttributes {
    return CatalogVariantUpdateJobCreateQueryAsSubResourceAttributesFromJSONTyped(json, false);
}

export function CatalogVariantUpdateJobCreateQueryAsSubResourceAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogVariantUpdateJobCreateQueryAsSubResourceAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'variants': ((json['variants'] as Array<any>).map(CatalogVariantUpdateQueryAsSubResourceFromJSON)),
    };
}

export function CatalogVariantUpdateJobCreateQueryAsSubResourceAttributesToJSON(value?: CatalogVariantUpdateJobCreateQueryAsSubResourceAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'variants': ((value.variants as Array<any>).map(CatalogVariantUpdateQueryAsSubResourceToJSON)),
    };
}

