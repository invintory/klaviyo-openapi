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


import * as runtime from '../runtime';
import type {
  GetCatalogItems4XXResponse,
  GetListRelationshipsResponseCollection,
  GetListResponseCollectionWithIncludedSection,
  GetListResponseWithIncludedSection,
  GetProfileResponseCollection,
  ListCreateQuery,
  ListMembersAddQuery,
  ListMembersDeleteQuery,
  ListPartialUpdateQuery,
  PatchListResponse,
  PostListResponse,
} from '../models';
import {
    GetCatalogItems4XXResponseFromJSON,
    GetCatalogItems4XXResponseToJSON,
    GetListRelationshipsResponseCollectionFromJSON,
    GetListRelationshipsResponseCollectionToJSON,
    GetListResponseCollectionWithIncludedSectionFromJSON,
    GetListResponseCollectionWithIncludedSectionToJSON,
    GetListResponseWithIncludedSectionFromJSON,
    GetListResponseWithIncludedSectionToJSON,
    GetProfileResponseCollectionFromJSON,
    GetProfileResponseCollectionToJSON,
    ListCreateQueryFromJSON,
    ListCreateQueryToJSON,
    ListMembersAddQueryFromJSON,
    ListMembersAddQueryToJSON,
    ListMembersDeleteQueryFromJSON,
    ListMembersDeleteQueryToJSON,
    ListPartialUpdateQueryFromJSON,
    ListPartialUpdateQueryToJSON,
    PatchListResponseFromJSON,
    PatchListResponseToJSON,
    PostListResponseFromJSON,
    PostListResponseToJSON,
} from '../models';

export interface CreateListRequest {
    revision: string;
    listCreateQuery: ListCreateQuery;
}

export interface CreateListRelationshipsRequest {
    id: string;
    relatedResource: CreateListRelationshipsRelatedResourceEnum;
    revision: string;
    listMembersAddQuery: ListMembersAddQuery;
}

export interface DeleteListRequest {
    id: string;
    revision: string;
}

export interface DeleteListRelationshipsRequest {
    id: string;
    relatedResource: DeleteListRelationshipsRelatedResourceEnum;
    revision: string;
    listMembersDeleteQuery: ListMembersDeleteQuery;
}

export interface GetListRequest {
    id: string;
    revision: string;
    fieldsList?: Array<GetListFieldsListEnum>;
    fieldsTag?: Array<GetListFieldsTagEnum>;
    include?: Array<GetListIncludeEnum>;
}

export interface GetListProfilesRequest {
    listId: string;
    revision: string;
    fieldsProfile?: Array<GetListProfilesFieldsProfileEnum>;
    filter?: string;
    pageCursor?: string;
}

export interface GetListRelationshipsRequest {
    id: string;
    relatedResource: GetListRelationshipsRelatedResourceEnum;
    revision: string;
    pageCursor?: string;
}

export interface GetListsRequest {
    revision: string;
    fieldsList?: Array<GetListsFieldsListEnum>;
    fieldsTag?: Array<GetListsFieldsTagEnum>;
    filter?: string;
    include?: Array<GetListsIncludeEnum>;
    pageCursor?: string;
}

export interface UpdateListRequest {
    id: string;
    revision: string;
    listPartialUpdateQuery: ListPartialUpdateQuery;
}

/**
 * 
 */
export class ListsApi extends runtime.BaseAPI {

