import { connect } from 'react-redux'
import Listings from '../components/allListings'
import { deleteListing } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteListing: index => dispatch(deleteListing(index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);

