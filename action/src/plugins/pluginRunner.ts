import {
  AutoHostingPlugin,
  ImageDiffPlugin,
  JobRuntimePlugin,
  JsonPlugin,
  MetricPlugin,
  StaticHostingPlugin,
  StoatConfigSchema,
  WorkflowDispatchPlugin
} from '../../../types/src';
import { GithubActionRun } from '../types';
import { DefaultAutoHostingConfig, runAutoHostingPlugin } from './autoHosting';
import { runImageDiffPlugin } from './imageDiff';
import { runJobRuntimePlugin } from './jobRuntime';
import { runJsonPlugin } from './json';
import { runMetricPlugin } from './metric';
import { runStaticHostingPlugin } from './staticHosting';
import { runWorkflowDispatchPlugin } from './workflowDispatch';

export const runPlugins = async (
  stoatConfig: StoatConfigSchema,
  githubActionRun: GithubActionRun,
  stoatConfigFileId: number
): Promise<void> => {
  if (stoatConfig.plugins?.static_hosting !== undefined) {
    for (const [taskId, taskConfig] of Object.entries(stoatConfig.plugins.static_hosting)) {
      await runStaticHostingPlugin(taskId, taskConfig as StaticHostingPlugin, githubActionRun, stoatConfigFileId);
    }
  }

  if (stoatConfig.plugins?.json !== undefined) {
    for (const [taskId, taskConfig] of Object.entries(stoatConfig.plugins.json)) {
      await runJsonPlugin(taskId, taskConfig as JsonPlugin, githubActionRun, stoatConfigFileId);
    }
  }

  if (stoatConfig.plugins?.image_diff !== undefined) {
    for (const [taskId, taskConfig] of Object.entries(stoatConfig.plugins.image_diff)) {
      await runImageDiffPlugin(taskId, taskConfig as ImageDiffPlugin, githubActionRun, stoatConfigFileId);
    }
  }

  if (stoatConfig.plugins?.workflow_dispatch !== undefined) {
    for (const [taskId, taskConfig] of Object.entries(stoatConfig.plugins.workflow_dispatch)) {
      await runWorkflowDispatchPlugin(taskId, taskConfig as WorkflowDispatchPlugin, githubActionRun, stoatConfigFileId);
    }
  }

  if (stoatConfig.plugins?.metric !== undefined) {
    for (const [taskId, taskConfig] of Object.entries(stoatConfig.plugins.metric)) {
      await runMetricPlugin(taskId, taskConfig as MetricPlugin, githubActionRun, stoatConfigFileId);
    }
  }

  if (stoatConfig.plugins?.job_runtime?.tracking === true || stoatConfig.plugins?.job_runtime?.tracking === undefined) {
    await runJobRuntimePlugin(
      'stoat_job_runtime',
      stoatConfig.plugins?.job_runtime as JobRuntimePlugin,
      githubActionRun,
      stoatConfigFileId
    );
  }

  const autoHostingEnabled = stoatConfig.plugins?.auto_hosting?.enabled;
  if (autoHostingEnabled === undefined || autoHostingEnabled) {
    const autoHostingConfig: AutoHostingPlugin = stoatConfig.plugins?.auto_hosting || DefaultAutoHostingConfig;
    await runAutoHostingPlugin('stoat_auto_hosting', autoHostingConfig, githubActionRun, stoatConfigFileId);
  }
};
