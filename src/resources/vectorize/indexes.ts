// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IndexesAPI from 'cloudflare/resources/vectorize/indexes';
import * as Shared from 'cloudflare/resources/shared';
import { SinglePage } from 'cloudflare/pagination';

export class Indexes extends APIResource {
  /**
   * Creates and returns a new Vectorize Index.
   */
  create(
    accountIdentifier: string,
    body: IndexCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateIndex | null> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/vectorize/indexes`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CreateIndex | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates and returns the specified Vectorize Index.
   */
  update(
    accountIdentifier: string,
    indexName: string,
    body: IndexUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateIndex | null> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/vectorize/indexes/${indexName}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CreateIndex | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a list of Vectorize Indexes
   */
  list(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CreateIndicesSinglePage, CreateIndex> {
    return this._client.getAPIList(
      `/accounts/${accountIdentifier}/vectorize/indexes`,
      CreateIndicesSinglePage,
      options,
    );
  }

  /**
   * Deletes the specified Vectorize Index.
   */
  delete(
    accountIdentifier: string,
    indexName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    return (
      this._client.delete(
        `/accounts/${accountIdentifier}/vectorize/indexes/${indexName}`,
        options,
      ) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a set of vectors from an index by their vector identifiers.
   */
  deleteByIds(
    accountIdentifier: string,
    indexName: string,
    body: IndexDeleteByIDsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexDeleteVectorsByID | null> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/vectorize/indexes/${indexName}/delete-by-ids`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IndexDeleteVectorsByID | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the specified Vectorize Index.
   */
  get(
    accountIdentifier: string,
    indexName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateIndex | null> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/vectorize/indexes/${indexName}`,
        options,
      ) as Core.APIPromise<{ result: CreateIndex | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a set of vectors from an index by their vector identifiers.
   */
  getByIds(
    accountIdentifier: string,
    indexName: string,
    body: IndexGetByIDsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexGetByIDsResponse | null> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/vectorize/indexes/${indexName}/get-by-ids`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IndexGetByIDsResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Inserts vectors into the specified index and returns the count of the vectors
   * successfully inserted.
   */
  insert(
    accountIdentifier: string,
    indexName: string,
    body: IndexInsertParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexInsert | null> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/vectorize/indexes/${indexName}/insert`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IndexInsert | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Finds vectors closest to a given vector in an index.
   */
  query(
    accountIdentifier: string,
    indexName: string,
    body: IndexQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexQuery | null> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/vectorize/indexes/${indexName}/query`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IndexQuery | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Upserts vectors into the specified index, creating them if they do not exist and
   * returns the count of values and ids successfully inserted.
   */
  upsert(
    accountIdentifier: string,
    indexName: string,
    body: IndexUpsertParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexUpsert | null> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/vectorize/indexes/${indexName}/upsert`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IndexUpsert | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class CreateIndicesSinglePage extends SinglePage<CreateIndex> {}

export interface CreateIndex {
  config?: IndexDimensionConfiguration;

  /**
   * Specifies the timestamp the resource was created as an ISO8601 string.
   */
  created_on?: string;

  /**
   * Specifies the description of the index.
   */
  description?: string;

  /**
   * Specifies the timestamp the resource was modified as an ISO8601 string.
   */
  modified_on?: string;

  name?: string;
}

export interface IndexDeleteVectorsByID {
  /**
   * The count of the vectors successfully deleted.
   */
  count?: number;

  /**
   * Array of vector identifiers of the vectors that were successfully processed for
   * deletion.
   */
  ids?: Array<string>;
}

export interface IndexDimensionConfiguration {
  /**
   * Specifies the number of dimensions for the index
   */
  dimensions: number;

  /**
   * Specifies the type of metric to use calculating distance.
   */
  metric: 'cosine' | 'euclidean' | 'dot-product';
}

export interface IndexInsert {
  /**
   * Specifies the count of the vectors successfully inserted.
   */
  count?: number;

  /**
   * Array of vector identifiers of the vectors successfully inserted.
   */
  ids?: Array<string>;
}

export interface IndexQuery {
  /**
   * Specifies the count of vectors returned by the search
   */
  count?: number;

  /**
   * Array of vectors matched by the search
   */
  matches?: Array<IndexQuery.Match>;
}

export namespace IndexQuery {
  export interface Match {
    /**
     * Identifier
     */
    id?: string;

    metadata?: unknown;

    /**
     * The score of the vector according to the index's distance metric
     */
    score?: number;

    values?: Array<number>;
  }
}

export interface IndexUpsert {
  /**
   * Specifies the count of the vectors successfully inserted.
   */
  count?: number;

  /**
   * Array of vector identifiers of the vectors successfully inserted.
   */
  ids?: Array<string>;
}

/**
 * Array of vectors with matching ids.
 */
export type IndexGetByIDsResponse = unknown;

export interface IndexCreateParams {
  /**
   * Specifies the type of configuration to use for the index.
   */
  config: IndexCreateParams.VectorizeIndexPresetConfiguration | IndexDimensionConfiguration;

  name: string;

  /**
   * Specifies the description of the index.
   */
  description?: string;
}

export namespace IndexCreateParams {
  export interface VectorizeIndexPresetConfiguration {
    /**
     * Specifies the preset to use for the index.
     */
    preset:
      | '@cf/baai/bge-small-en-v1.5'
      | '@cf/baai/bge-base-en-v1.5'
      | '@cf/baai/bge-large-en-v1.5'
      | 'openai/text-embedding-ada-002'
      | 'cohere/embed-multilingual-v2.0';
  }
}

export interface IndexUpdateParams {
  /**
   * Specifies the description of the index.
   */
  description: string;
}

export interface IndexDeleteByIDsParams {
  /**
   * A list of vector identifiers to delete from the index indicated by the path.
   */
  ids?: Array<string>;
}

export interface IndexGetByIDsParams {
  /**
   * A list of vector identifiers to retrieve from the index indicated by the path.
   */
  ids?: Array<string>;
}

export type IndexInsertParams = unknown;

export interface IndexQueryParams {
  /**
   * Whether to return the metadata associated with the closest vectors.
   */
  returnMetadata?: boolean;

  /**
   * Whether to return the values associated with the closest vectors.
   */
  returnValues?: boolean;

  /**
   * The number of nearest neighbors to find.
   */
  topK?: number;

  /**
   * The search vector that will be used to find the nearest neighbors.
   */
  vector?: Array<number>;
}

export type IndexUpsertParams = unknown;

export namespace Indexes {
  export import CreateIndex = IndexesAPI.CreateIndex;
  export import IndexDeleteVectorsByID = IndexesAPI.IndexDeleteVectorsByID;
  export import IndexDimensionConfiguration = IndexesAPI.IndexDimensionConfiguration;
  export import IndexInsert = IndexesAPI.IndexInsert;
  export import IndexQuery = IndexesAPI.IndexQuery;
  export import IndexUpsert = IndexesAPI.IndexUpsert;
  export import IndexGetByIDsResponse = IndexesAPI.IndexGetByIDsResponse;
  export import CreateIndicesSinglePage = IndexesAPI.CreateIndicesSinglePage;
  export import IndexCreateParams = IndexesAPI.IndexCreateParams;
  export import IndexUpdateParams = IndexesAPI.IndexUpdateParams;
  export import IndexDeleteByIDsParams = IndexesAPI.IndexDeleteByIDsParams;
  export import IndexGetByIDsParams = IndexesAPI.IndexGetByIDsParams;
  export import IndexInsertParams = IndexesAPI.IndexInsertParams;
  export import IndexQueryParams = IndexesAPI.IndexQueryParams;
  export import IndexUpsertParams = IndexesAPI.IndexUpsertParams;
}
