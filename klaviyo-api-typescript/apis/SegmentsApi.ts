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
  GetProfileResponseCollection,
  GetSegmentRelationshipsResponseCollection,
  GetSegmentResponseCollectionWithIncludedSection,
  GetSegmentResponseWithIncludedSection,
  PatchSegmentResponse,
  SegmentPartialUpdateQuery,
} from '../models';
import {
    GetCatalogItems4XXResponseFromJSON,
    GetCatalogItems4XXResponseToJSON,
    GetProfileResponseCollectionFromJSON,
    GetProfileResponseCollectionToJSON,
    GetSegmentRelationshipsResponseCollectionFromJSON,
    GetSegmentRelationshipsResponseCollectionToJSON,
    GetSegmentResponseCollectionWithIncludedSectionFromJSON,
    GetSegmentResponseCollectionWithIncludedSectionToJSON,
    GetSegmentResponseWithIncludedSectionFromJSON,
    GetSegmentResponseWithIncludedSectionToJSON,
    PatchSegmentResponseFromJSON,
    PatchSegmentResponseToJSON,
    SegmentPartialUpdateQueryFromJSON,
    SegmentPartialUpdateQueryToJSON,
} from '../models';

export interface GetSegmentRequest {
    id: string;
    revision: string;
    fieldsSegment?: Array<GetSegmentFieldsSegmentEnum>;
    fieldsTag?: Array<GetSegmentFieldsTagEnum>;
    include?: Array<GetSegmentIncludeEnum>;
}

export interface GetSegmentProfilesRequest {
    segmentId: string;
    revision: string;
    fieldsProfile?: Array<GetSegmentProfilesFieldsProfileEnum>;
    filter?: string;
    pageCursor?: string;
}

export interface GetSegmentRelationshipsRequest {
    id: string;
    relatedResource: GetSegmentRelationshipsRelatedResourceEnum;
    revision: string;
    pageCursor?: string;
}

export interface GetSegmentsRequest {
    revision: string;
    fieldsSegment?: Array<GetSegmentsFieldsSegmentEnum>;
    fieldsTag?: Array<GetSegmentsFieldsTagEnum>;
    filter?: string;
    include?: Array<GetSegmentsIncludeEnum>;
    pageCursor?: string;
}

export interface UpdateSegmentRequest {
    id: string;
    revision: string;
    segmentPartialUpdateQuery: SegmentPartialUpdateQuery;
}

/**
 * 
 */
export class SegmentsApi extends runtime.BaseAPI {

