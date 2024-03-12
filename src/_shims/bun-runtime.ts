/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */
import { type Shims } from './registry.ts';
import { getRuntime as getWebRuntime } from './web-runtime.ts';
import { ReadStream as FsReadStream } from 'node:fs';

export function getRuntime(): Shims {
  const runtime = getWebRuntime();
  function isFsReadStream(value: any): value is FsReadStream {
    return value instanceof FsReadStream;
  }
  return { ...runtime, isFsReadStream };
}
