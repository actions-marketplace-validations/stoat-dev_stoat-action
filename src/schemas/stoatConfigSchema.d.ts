/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface StoatConfigSchema {
  version: number;
  enabled?: boolean;
  comment_template: string;
  plugins?: {
    [k: string]: StaticHostingPlugin | JsonPlugin;
  };
  [k: string]: unknown;
}
export interface StaticHostingPlugin {
  metadata?: {
    [k: string]: unknown;
  };
  static_hosting: {
    path: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface JsonPlugin {
  metadata?: {
    [k: string]: unknown;
  };
  json: {
    path: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