    /**
     * Create a new list.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `List Write`
     * Create List
     */
    async createListRaw(requestParameters: CreateListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostListResponse>> {
        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling createList.');
        }

        if (requestParameters.listCreateQuery === null || requestParameters.listCreateQuery === undefined) {
            throw new runtime.RequiredError('listCreateQuery','Required parameter requestParameters.listCreateQuery was null or undefined when calling createList.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.revision !== undefined && requestParameters.revision !== null) {
            headerParameters['revision'] = String(requestParameters.revision);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Klaviyo-API-Key authentication
        }

        const response = await this.request({
            path: `/api/lists/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ListCreateQueryToJSON(requestParameters.listCreateQuery),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostListResponseFromJSON(jsonValue));
    }

    /**
     * Create a new list.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `List Write`
     * Create List
     */
    async createList(requestParameters: CreateListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostListResponse> {
        const response = await this.createListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add a profile to a list with the given list ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `List Write` `Profiles Write`
     * Add Profile to List
     */
    async createListRelationshipsRaw(requestParameters: CreateListRelationshipsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling createListRelationships.');
        }

        if (requestParameters.relatedResource === null || requestParameters.relatedResource === undefined) {
            throw new runtime.RequiredError('relatedResource','Required parameter requestParameters.relatedResource was null or undefined when calling createListRelationships.');
        }

        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling createListRelationships.');
        }

        if (requestParameters.listMembersAddQuery === null || requestParameters.listMembersAddQuery === undefined) {
            throw new runtime.RequiredError('listMembersAddQuery','Required parameter requestParameters.listMembersAddQuery was null or undefined when calling createListRelationships.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.revision !== undefined && requestParameters.revision !== null) {
            headerParameters['revision'] = String(requestParameters.revision);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Klaviyo-API-Key authentication
        }

        const response = await this.request({
            path: `/api/lists/{id}/relationships/{related_resource}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"related_resource"}}`, encodeURIComponent(String(requestParameters.relatedResource))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ListMembersAddQueryToJSON(requestParameters.listMembersAddQuery),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Add a profile to a list with the given list ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `List Write` `Profiles Write`
     * Add Profile to List
     */
    async createListRelationships(requestParameters: CreateListRelationshipsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.createListRelationshipsRaw(requestParameters, initOverrides);
    }

    /**
     * Delete a list with the given list ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `List Write`
     * Delete List
     */
    async deleteListRaw(requestParameters: DeleteListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteList.');
        }

        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling deleteList.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.revision !== undefined && requestParameters.revision !== null) {
            headerParameters['revision'] = String(requestParameters.revision);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Klaviyo-API-Key authentication
        }

        const response = await this.request({
            path: `/api/lists/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a list with the given list ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `List Write`
     * Delete List
     */
    async deleteList(requestParameters: DeleteListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteListRaw(requestParameters, initOverrides);
    }

    /**
     * Remove a profile from a list with the given list ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `List Write` `Profiles Write`
     * Remove Profile from List
     */
    async deleteListRelationshipsRaw(requestParameters: DeleteListRelationshipsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteListRelationships.');
        }

        if (requestParameters.relatedResource === null || requestParameters.relatedResource === undefined) {
            throw new runtime.RequiredError('relatedResource','Required parameter requestParameters.relatedResource was null or undefined when calling deleteListRelationships.');
        }

        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling deleteListRelationships.');
        }

        if (requestParameters.listMembersDeleteQuery === null || requestParameters.listMembersDeleteQuery === undefined) {
            throw new runtime.RequiredError('listMembersDeleteQuery','Required parameter requestParameters.listMembersDeleteQuery was null or undefined when calling deleteListRelationships.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.revision !== undefined && requestParameters.revision !== null) {
            headerParameters['revision'] = String(requestParameters.revision);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Klaviyo-API-Key authentication
        }

        const response = await this.request({
            path: `/api/lists/{id}/relationships/{related_resource}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"related_resource"}}`, encodeURIComponent(String(requestParameters.relatedResource))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: ListMembersDeleteQueryToJSON(requestParameters.listMembersDeleteQuery),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove a profile from a list with the given list ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `List Write` `Profiles Write`
     * Remove Profile from List
     */
    async deleteListRelationships(requestParameters: DeleteListRelationshipsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteListRelationshipsRaw(requestParameters, initOverrides);
    }

    /**
     * Get a list with the given list ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `List Write`
     * Get List
     */
    async getListRaw(requestParameters: GetListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetListResponseWithIncludedSection>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getList.');
        }

        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling getList.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsList) {
            queryParameters['fields[list]'] = requestParameters.fieldsList.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsTag) {
            queryParameters['fields[tag]'] = requestParameters.fieldsTag.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.revision !== undefined && requestParameters.revision !== null) {
            headerParameters['revision'] = String(requestParameters.revision);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Klaviyo-API-Key authentication
        }

        const response = await this.request({
            path: `/api/lists/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetListResponseWithIncludedSectionFromJSON(jsonValue));
    }

    /**
     * Get a list with the given list ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `List Write`
     * Get List
     */
    async getList(requestParameters: GetListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetListResponseWithIncludedSection> {
        const response = await this.getListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all profiles within a list with the given list ID. Filter to request a subset of all profiles. Profiles can be filtered by `email`, `phone_number`, and `push_token` fields. Returns a maximum of 10 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `List Read` `Profiles Read`
     * Get List Profiles
     */
    async getListProfilesRaw(requestParameters: GetListProfilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetProfileResponseCollection>> {
        if (requestParameters.listId === null || requestParameters.listId === undefined) {
            throw new runtime.RequiredError('listId','Required parameter requestParameters.listId was null or undefined when calling getListProfiles.');
        }

        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling getListProfiles.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsProfile) {
            queryParameters['fields[profile]'] = requestParameters.fieldsProfile.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.pageCursor !== undefined) {
            queryParameters['page[cursor]'] = requestParameters.pageCursor;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.revision !== undefined && requestParameters.revision !== null) {
            headerParameters['revision'] = String(requestParameters.revision);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Klaviyo-API-Key authentication
        }

        const response = await this.request({
            path: `/api/lists/{list_id}/profiles/`.replace(`{${"list_id"}}`, encodeURIComponent(String(requestParameters.listId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetProfileResponseCollectionFromJSON(jsonValue));
    }

    /**
     * Get all profiles within a list with the given list ID. Filter to request a subset of all profiles. Profiles can be filtered by `email`, `phone_number`, and `push_token` fields. Returns a maximum of 10 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `List Read` `Profiles Read`
     * Get List Profiles
     */
    async getListProfiles(requestParameters: GetListProfilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetProfileResponseCollection> {
        const response = await this.getListProfilesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get profile membership [relationships](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#relationships) for a list with the given list ID. Returns a maximum of 10 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `List Read` `Profiles Read`
     * Get List Relationships
     */
    async getListRelationshipsRaw(requestParameters: GetListRelationshipsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetListRelationshipsResponseCollection>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getListRelationships.');
        }

        if (requestParameters.relatedResource === null || requestParameters.relatedResource === undefined) {
            throw new runtime.RequiredError('relatedResource','Required parameter requestParameters.relatedResource was null or undefined when calling getListRelationships.');
        }

        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling getListRelationships.');
        }

        const queryParameters: any = {};

        if (requestParameters.pageCursor !== undefined) {
            queryParameters['page[cursor]'] = requestParameters.pageCursor;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.revision !== undefined && requestParameters.revision !== null) {
            headerParameters['revision'] = String(requestParameters.revision);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Klaviyo-API-Key authentication
        }

        const response = await this.request({
            path: `/api/lists/{id}/relationships/{related_resource}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"related_resource"}}`, encodeURIComponent(String(requestParameters.relatedResource))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetListRelationshipsResponseCollectionFromJSON(jsonValue));
    }

    /**
     * Get profile membership [relationships](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#relationships) for a list with the given list ID. Returns a maximum of 10 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `List Read` `Profiles Read`
     * Get List Relationships
     */
    async getListRelationships(requestParameters: GetListRelationshipsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetListRelationshipsResponseCollection> {
        const response = await this.getListRelationshipsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all lists in an account. Filter to request a subset of all lists. Lists can be filtered by `id`, `name`, `created`, and `updated` fields. Returns a maximum of 10 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `List Read`
     * Get Lists
     */
    async getListsRaw(requestParameters: GetListsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetListResponseCollectionWithIncludedSection>> {
        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling getLists.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsList) {
            queryParameters['fields[list]'] = requestParameters.fieldsList.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsTag) {
            queryParameters['fields[tag]'] = requestParameters.fieldsTag.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include;
        }

        if (requestParameters.pageCursor !== undefined) {
            queryParameters['page[cursor]'] = requestParameters.pageCursor;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.revision !== undefined && requestParameters.revision !== null) {
            headerParameters['revision'] = String(requestParameters.revision);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Klaviyo-API-Key authentication
        }

        const response = await this.request({
            path: `/api/lists/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetListResponseCollectionWithIncludedSectionFromJSON(jsonValue));
    }

    /**
     * Get all lists in an account. Filter to request a subset of all lists. Lists can be filtered by `id`, `name`, `created`, and `updated` fields. Returns a maximum of 10 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `List Read`
     * Get Lists
     */
    async getLists(requestParameters: GetListsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetListResponseCollectionWithIncludedSection> {
        const response = await this.getListsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the name of a list with the given list ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `List Write`
     * Update List
     */
    async updateListRaw(requestParameters: UpdateListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PatchListResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateList.');
        }

        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling updateList.');
        }

        if (requestParameters.listPartialUpdateQuery === null || requestParameters.listPartialUpdateQuery === undefined) {
            throw new runtime.RequiredError('listPartialUpdateQuery','Required parameter requestParameters.listPartialUpdateQuery was null or undefined when calling updateList.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.revision !== undefined && requestParameters.revision !== null) {
            headerParameters['revision'] = String(requestParameters.revision);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Klaviyo-API-Key authentication
        }

        const response = await this.request({
            path: `/api/lists/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ListPartialUpdateQueryToJSON(requestParameters.listPartialUpdateQuery),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PatchListResponseFromJSON(jsonValue));
    }

    /**
     * Update the name of a list with the given list ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `List Write`
     * Update List
     */
    async updateList(requestParameters: UpdateListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PatchListResponse> {
        const response = await this.updateListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CreateListRelationshipsRelatedResourceEnum = {
    Profiles: 'profiles',
    Tags: 'tags'
} as const;
export type CreateListRelationshipsRelatedResourceEnum = typeof CreateListRelationshipsRelatedResourceEnum[keyof typeof CreateListRelationshipsRelatedResourceEnum];
/**
 * @export
 */
export const DeleteListRelationshipsRelatedResourceEnum = {
    Profiles: 'profiles',
    Tags: 'tags'
} as const;
export type DeleteListRelationshipsRelatedResourceEnum = typeof DeleteListRelationshipsRelatedResourceEnum[keyof typeof DeleteListRelationshipsRelatedResourceEnum];
/**
 * @export
 */
export const GetListFieldsListEnum = {
    Name: 'name',
    Created: 'created',
    Updated: 'updated'
} as const;
export type GetListFieldsListEnum = typeof GetListFieldsListEnum[keyof typeof GetListFieldsListEnum];
/**
 * @export
 */
export const GetListFieldsTagEnum = {
    Name: 'name'
} as const;
export type GetListFieldsTagEnum = typeof GetListFieldsTagEnum[keyof typeof GetListFieldsTagEnum];
/**
 * @export
 */
export const GetListIncludeEnum = {
    Tags: 'tags'
} as const;
export type GetListIncludeEnum = typeof GetListIncludeEnum[keyof typeof GetListIncludeEnum];
/**
 * @export
 */
export const GetListProfilesFieldsProfileEnum = {
    Email: 'email',
    PhoneNumber: 'phone_number',
    ExternalId: 'external_id',
    AnonymousId: 'anonymous_id',
    FirstName: 'first_name',
    LastName: 'last_name',
    Organization: 'organization',
    Title: 'title',
    Image: 'image',
    Created: 'created',
    Updated: 'updated',
    LastEventDate: 'last_event_date',
    Location: 'location',
    LocationAddress1: 'location.address1',
    LocationAddress2: 'location.address2',
    LocationCity: 'location.city',
    LocationCountry: 'location.country',
    LocationLatitude: 'location.latitude',
    LocationLongitude: 'location.longitude',
    LocationRegion: 'location.region',
    LocationZip: 'location.zip',
    LocationTimezone: 'location.timezone',
    Properties: 'properties'
} as const;
export type GetListProfilesFieldsProfileEnum = typeof GetListProfilesFieldsProfileEnum[keyof typeof GetListProfilesFieldsProfileEnum];
/**
 * @export
 */
export const GetListRelationshipsRelatedResourceEnum = {
    Profiles: 'profiles',
    Tags: 'tags'
} as const;
export type GetListRelationshipsRelatedResourceEnum = typeof GetListRelationshipsRelatedResourceEnum[keyof typeof GetListRelationshipsRelatedResourceEnum];
/**
 * @export
 */
export const GetListsFieldsListEnum = {
    Name: 'name',
    Created: 'created',
    Updated: 'updated'
} as const;
export type GetListsFieldsListEnum = typeof GetListsFieldsListEnum[keyof typeof GetListsFieldsListEnum];
/**
 * @export
 */
export const GetListsFieldsTagEnum = {
    Name: 'name'
} as const;
export type GetListsFieldsTagEnum = typeof GetListsFieldsTagEnum[keyof typeof GetListsFieldsTagEnum];
/**
 * @export
 */
export const GetListsIncludeEnum = {
    Tags: 'tags'
} as const;
export type GetListsIncludeEnum = typeof GetListsIncludeEnum[keyof typeof GetListsIncludeEnum];
