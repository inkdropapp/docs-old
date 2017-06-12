/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'
import createHistory from 'history/createBrowserHistory'
import createMemoryHistory from 'history/createMemoryHistory'

const location = (canUseDOM ? createHistory : createMemoryHistory)()

export default location
