// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bindings', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.addressing.prefixes.bgp.bindings.create(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.addressing.prefixes.bgp.bindings.create(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        cidr: '192.0.2.0/24',
        service_id: '2db684ee7ca04e159946fd05b99e1bcd',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.addressing.prefixes.bgp.bindings.list(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.addressing.prefixes.bgp.bindings.list(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.addressing.prefixes.bgp.bindings.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.addressing.prefixes.bgp.bindings.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.addressing.prefixes.bgp.bindings.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.addressing.prefixes.bgp.bindings.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
