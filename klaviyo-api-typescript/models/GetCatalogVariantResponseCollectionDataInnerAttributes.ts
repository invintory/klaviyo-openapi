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
/**
 * 
 * @export
 * @interface GetCatalogVariantResponseCollectionDataInnerAttributes
 */
export interface GetCatalogVariantResponseCollectionDataInnerAttributes {
    /**
     * 
     * @type {string}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    externalId?: string;
    /**
     * 
     * @type {string}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    sku?: string;
    /**
     * A field that controls product visibility in product feeds/blocks. This field has two options:     DENY (1): a product will not appear in dynamic product recommendation feeds and blocks if it is out of stock.     CONTINUE (2): a product can appear in dynamic product recommendation feeds and blocks regardless of inventory quantity.     UNKNOWN (0): the behavior will be the same as if it were set to 2 [Default]
     * @type {number}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    inventoryPolicy?: GetCatalogVariantResponseCollectionDataInnerAttributesInventoryPolicyEnum;
    /**
     * 
     * @type {number}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    inventoryQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    price?: number;
    /**
     * 
     * @type {string}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    imageFullUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    imageThumbnailUrl?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    images?: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    customMetadata?: object;
    /**
     * 
     * @type {boolean}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    published?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    created?: Date;
    /**
     * 
     * @type {Date}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    updated?: Date;
}


/**
 * @export
 */
export const GetCatalogVariantResponseCollectionDataInnerAttributesInventoryPolicyEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type GetCatalogVariantResponseCollectionDataInnerAttributesInventoryPolicyEnum = typeof GetCatalogVariantResponseCollectionDataInnerAttributesInventoryPolicyEnum[keyof typeof GetCatalogVariantResponseCollectionDataInnerAttributesInventoryPolicyEnum];


/**
 * Check if a given object implements the GetCatalogVariantResponseCollectionDataInnerAttributes interface.
 */
export function instanceOfGetCatalogVariantResponseCollectionDataInnerAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetCatalogVariantResponseCollectionDataInnerAttributesFromJSON(json: any): GetCatalogVariantResponseCollectionDataInnerAttributes {
    return GetCatalogVariantResponseCollectionDataInnerAttributesFromJSONTyped(json, false);
}

export function GetCatalogVariantResponseCollectionDataInnerAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCatalogVariantResponseCollectionDataInnerAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'externalId': !exists(json, 'external_id') ? undefined : json['external_id'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'inventoryPolicy': !exists(json, 'inventory_policy') ? undefined : json['inventory_policy'],
        'inventoryQuantity': !exists(json, 'inventory_quantity') ? undefined : json['inventory_quantity'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'imageFullUrl': !exists(json, 'image_full_url') ? undefined : json['image_full_url'],
        'imageThumbnailUrl': !exists(json, 'image_thumbnail_url') ? undefined : json['image_thumbnail_url'],
        'images': !exists(json, 'images') ? undefined : json['images'],
        'customMetadata': !exists(json, 'custom_metadata') ? undefined : json['custom_metadata'],
        'published': !exists(json, 'published') ? undefined : json['published'],
        'created': !exists(json, 'created') ? undefined : (new Date(json['created'])),
        'updated': !exists(json, 'updated') ? undefined : (new Date(json['updated'])),
    };
}

export function GetCatalogVariantResponseCollectionDataInnerAttributesToJSON(value?: GetCatalogVariantResponseCollectionDataInnerAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'external_id': value.externalId,
        'title': value.title,
        'description': value.description,
        'sku': value.sku,
        'inventory_policy': value.inventoryPolicy,
        'inventory_quantity': value.inventoryQuantity,
        'price': value.price,
        'url': value.url,
        'image_full_url': value.imageFullUrl,
        'image_thumbnail_url': value.imageThumbnailUrl,
        'images': value.images,
        'custom_metadata': value.customMetadata,
        'published': value.published,
        'created': value.created === undefined ? undefined : (value.created.toISOString()),
        'updated': value.updated === undefined ? undefined : (value.updated.toISOString()),
    };
}

