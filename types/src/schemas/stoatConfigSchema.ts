/* eslint-disable */
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
    image_diff?: ImageDiffPluginMap;
    workflow_dispatch?: WorkflowDispatchPluginMap;
    metric?: MetricPluginMap;
    chart?: ChartPluginMap;
    job_runtime?: JobRuntimePlugin;
    auto_hosting?: AutoHostingPlugin;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/**
 * This interface was referenced by `StoatConfigSchema`'s JSON-Schema
 * via the `definition` "static_hosting_plugin_map".
 */
export interface StaticHostingPluginMap {
  [k: string]: StaticHostingPlugin;
}
/**
 * This interface was referenced by `StoatConfigSchema`'s JSON-Schema
 * via the `definition` "static_hosting_plugin".
 */
export interface StaticHostingPlugin {
  metadata?: {
    [k: string]: unknown;
  };
  path: string;
  file_viewer?: boolean;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `StoatConfigSchema`'s JSON-Schema
 * via the `definition` "json_plugin_map".
 */
export interface JsonPluginMap {
  [k: string]: JsonPlugin;
}
/**
 * This interface was referenced by `StoatConfigSchema`'s JSON-Schema
 * via the `definition` "json_plugin".
 */
export interface JsonPlugin {
  metadata?: {
    [k: string]: unknown;
  };
  path: string;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `StoatConfigSchema`'s JSON-Schema
 * via the `definition` "image_diff_plugin_map".
 */
export interface ImageDiffPluginMap {
  [k: string]: ImageDiffPlugin;
}
/**
 * This interface was referenced by `StoatConfigSchema`'s JSON-Schema
 * via the `definition` "image_diff_plugin".
 */
export interface ImageDiffPlugin {
  metadata?: {
    [k: string]: unknown;
  };
  image: string;
  baseline: string;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `StoatConfigSchema`'s JSON-Schema
 * via the `definition` "workflow_dispatch_plugin_map".
 */
export interface WorkflowDispatchPluginMap {
  [k: string]: WorkflowDispatchPlugin;
}
/**
 * This interface was referenced by `StoatConfigSchema`'s JSON-Schema
 * via the `definition` "workflow_dispatch_plugin".
 */
export interface WorkflowDispatchPlugin {
  filename: string;
  /**
   * A workflow can be triggered for different purposes or scopes (e.g. a deployment workflow for different environments). Set this field to tell Stoat how to identify the purpose or scope of each workflow. Usually the workflow run scope is set by one of the workflow inputs. You can specify the input parameter with the GitHub inputs context syntax: ${{ inputs.<input-parameter-name> }}, or JavaScript template literal syntax ${inputs.<input-parameter-name}. The default value is empty, and all workflow related information will be persisted under "plugins.workflow_dispatch.<task-id>". When this field is not empty, the persistent field is "plugins.workflow_dispatch.<task-id>.<scope-identifier>".
   */
  scope_identifier?: string;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `StoatConfigSchema`'s JSON-Schema
 * via the `definition` "metric_plugin_map".
 */
export interface MetricPluginMap {
  [k: string]: MetricPlugin;
}
/**
 * This interface was referenced by `StoatConfigSchema`'s JSON-Schema
 * via the `definition` "metric_plugin".
 */
export interface MetricPlugin {
  metadata?: {
    [k: string]: unknown;
  };
  /**
   * The input file including the metric value. The expected formats are: json or jsonl. The file should be in JSON with these keys: "value" (required, number), "tag" (optional, string), and "tags" (optional, string array). The "tag" or "tags" are used to groups metric data points in the chart. This file will be consumed by the Stoat action as inputs for the metric task.
   */
  filename: string;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `StoatConfigSchema`'s JSON-Schema
 * via the `definition` "chart_plugin_map".
 */
export interface ChartPluginMap {
  [k: string]: ChartPlugin;
}
/**
 * This interface was referenced by `StoatConfigSchema`'s JSON-Schema
 * via the `definition` "chart_plugin".
 */
export interface ChartPlugin {
  metadata?: {
    [k: string]: unknown;
  };
  title: string;
  y_title?: string;
  tags: string[];
  [k: string]: unknown;
}
/**
 * This interface was referenced by `StoatConfigSchema`'s JSON-Schema
 * via the `definition` "job_runtime_plugin".
 */
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
/**
 * This interface was referenced by `StoatConfigSchema`'s JSON-Schema
 * via the `definition` "auto_hosting_plugin".
 */
export interface AutoHostingPlugin {
  /**
   * When enabled, the Stoat action will automatically detect build artifacts that can be hosted, and log the suggestions in the action.
   */
  enabled: boolean;
  /**
   * Whether to show the suggested artifacts to host in the rendered comment. This feature has not been implemented yet.
   */
  show_in_comment?: boolean;
  /**
   * Whether to automatically upload the detected artifacts to the Stoat server for hosting.
   */
  auto_upload?: boolean;
  [k: string]: unknown;
}
/**
 * Schema of the input file for the metric task.
 *
 * This interface was referenced by `StoatConfigSchema`'s JSON-Schema
 * via the `definition` "metric_entry".
 */
export interface MetricEntry {
  value: number;
  tag?: string;
  tags?: string[];
  [k: string]: unknown;
}
