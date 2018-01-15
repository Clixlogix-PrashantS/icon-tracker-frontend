import { connect } from 'react-redux';
import { BlocksPage } from '../../components/';
import { getBlocks } from '../../redux/actions/blocksActions';

function mapStateToProps(state) {
  return {
    loading: state.blocks.block.loading,
    data: state.blocks.block.data,
    pageNum: state.blocks.block.pageNum,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBlock: (payload) => dispatch(getBlock(payload))
  };
}

const BlockDetailPageContainer = connect(mapStateToProps, mapDispatchToProps)(BlockDetailPage);

export default BlockDetailPageContainer;