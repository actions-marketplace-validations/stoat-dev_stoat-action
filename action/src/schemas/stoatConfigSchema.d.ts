/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface StoatConfigSchema {
  version: number;
  enabled?: boolean;
  comment_template_file?: string;
  plugins?: {
    static_hosting?: StaticHostingPluginMap;
    json?: JsonPluginMap;
    job_runtime?: JobRuntimePlugin;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface StaticHostingPluginMap {
  [k: string]: StaticHostingPlugin;
}
export interface StaticHostingPlugin {
  metadata?: {
    [k: string]: unknown;
  };
  path: string;
  [k: string]: unknown;
}
export interface JsonPluginMap {
  [k: string]: JsonPlugin;
}
export interface JsonPlugin {
  metadata?: {
    [k: string]: unknown;
  };
  path: string;
  [k: string]: unknown;
}
export interface JobRuntimePlugin {
  enabled: boolean;
  tracking?: boolean;
  chart?: {
    width?: number;
    height?: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
