import canUseDOM from 'can-use-dom'
import createHistory from 'history/createBrowserHistory'
import createMemoryHistory from 'history/createMemoryHistory'

const location = (canUseDOM ? createHistory : createMemoryHistory)()

export default location
