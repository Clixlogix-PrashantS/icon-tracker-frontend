import React, { Component } from 'react';
import AddressInfo from './AddressInfo'
import AddressTabs from './AddressTabs'
import {
    DetailPage
} from '../../../components';
import {
    ADDRESS_TABS
} from '../../../utils/const'
import { addressInternalTxList, addressRewardList, addressVotedList, addressTokenTxList } from '../../../redux/store/addresses';
import { getBondList, getDelegation } from '../../../redux/store/iiss'
class AddressesDetailPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            internalTxns: ""
        }
    }
    checkTabs = async (address) => {
        let payload = { address: `${address}`, page: 1, count: 10 }
        this.intTx = await addressInternalTxList(payload)
        this.tokentransfers = await addressTokenTxList(payload)
        this.voted = await addressVotedList(payload)
        this.rewards = await addressRewardList(payload)
        this.deleg = await getDelegation(payload)
        this.tokenTx = await addressTokenTxList(payload)
        this.bondList = await getBondList(payload)
        
    }
    
    async componentDidMount() {
        this.checkTabs(this.props.match.params.addressId)   
    }
    
    render() {
        const { wallet } = this.props;
        const { loading, error, data } = wallet
        const deleg = this.deleg
        const { is_prep, hasDelegations } = data

        const TABS = [], getList = []

        TABS.push(ADDRESS_TABS[0])
        getList.push(address => {
            this.props.addressTxList({ address, page: 1, count: 10 })
        })


        if (this.intTx ? this.intTx.data.length : null) {
            TABS.push(ADDRESS_TABS[1])
            getList.push(address => {
                this.props.addressInternalTxList({ address, page: 1, count: 10 })
            })
        }
        if (this.tokentransfers ? this.tokentransfers.data.length : null) {
            TABS.push(ADDRESS_TABS[2])
            getList.push(address => {
                this.props.addressTokenTxList({ address, page: 1, count: 10 })

            })
        }
        if (this.deleg? this.deleg.delegations.length: null) {
            TABS.push(ADDRESS_TABS[3])
            getList.push(address => {
                this.props.addressDelegationList({ address, page: 1, count: 10 })
            })
        }
        if (this.voted ? this.voted.data.length : null) {
            TABS.push(ADDRESS_TABS[4])
            getList.push(address => {
                this.props.addressVotedList({ address, page: 1, count: 10 })
            })
        }
        
        if (this.rewards ? this.rewards.data.length : null) {
            TABS.push(ADDRESS_TABS[5])
            getList.push(address => {
                this.props.addressRewardList({ address })
            })
        }
        if (this.bondList ? this.bondList.length : null) {
            TABS.push(ADDRESS_TABS[6])
            getList.push(address => {
                getBondList({address})
            })
        }
        return (

            <DetailPage
                {...this.props}
                loading={loading}
                error={error}
                TABS={TABS}
                ROUTE="/address"
                getInfo={address => { this.props.addressInfo({ address }) }}
                getList={getList}
                InfoComponent={AddressInfo}
                TabsComponent={AddressTabs}
                hasDelegations={hasDelegations}
                isPrep={is_prep}
                tokenList={payload => { this.props.addressTokenTxList({ payload }) }}
                balanceOf={payload => { this.props.getBalanceOf({ payload }) }}
                delegations={deleg}

            />
        )
    }
}

export default AddressesDetailPage;
