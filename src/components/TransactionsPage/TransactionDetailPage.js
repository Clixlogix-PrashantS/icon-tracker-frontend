import React, { Component } from 'react';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import { dateToUTC9, convertNumberToText } from '../../utils/utils';
import { BlockLink, WalletLink, NotFound } from '../../components/';
import clipboard from 'clipboard';

class TransactionDetailPage extends Component {

  constructor(props) {
    super(props);
		this.state = {};
		this.clipboard = new clipboard('.clipboard-btn');
  }

  componentWillMount() {
    this.props.getTransaction(this.props.url.pathname.split("/")[2]);
	}

	componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    const { loading, data, error } = this.props;
    // 데이터가 없을 경우
    if (error !== "" && !loading) {
      return (
        <NotFound error={error}/>
      )
    } else {
      return (
        <div className="content-wrap">
  				<div className="screen0">
  					<div className="wrap-holder">
  						<p className="title">Transaction Detail</p>
  						<div className="contents">
  							<table className="table-typeB">
  								<tbody>
                    <tr>
                      <td>Tx Hash</td>
                      <td> {data.txHash} <em className="img clipboard-btn" data-clipboard-text={data.txHash}></em></td>
                    </tr>
  									<tr>
  										<td>Status</td>
  										<td> - </td>
  									</tr>
  									<tr>
  										<td>Block</td>
  										<td><span><BlockLink to = {data.height} /></span></td>
  									</tr>
  									<tr>
  										<td>Time Stamp</td>
  										<td>{dateToUTC9(data.createDate)}</td>
  									</tr>
                    <tr>
  										<td>From</td>
  										<td><span><WalletLink to = {data.fromAddr}/></span><em className="img clipboard-btn" data-clipboard-text={data.fromAddr}></em></td>
  									</tr>
  									<tr>
  										<td>To</td>
  										<td><span><WalletLink to = {data.toAddr}/></span><em className="img clipboard-btn" data-clipboard-text={data.toAddr}></em></td>
  									</tr>
  									<tr>
  										<td>Amount</td>
  										<td>{data.amount}</td>
  									</tr>
  									<tr>
  										<td>Fee</td>
  										<td>{data.fee} ICX</td>
  									</tr>
  								</tbody>
  							</table>
  						</div>
  					</div>
  				</div>
  			</div>
      )
    }
  }
}

export default withRouter(TransactionDetailPage);