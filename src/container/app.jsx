import {increment, decrement} from '../actions'
// connect := connect component and redux
import {connect} from 'react-redux'
import Grid from '../components/grid'

export default connect(
    state => ({count: state}),
    {increment, decrement}
)(Grid)

