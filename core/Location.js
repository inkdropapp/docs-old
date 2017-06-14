import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'
import createHistory from 'history/createBrowserHistory'
import createMemoryHistory from 'history/createMemoryHistory'

const location = (canUseDOM ? createHistory : createMemoryHistory)()

export default location
