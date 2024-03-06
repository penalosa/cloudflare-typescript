// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ListsAPI from 'cloudflare/resources/zero-trust/gateway/lists/lists';
import * as ItemsAPI from 'cloudflare/resources/zero-trust/gateway/lists/items';

export class Lists extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Creates a new Zero Trust list.
   */
  create(params: ListCreateParams, options?: Core.RequestOptions): Core.APIPromise<ListCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/gateway/lists`, { body, ...options }) as Core.APIPromise<{
        result: ListCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured Zero Trust list.
   */
  update(
    listId: string,
    params: ListUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/gateway/lists/${listId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ListUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all Zero Trust lists for an account.
   */
  list(params: ListListParams, options?: Core.RequestOptions): Core.APIPromise<ListListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/gateway/lists`, options) as Core.APIPromise<{
        result: ListListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a Zero Trust list.
   */
  delete(
    listId: string,
    params: ListDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/gateway/lists/${listId}`, options) as Core.APIPromise<{
        result: ListDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Appends or removes an item from a configured Zero Trust list.
   */
  edit(
    listId: string,
    params: ListEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/gateway/lists/${listId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ListEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Zero Trust list.
   */
  get(
    listId: string,
    params: ListGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/gateway/lists/${listId}`, options) as Core.APIPromise<{
        result: ListGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ListCreateResponse {
  /**
   * API Resource UUID tag.
   */
  id?: string;

  created_at?: string;

  /**
   * The description of the list.
   */
  description?: string;

  /**
   * The items in the list.
   */
  items?: Array<ListCreateResponse.Item>;

  /**
   * The name of the list.
   */
  name?: string;

  /**
   * The type of list.
   */
  type?: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';

  updated_at?: string;
}

export namespace ListCreateResponse {
  export interface Item {
    created_at?: string;

    /**
     * The value of the item in a list.
     */
    value?: string;
  }
}

export interface ListUpdateResponse {
  /**
   * API Resource UUID tag.
   */
  id?: string;

  /**
   * The number of items in the list.
   */
  count?: number;

  created_at?: string;

  /**
   * The description of the list.
   */
  description?: string;

  /**
   * The name of the list.
   */
  name?: string;

  /**
   * The type of list.
   */
  type?: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';

  updated_at?: string;
}

export type ListListResponse = Array<ListListResponse.ListListResponseItem>;

export namespace ListListResponse {
  export interface ListListResponseItem {
    /**
     * API Resource UUID tag.
     */
    id?: string;

    /**
     * The number of items in the list.
     */
    count?: number;

    created_at?: string;

    /**
     * The description of the list.
     */
    description?: string;

    /**
     * The name of the list.
     */
    name?: string;

    /**
     * The type of list.
     */
    type?: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';

    updated_at?: string;
  }
}

export type ListDeleteResponse = unknown | string;

export interface ListEditResponse {
  /**
   * API Resource UUID tag.
   */
  id?: string;

  /**
   * The number of items in the list.
   */
  count?: number;

  created_at?: string;

  /**
   * The description of the list.
   */
  description?: string;

  /**
   * The name of the list.
   */
  name?: string;

  /**
   * The type of list.
   */
  type?: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';

  updated_at?: string;
}

export interface ListGetResponse {
  /**
   * API Resource UUID tag.
   */
  id?: string;

  /**
   * The number of items in the list.
   */
  count?: number;

  created_at?: string;

  /**
   * The description of the list.
   */
  description?: string;

  /**
   * The name of the list.
   */
  name?: string;

  /**
   * The type of list.
   */
  type?: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';

  updated_at?: string;
}

export interface ListCreateParams {
  /**
   * Path param:
   */
  account_id: unknown;

  /**
   * Body param: The name of the list.
   */
  name: string;

  /**
   * Body param: The type of list.
   */
  type: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';

  /**
   * Body param: The description of the list.
   */
  description?: string;

  /**
   * Body param: The items in the list.
   */
  items?: Array<ListCreateParams.Item>;
}

export namespace ListCreateParams {
  export interface Item {
    /**
     * The value of the item in a list.
     */
    value?: string;
  }
}

export interface ListUpdateParams {
  /**
   * Path param:
   */
  account_id: unknown;

  /**
   * Body param: The name of the list.
   */
  name: string;

  /**
   * Body param: The description of the list.
   */
  description?: string;
}

export interface ListListParams {
  account_id: unknown;
}

export interface ListDeleteParams {
  account_id: unknown;
}

export interface ListEditParams {
  /**
   * Path param:
   */
  account_id: unknown;

  /**
   * Body param: The items in the list.
   */
  append?: Array<ListEditParams.Append>;

  /**
   * Body param: A list of the item values you want to remove.
   */
  remove?: Array<string>;
}

export namespace ListEditParams {
  export interface Append {
    /**
     * The value of the item in a list.
     */
    value?: string;
  }
}

export interface ListGetParams {
  account_id: unknown;
}

export namespace Lists {
  export import ListCreateResponse = ListsAPI.ListCreateResponse;
  export import ListUpdateResponse = ListsAPI.ListUpdateResponse;
  export import ListListResponse = ListsAPI.ListListResponse;
  export import ListDeleteResponse = ListsAPI.ListDeleteResponse;
  export import ListEditResponse = ListsAPI.ListEditResponse;
  export import ListGetResponse = ListsAPI.ListGetResponse;
  export import ListCreateParams = ListsAPI.ListCreateParams;
  export import ListUpdateParams = ListsAPI.ListUpdateParams;
  export import ListListParams = ListsAPI.ListListParams;
  export import ListDeleteParams = ListsAPI.ListDeleteParams;
  export import ListEditParams = ListsAPI.ListEditParams;
  export import ListGetParams = ListsAPI.ListGetParams;
  export import Items = ItemsAPI.Items;
  export import ItemListResponse = ItemsAPI.ItemListResponse;
  export import ItemListParams = ItemsAPI.ItemListParams;
}
