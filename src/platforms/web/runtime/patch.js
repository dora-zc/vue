/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

// 利用函数柯里化，在执行 patch 函数之前，把平台差异化已经抹平了
export const patch: Function = createPatchFunction({ nodeOps, modules })