    /**
     * Get a segment with the given segment ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Segments Read`
     * Get Segment
     */
    async getSegmentRaw(requestParameters: GetSegmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetSegmentResponseWithIncludedSection>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSegment.');
        }

        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling getSegment.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsSegment) {
            queryParameters['fields[segment]'] = requestParameters.fieldsSegment.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/api/segments/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetSegmentResponseWithIncludedSectionFromJSON(jsonValue));
    }

    /**
     * Get a segment with the given segment ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Segments Read`
     * Get Segment
     */
    async getSegment(requestParameters: GetSegmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetSegmentResponseWithIncludedSection> {
        const response = await this.getSegmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all profiles within the given segment ID. Filter to request a subset of all profiles. Profiles can be filtered by `email`, `phone_number`, and `push_token` fields. Returns a maximum of 10 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Profiles Read` `Segments Read`
     * Get Segment Profiles
     */
    async getSegmentProfilesRaw(requestParameters: GetSegmentProfilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetProfileResponseCollection>> {
        if (requestParameters.segmentId === null || requestParameters.segmentId === undefined) {
            throw new runtime.RequiredError('segmentId','Required parameter requestParameters.segmentId was null or undefined when calling getSegmentProfiles.');
        }

        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling getSegmentProfiles.');
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
            path: `/api/segments/{segment_id}/profiles/`.replace(`{${"segment_id"}}`, encodeURIComponent(String(requestParameters.segmentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetProfileResponseCollectionFromJSON(jsonValue));
    }

    /**
     * Get all profiles within the given segment ID. Filter to request a subset of all profiles. Profiles can be filtered by `email`, `phone_number`, and `push_token` fields. Returns a maximum of 10 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Profiles Read` `Segments Read`
     * Get Segment Profiles
     */
    async getSegmentProfiles(requestParameters: GetSegmentProfilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetProfileResponseCollection> {
        const response = await this.getSegmentProfilesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all profile membership [relationships](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#relationships) for the given segment ID. Returns a maximum of 10 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Profiles Read` `Segments Read`
     * Get Segment Relationships
     */
    async getSegmentRelationshipsRaw(requestParameters: GetSegmentRelationshipsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetSegmentRelationshipsResponseCollection>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSegmentRelationships.');
        }

        if (requestParameters.relatedResource === null || requestParameters.relatedResource === undefined) {
            throw new runtime.RequiredError('relatedResource','Required parameter requestParameters.relatedResource was null or undefined when calling getSegmentRelationships.');
        }

        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling getSegmentRelationships.');
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
            path: `/api/segments/{id}/relationships/{related_resource}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"related_resource"}}`, encodeURIComponent(String(requestParameters.relatedResource))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetSegmentRelationshipsResponseCollectionFromJSON(jsonValue));
    }

    /**
     * Get all profile membership [relationships](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#relationships) for the given segment ID. Returns a maximum of 10 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Profiles Read` `Segments Read`
     * Get Segment Relationships
     */
    async getSegmentRelationships(requestParameters: GetSegmentRelationshipsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetSegmentRelationshipsResponseCollection> {
        const response = await this.getSegmentRelationshipsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all segments in an account. Filter to request a subset of all segments. Segments can be filtered by `name`, `created`, and `updated` fields. Returns a maximum of 10 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Segments Read`
     * Get Segments
     */
    async getSegmentsRaw(requestParameters: GetSegmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetSegmentResponseCollectionWithIncludedSection>> {
        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling getSegments.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsSegment) {
            queryParameters['fields[segment]'] = requestParameters.fieldsSegment.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/api/segments/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetSegmentResponseCollectionWithIncludedSectionFromJSON(jsonValue));
    }

    /**
     * Get all segments in an account. Filter to request a subset of all segments. Segments can be filtered by `name`, `created`, and `updated` fields. Returns a maximum of 10 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Segments Read`
     * Get Segments
     */
    async getSegments(requestParameters: GetSegmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetSegmentResponseCollectionWithIncludedSection> {
        const response = await this.getSegmentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the name of a segment with the given segment ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Segments Write`
     * Update Segment
     */
    async updateSegmentRaw(requestParameters: UpdateSegmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PatchSegmentResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateSegment.');
        }

        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling updateSegment.');
        }

        if (requestParameters.segmentPartialUpdateQuery === null || requestParameters.segmentPartialUpdateQuery === undefined) {
            throw new runtime.RequiredError('segmentPartialUpdateQuery','Required parameter requestParameters.segmentPartialUpdateQuery was null or undefined when calling updateSegment.');
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
            path: `/api/segments/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SegmentPartialUpdateQueryToJSON(requestParameters.segmentPartialUpdateQuery),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PatchSegmentResponseFromJSON(jsonValue));
    }

    /**
     * Update the name of a segment with the given segment ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Segments Write`
     * Update Segment
     */
    async updateSegment(requestParameters: UpdateSegmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PatchSegmentResponse> {
        const response = await this.updateSegmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetSegmentFieldsSegmentEnum = {
    Name: 'name',
    Created: 'created',
    Updated: 'updated'
} as const;
export type GetSegmentFieldsSegmentEnum = typeof GetSegmentFieldsSegmentEnum[keyof typeof GetSegmentFieldsSegmentEnum];
/**
 * @export
 */
export const GetSegmentFieldsTagEnum = {
    Name: 'name'
} as const;
export type GetSegmentFieldsTagEnum = typeof GetSegmentFieldsTagEnum[keyof typeof GetSegmentFieldsTagEnum];
/**
 * @export
 */
export const GetSegmentIncludeEnum = {
    Tags: 'tags'
} as const;
export type GetSegmentIncludeEnum = typeof GetSegmentIncludeEnum[keyof typeof GetSegmentIncludeEnum];
/**
 * @export
 */
export const GetSegmentProfilesFieldsProfileEnum = {
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
export type GetSegmentProfilesFieldsProfileEnum = typeof GetSegmentProfilesFieldsProfileEnum[keyof typeof GetSegmentProfilesFieldsProfileEnum];
/**
 * @export
 */
export const GetSegmentRelationshipsRelatedResourceEnum = {
    Profiles: 'profiles',
    Tags: 'tags'
} as const;
export type GetSegmentRelationshipsRelatedResourceEnum = typeof GetSegmentRelationshipsRelatedResourceEnum[keyof typeof GetSegmentRelationshipsRelatedResourceEnum];
/**
 * @export
 */
export const GetSegmentsFieldsSegmentEnum = {
    Name: 'name',
    Created: 'created',
    Updated: 'updated'
} as const;
export type GetSegmentsFieldsSegmentEnum = typeof GetSegmentsFieldsSegmentEnum[keyof typeof GetSegmentsFieldsSegmentEnum];
/**
 * @export
 */
export const GetSegmentsFieldsTagEnum = {
    Name: 'name'
} as const;
export type GetSegmentsFieldsTagEnum = typeof GetSegmentsFieldsTagEnum[keyof typeof GetSegmentsFieldsTagEnum];
/**
 * @export
 */
export const GetSegmentsIncludeEnum = {
    Tags: 'tags'
} as const;
export type GetSegmentsIncludeEnum = typeof GetSegmentsIncludeEnum[keyof typeof GetSegmentsIncludeEnum];