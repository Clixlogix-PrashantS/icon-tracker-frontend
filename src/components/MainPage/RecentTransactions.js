import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { convertNumberToText } from '../../utils/utils'
import { LoadingComponent, TransactionLink } from '../../components'
import icon_01 from '../../style/image/icon_01.png'

class RecentTransactions extends Component {
  render() {
    const { loading, tmainTx } = this.props.info
    const list = tmainTx || []
    return (
      <li className="right">
        <p className="title">Transactions<Link to='/transactions'><span>View all<em className="img"></em></span></Link></p>
        <div className="list-group">
        {
          loading ?
          <div style={{height: '511px'}}>
            <LoadingComponent />
          </div>
          :
          <ul className="list">
            {list.map(tx => {
              const { txHash, amount, fee } = tx
              return (
                <li key={txHash}>
                  <p className="icon"><img src={icon_01} alt="transaction-img"/><span>SUCCESS</span></p>
                  <p className="a">TX Hash<em><TransactionLink to={txHash} label={txHash}/></em></p>
                  <p className="b">Amount<em>{`${convertNumberToText(amount, 'icx')} ICX`}</em></p>
                  <p className="c">Fee<em>{`${convertNumberToText(fee, 'icx')} ICX`}</em></p>
                </li>
              )
            })}
          </ul>
        }
        </div>
      </li>
    );
  }
}

export default RecentTransactions;
