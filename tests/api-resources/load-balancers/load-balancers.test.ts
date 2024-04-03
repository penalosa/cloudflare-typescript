// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource loadBalancers', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.loadBalancers.create({
      zone_id: '699d98642c564d2e855e9661899b7252',
      default_pools: [
        '17b5962d775c646f3f9725cbc7a53df4',
        '9290f38c5d07c2e2f4df57b1f61d4196',
        '00920f38ce07c2e2f4df50b1f61d4194',
      ],
      fallback_pool: {},
      name: 'www.example.com',
    });
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
    const response = await cloudflare.loadBalancers.create({
      zone_id: '699d98642c564d2e855e9661899b7252',
      default_pools: [
        '17b5962d775c646f3f9725cbc7a53df4',
        '9290f38c5d07c2e2f4df57b1f61d4196',
        '00920f38ce07c2e2f4df50b1f61d4194',
      ],
      fallback_pool: {},
      name: 'www.example.com',
      adaptive_routing: { failover_across_pools: true },
      country_pools: {
        GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
        US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
      },
      description: 'Load Balancer for www.example.com',
      location_strategy: { mode: 'resolver_ip', prefer_ecs: 'always' },
      pop_pools: {
        LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
        LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
        SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
      },
      proxied: true,
      random_steering: {
        default_weight: 0.2,
        pool_weights: { '9290f38c5d07c2e2f4df57b1f61d4196': 0.5, de90f38ced07c2e2f4df50b1f61d4194: 0.3 },
      },
      region_pools: {
        ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
        WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
      },
      rules: [
        {
          condition: 'http.request.uri.path contains "/testing"',
          disabled: true,
          fixed_response: {
            content_type: 'application/json',
            location: 'www.example.com',
            message_body: 'Testing Hello',
            status_code: 0,
          },
          name: 'route the path /testing to testing datacenter.',
          overrides: {
            adaptive_routing: { failover_across_pools: true },
            country_pools: {
              GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
              US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
            },
            default_pools: [
              '17b5962d775c646f3f9725cbc7a53df4',
              '9290f38c5d07c2e2f4df57b1f61d4196',
              '00920f38ce07c2e2f4df50b1f61d4194',
            ],
            fallback_pool: {},
            location_strategy: { mode: 'resolver_ip', prefer_ecs: 'always' },
            pop_pools: {
              LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
              LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
              SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
            },
            random_steering: {
              default_weight: 0.2,
              pool_weights: {
                '9290f38c5d07c2e2f4df57b1f61d4196': 0.5,
                de90f38ced07c2e2f4df50b1f61d4194: 0.3,
              },
            },
            region_pools: {
              ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
              WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
            },
            session_affinity: 'cookie',
            session_affinity_attributes: {
              drain_duration: 100,
              headers: ['x'],
              require_all_headers: true,
              samesite: 'Auto',
              secure: 'Auto',
              zero_downtime_failover: 'sticky',
            },
            session_affinity_ttl: 1800,
            steering_policy: 'dynamic_latency',
            ttl: 30,
          },
          priority: 0,
          terminates: true,
        },
        {
          condition: 'http.request.uri.path contains "/testing"',
          disabled: true,
          fixed_response: {
            content_type: 'application/json',
            location: 'www.example.com',
            message_body: 'Testing Hello',
            status_code: 0,
          },
          name: 'route the path /testing to testing datacenter.',
          overrides: {
            adaptive_routing: { failover_across_pools: true },
            country_pools: {
              GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
              US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
            },
            default_pools: [
              '17b5962d775c646f3f9725cbc7a53df4',
              '9290f38c5d07c2e2f4df57b1f61d4196',
              '00920f38ce07c2e2f4df50b1f61d4194',
            ],
            fallback_pool: {},
            location_strategy: { mode: 'resolver_ip', prefer_ecs: 'always' },
            pop_pools: {
              LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
              LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
              SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
            },
            random_steering: {
              default_weight: 0.2,
              pool_weights: {
                '9290f38c5d07c2e2f4df57b1f61d4196': 0.5,
                de90f38ced07c2e2f4df50b1f61d4194: 0.3,
              },
            },
            region_pools: {
              ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
              WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
            },
            session_affinity: 'cookie',
            session_affinity_attributes: {
              drain_duration: 100,
              headers: ['x'],
              require_all_headers: true,
              samesite: 'Auto',
              secure: 'Auto',
              zero_downtime_failover: 'sticky',
            },
            session_affinity_ttl: 1800,
            steering_policy: 'dynamic_latency',
            ttl: 30,
          },
          priority: 0,
          terminates: true,
        },
        {
          condition: 'http.request.uri.path contains "/testing"',
          disabled: true,
          fixed_response: {
            content_type: 'application/json',
            location: 'www.example.com',
            message_body: 'Testing Hello',
            status_code: 0,
          },
          name: 'route the path /testing to testing datacenter.',
          overrides: {
            adaptive_routing: { failover_across_pools: true },
            country_pools: {
              GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
              US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
            },
            default_pools: [
              '17b5962d775c646f3f9725cbc7a53df4',
              '9290f38c5d07c2e2f4df57b1f61d4196',
              '00920f38ce07c2e2f4df50b1f61d4194',
            ],
            fallback_pool: {},
            location_strategy: { mode: 'resolver_ip', prefer_ecs: 'always' },
            pop_pools: {
              LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
              LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
              SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
            },
            random_steering: {
              default_weight: 0.2,
              pool_weights: {
                '9290f38c5d07c2e2f4df57b1f61d4196': 0.5,
                de90f38ced07c2e2f4df50b1f61d4194: 0.3,
              },
            },
            region_pools: {
              ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
              WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
            },
            session_affinity: 'cookie',
            session_affinity_attributes: {
              drain_duration: 100,
              headers: ['x'],
              require_all_headers: true,
              samesite: 'Auto',
              secure: 'Auto',
              zero_downtime_failover: 'sticky',
            },
            session_affinity_ttl: 1800,
            steering_policy: 'dynamic_latency',
            ttl: 30,
          },
          priority: 0,
          terminates: true,
        },
      ],
      session_affinity: 'cookie',
      session_affinity_attributes: {
        drain_duration: 100,
        headers: ['x'],
        require_all_headers: true,
        samesite: 'Auto',
        secure: 'Auto',
        zero_downtime_failover: 'sticky',
      },
      session_affinity_ttl: 1800,
      steering_policy: 'dynamic_latency',
      ttl: 30,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.loadBalancers.update('699d98642c564d2e855e9661899b7252', {
      zone_id: '699d98642c564d2e855e9661899b7252',
      default_pools: [
        '17b5962d775c646f3f9725cbc7a53df4',
        '9290f38c5d07c2e2f4df57b1f61d4196',
        '00920f38ce07c2e2f4df50b1f61d4194',
      ],
      fallback_pool: {},
      name: 'www.example.com',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.loadBalancers.update('699d98642c564d2e855e9661899b7252', {
      zone_id: '699d98642c564d2e855e9661899b7252',
      default_pools: [
        '17b5962d775c646f3f9725cbc7a53df4',
        '9290f38c5d07c2e2f4df57b1f61d4196',
        '00920f38ce07c2e2f4df50b1f61d4194',
      ],
      fallback_pool: {},
      name: 'www.example.com',
      adaptive_routing: { failover_across_pools: true },
      country_pools: {
        GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
        US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
      },
      description: 'Load Balancer for www.example.com',
      enabled: true,
      location_strategy: { mode: 'resolver_ip', prefer_ecs: 'always' },
      pop_pools: {
        LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
        LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
        SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
      },
      proxied: true,
      random_steering: {
        default_weight: 0.2,
        pool_weights: { '9290f38c5d07c2e2f4df57b1f61d4196': 0.5, de90f38ced07c2e2f4df50b1f61d4194: 0.3 },
      },
      region_pools: {
        ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
        WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
      },
      rules: [
        {
          condition: 'http.request.uri.path contains "/testing"',
          disabled: true,
          fixed_response: {
            content_type: 'application/json',
            location: 'www.example.com',
            message_body: 'Testing Hello',
            status_code: 0,
          },
          name: 'route the path /testing to testing datacenter.',
          overrides: {
            adaptive_routing: { failover_across_pools: true },
            country_pools: {
              GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
              US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
            },
            default_pools: [
              '17b5962d775c646f3f9725cbc7a53df4',
              '9290f38c5d07c2e2f4df57b1f61d4196',
              '00920f38ce07c2e2f4df50b1f61d4194',
            ],
            fallback_pool: {},
            location_strategy: { mode: 'resolver_ip', prefer_ecs: 'always' },
            pop_pools: {
              LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
              LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
              SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
            },
            random_steering: {
              default_weight: 0.2,
              pool_weights: {
                '9290f38c5d07c2e2f4df57b1f61d4196': 0.5,
                de90f38ced07c2e2f4df50b1f61d4194: 0.3,
              },
            },
            region_pools: {
              ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
              WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
            },
            session_affinity: 'cookie',
            session_affinity_attributes: {
              drain_duration: 100,
              headers: ['x'],
              require_all_headers: true,
              samesite: 'Auto',
              secure: 'Auto',
              zero_downtime_failover: 'sticky',
            },
            session_affinity_ttl: 1800,
            steering_policy: 'dynamic_latency',
            ttl: 30,
          },
          priority: 0,
          terminates: true,
        },
        {
          condition: 'http.request.uri.path contains "/testing"',
          disabled: true,
          fixed_response: {
            content_type: 'application/json',
            location: 'www.example.com',
            message_body: 'Testing Hello',
            status_code: 0,
          },
          name: 'route the path /testing to testing datacenter.',
          overrides: {
            adaptive_routing: { failover_across_pools: true },
            country_pools: {
              GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
              US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
            },
            default_pools: [
              '17b5962d775c646f3f9725cbc7a53df4',
              '9290f38c5d07c2e2f4df57b1f61d4196',
              '00920f38ce07c2e2f4df50b1f61d4194',
            ],
            fallback_pool: {},
            location_strategy: { mode: 'resolver_ip', prefer_ecs: 'always' },
            pop_pools: {
              LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
              LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
              SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
            },
            random_steering: {
              default_weight: 0.2,
              pool_weights: {
                '9290f38c5d07c2e2f4df57b1f61d4196': 0.5,
                de90f38ced07c2e2f4df50b1f61d4194: 0.3,
              },
            },
            region_pools: {
              ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
              WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
            },
            session_affinity: 'cookie',
            session_affinity_attributes: {
              drain_duration: 100,
              headers: ['x'],
              require_all_headers: true,
              samesite: 'Auto',
              secure: 'Auto',
              zero_downtime_failover: 'sticky',
            },
            session_affinity_ttl: 1800,
            steering_policy: 'dynamic_latency',
            ttl: 30,
          },
          priority: 0,
          terminates: true,
        },
        {
          condition: 'http.request.uri.path contains "/testing"',
          disabled: true,
          fixed_response: {
            content_type: 'application/json',
            location: 'www.example.com',
            message_body: 'Testing Hello',
            status_code: 0,
          },
          name: 'route the path /testing to testing datacenter.',
          overrides: {
            adaptive_routing: { failover_across_pools: true },
            country_pools: {
              GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
              US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
            },
            default_pools: [
              '17b5962d775c646f3f9725cbc7a53df4',
              '9290f38c5d07c2e2f4df57b1f61d4196',
              '00920f38ce07c2e2f4df50b1f61d4194',
            ],
            fallback_pool: {},
            location_strategy: { mode: 'resolver_ip', prefer_ecs: 'always' },
            pop_pools: {
              LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
              LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
              SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
            },
            random_steering: {
              default_weight: 0.2,
              pool_weights: {
                '9290f38c5d07c2e2f4df57b1f61d4196': 0.5,
                de90f38ced07c2e2f4df50b1f61d4194: 0.3,
              },
            },
            region_pools: {
              ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
              WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
            },
            session_affinity: 'cookie',
            session_affinity_attributes: {
              drain_duration: 100,
              headers: ['x'],
              require_all_headers: true,
              samesite: 'Auto',
              secure: 'Auto',
              zero_downtime_failover: 'sticky',
            },
            session_affinity_ttl: 1800,
            steering_policy: 'dynamic_latency',
            ttl: 30,
          },
          priority: 0,
          terminates: true,
        },
      ],
      session_affinity: 'cookie',
      session_affinity_attributes: {
        drain_duration: 100,
        headers: ['x'],
        require_all_headers: true,
        samesite: 'Auto',
        secure: 'Auto',
        zero_downtime_failover: 'sticky',
      },
      session_affinity_ttl: 1800,
      steering_policy: 'dynamic_latency',
      ttl: 30,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.loadBalancers.list({ zone_id: '699d98642c564d2e855e9661899b7252' });
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
    const response = await cloudflare.loadBalancers.list({ zone_id: '699d98642c564d2e855e9661899b7252' });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.loadBalancers.delete('699d98642c564d2e855e9661899b7252', {
      zone_id: '699d98642c564d2e855e9661899b7252',
      body: {},
    });
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
    const response = await cloudflare.loadBalancers.delete('699d98642c564d2e855e9661899b7252', {
      zone_id: '699d98642c564d2e855e9661899b7252',
      body: {},
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('edit: only required params', async () => {
    const responsePromise = cloudflare.loadBalancers.edit('699d98642c564d2e855e9661899b7252', {
      zone_id: '699d98642c564d2e855e9661899b7252',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('edit: required and optional params', async () => {
    const response = await cloudflare.loadBalancers.edit('699d98642c564d2e855e9661899b7252', {
      zone_id: '699d98642c564d2e855e9661899b7252',
      adaptive_routing: { failover_across_pools: true },
      country_pools: {
        GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
        US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
      },
      default_pools: [
        '17b5962d775c646f3f9725cbc7a53df4',
        '9290f38c5d07c2e2f4df57b1f61d4196',
        '00920f38ce07c2e2f4df50b1f61d4194',
      ],
      description: 'Load Balancer for www.example.com',
      enabled: true,
      fallback_pool: {},
      location_strategy: { mode: 'resolver_ip', prefer_ecs: 'always' },
      name: 'www.example.com',
      pop_pools: {
        LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
        LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
        SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
      },
      proxied: true,
      random_steering: {
        default_weight: 0.2,
        pool_weights: { '9290f38c5d07c2e2f4df57b1f61d4196': 0.5, de90f38ced07c2e2f4df50b1f61d4194: 0.3 },
      },
      region_pools: {
        ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
        WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
      },
      rules: [
        {
          condition: 'http.request.uri.path contains "/testing"',
          disabled: true,
          fixed_response: {
            content_type: 'application/json',
            location: 'www.example.com',
            message_body: 'Testing Hello',
            status_code: 0,
          },
          name: 'route the path /testing to testing datacenter.',
          overrides: {
            adaptive_routing: { failover_across_pools: true },
            country_pools: {
              GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
              US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
            },
            default_pools: [
              '17b5962d775c646f3f9725cbc7a53df4',
              '9290f38c5d07c2e2f4df57b1f61d4196',
              '00920f38ce07c2e2f4df50b1f61d4194',
            ],
            fallback_pool: {},
            location_strategy: { mode: 'resolver_ip', prefer_ecs: 'always' },
            pop_pools: {
              LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
              LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
              SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
            },
            random_steering: {
              default_weight: 0.2,
              pool_weights: {
                '9290f38c5d07c2e2f4df57b1f61d4196': 0.5,
                de90f38ced07c2e2f4df50b1f61d4194: 0.3,
              },
            },
            region_pools: {
              ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
              WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
            },
            session_affinity: 'cookie',
            session_affinity_attributes: {
              drain_duration: 100,
              headers: ['x'],
              require_all_headers: true,
              samesite: 'Auto',
              secure: 'Auto',
              zero_downtime_failover: 'sticky',
            },
            session_affinity_ttl: 1800,
            steering_policy: 'dynamic_latency',
            ttl: 30,
          },
          priority: 0,
          terminates: true,
        },
        {
          condition: 'http.request.uri.path contains "/testing"',
          disabled: true,
          fixed_response: {
            content_type: 'application/json',
            location: 'www.example.com',
            message_body: 'Testing Hello',
            status_code: 0,
          },
          name: 'route the path /testing to testing datacenter.',
          overrides: {
            adaptive_routing: { failover_across_pools: true },
            country_pools: {
              GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
              US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
            },
            default_pools: [
              '17b5962d775c646f3f9725cbc7a53df4',
              '9290f38c5d07c2e2f4df57b1f61d4196',
              '00920f38ce07c2e2f4df50b1f61d4194',
            ],
            fallback_pool: {},
            location_strategy: { mode: 'resolver_ip', prefer_ecs: 'always' },
            pop_pools: {
              LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
              LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
              SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
            },
            random_steering: {
              default_weight: 0.2,
              pool_weights: {
                '9290f38c5d07c2e2f4df57b1f61d4196': 0.5,
                de90f38ced07c2e2f4df50b1f61d4194: 0.3,
              },
            },
            region_pools: {
              ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
              WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
            },
            session_affinity: 'cookie',
            session_affinity_attributes: {
              drain_duration: 100,
              headers: ['x'],
              require_all_headers: true,
              samesite: 'Auto',
              secure: 'Auto',
              zero_downtime_failover: 'sticky',
            },
            session_affinity_ttl: 1800,
            steering_policy: 'dynamic_latency',
            ttl: 30,
          },
          priority: 0,
          terminates: true,
        },
        {
          condition: 'http.request.uri.path contains "/testing"',
          disabled: true,
          fixed_response: {
            content_type: 'application/json',
            location: 'www.example.com',
            message_body: 'Testing Hello',
            status_code: 0,
          },
          name: 'route the path /testing to testing datacenter.',
          overrides: {
            adaptive_routing: { failover_across_pools: true },
            country_pools: {
              GB: ['abd90f38ced07c2e2f4df50b1f61d4194'],
              US: ['de90f38ced07c2e2f4df50b1f61d4194', '00920f38ce07c2e2f4df50b1f61d4194'],
            },
            default_pools: [
              '17b5962d775c646f3f9725cbc7a53df4',
              '9290f38c5d07c2e2f4df57b1f61d4196',
              '00920f38ce07c2e2f4df50b1f61d4194',
            ],
            fallback_pool: {},
            location_strategy: { mode: 'resolver_ip', prefer_ecs: 'always' },
            pop_pools: {
              LAX: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
              LHR: ['abd90f38ced07c2e2f4df50b1f61d4194', 'f9138c5d07c2e2f4df57b1f61d4196'],
              SJC: ['00920f38ce07c2e2f4df50b1f61d4194'],
            },
            random_steering: {
              default_weight: 0.2,
              pool_weights: {
                '9290f38c5d07c2e2f4df57b1f61d4196': 0.5,
                de90f38ced07c2e2f4df50b1f61d4194: 0.3,
              },
            },
            region_pools: {
              ENAM: ['00920f38ce07c2e2f4df50b1f61d4194'],
              WNAM: ['de90f38ced07c2e2f4df50b1f61d4194', '9290f38c5d07c2e2f4df57b1f61d4196'],
            },
            session_affinity: 'cookie',
            session_affinity_attributes: {
              drain_duration: 100,
              headers: ['x'],
              require_all_headers: true,
              samesite: 'Auto',
              secure: 'Auto',
              zero_downtime_failover: 'sticky',
            },
            session_affinity_ttl: 1800,
            steering_policy: 'dynamic_latency',
            ttl: 30,
          },
          priority: 0,
          terminates: true,
        },
      ],
      session_affinity: 'cookie',
      session_affinity_attributes: {
        drain_duration: 100,
        headers: ['x'],
        require_all_headers: true,
        samesite: 'Auto',
        secure: 'Auto',
        zero_downtime_failover: 'sticky',
      },
      session_affinity_ttl: 1800,
      steering_policy: 'dynamic_latency',
      ttl: 30,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.loadBalancers.get('699d98642c564d2e855e9661899b7252', {
      zone_id: '699d98642c564d2e855e9661899b7252',
    });
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
    const response = await cloudflare.loadBalancers.get('699d98642c564d2e855e9661899b7252', {
      zone_id: '699d98642c564d2e855e9661899b7252',
    });
  });
});
