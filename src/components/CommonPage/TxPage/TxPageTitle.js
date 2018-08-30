import React, { Component } from 'react';
import {
    TX_TYPE,
    IRC_VERSION
} from 'utils/const'
import {
    numberWithCommas
} from 'utils/utils'

class TxPageTitle extends Component {

    render() {
        const {
            txType,
            urlIndex,
            listSize,
            totalSize,
        } = this.props

        const Content = () => {
            const _listSize = numberWithCommas(listSize || 0)
            const _totalSize = numberWithCommas(totalSize || 0)
            switch (txType) {
                case TX_TYPE.CONTRACT_TX:
                    return (
                        <p className="title">
                            Transactions
                            <span>for Contract {urlIndex}</span>
                            <span className="right">A total of<em>{_listSize}</em> transactions found</span>
                        </p>
                    )
                case TX_TYPE.CONTRACT_INTERNAL_TX:
                    return (
                        <p className="title">
                            Internal Transactions
                            <span>for Contract {urlIndex}</span>
                            <span className="right">A total of<em>{_listSize}</em> internal transactions found</span>
                        </p>
                    )
                case TX_TYPE.CONTRACT_TOKEN_TX:
                    return (
                        <p className="title">
                            Token Transfers
                            <span>for Contract {urlIndex}</span>
                            <span className="right">A total of<em>{_listSize}</em> token transfers found</span>
                        </p>
                    )
                case TX_TYPE.CONTRACT_EVENTS:
                    return (
                        <p className="title">
                            Events
                            <span>for Contract {urlIndex}</span>
                            <span className="right">A total of<em>{_listSize}</em> events found</span>
                        </p>
                    )
                case TX_TYPE.ADDRESS_TX:
                    return (
                        <p className="title">
                            Transactions
                            <span>for Address {urlIndex}</span>
                            <span className="right">A total of<em>{_listSize}</em> transactions found</span>
                        </p>
                    )
                case TX_TYPE.ADDRESS_TOKEN_TX:
                    return (
                        <p className="title">
                            Token Transfers
                            <span>for Address {urlIndex}</span>
                            <span className="right">A total of<em>{_listSize}</em> token transfers found</span>
                        </p>
                    )
                case TX_TYPE.BLOCK_TX:
                    return (
                        <p className="title">
                            Transactions
                            <span>for Block Height {urlIndex}</span>
                            <span className="right">A total of<em>{_listSize}</em> transactions found</span>
                        </p>
                    )
                case TX_TYPE.TOKEN_TX:
                    return (
                        <p className="title">
                            Token Transfers
                            <span>for Token {urlIndex}</span>
                            <span className="right">A total of<em>{_listSize}</em> token transfers found</span>
                        </p>
                    )
                case TX_TYPE.TOKEN_HOLDERS:
                    return (
                        <p className="title">
                            Token Holders
                            <span>for Token {urlIndex}</span>
                            <span className="right">A total of<em>{_totalSize}</em> holders found<em className="gray">(Showing the top {_listSize} holders only)</em></span>
                        </p>
                    )
                case TX_TYPE.TRANSACTION_EVENTS:
                    return (
                        <p className="title">
                            Events
                            <span>for Transactions {urlIndex}</span>
                            <span className="right">A total of<em>{_totalSize}</em> events found</span>
                        </p>
                    )
                case TX_TYPE.TRANSACTION_INTERNAL_TX:
                    return (
                        <p className="title">
                            Internal Transactions
                            <span>for Transactions {urlIndex}</span>
                            <span className="right">A total of<em>{_listSize}</em> internal transactions found</span>
                        </p>
                    )
                case TX_TYPE.BLOCKS:
                    return (
                        <p className="title token">
                            Blocks
                            <span></span>
                            <span className="right">A total of<em>{_totalSize}</em> total blocks found<em className="gray">(Showing the last {_listSize} records only)</em></span>
                        </p>
                    )
                case TX_TYPE.ADDRESSES:
                    return (
                        <p className="title">
                            Addresses
                        </p>
                    )
                case TX_TYPE.TRANSACTIONS:
                    return (
                        <p className="title token">
                            Transactions
                            <span></span>
                            <span className="right">A total of<em>{_totalSize}</em> total transactions found<em className="gray">(Showing the last {_listSize} records only)</em></span>
                        </p>
                    )
                case TX_TYPE.TOKEN_TRANSFERS:
                    return (
                        <p className="title token">
                            Token Transfers
                            <span>({IRC_VERSION[1]})</span>
                            <span className="right">A total of<em>{_totalSize}</em> token transfers found<em className="gray">(Showing the last {_listSize} records only)</em></span>
                        </p>
                    )
                default:
                    return <p></p>
            }
        }
        return Content()
    }
}

export default TxPageTitle;