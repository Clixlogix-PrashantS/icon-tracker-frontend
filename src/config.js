let configJson;

// let apiUrl = `https://tracker.berlin.icon.community`
// export const nodeApiUrl = 'https://berlin.net.solidwallet.io'
// let apiUrl = `https://tracker.icon.community`
// export const nodeApiUrl = 'https://api.icon.geometry.io'
// let apiUrl = `${window.location.origin}`
// let wsURL = "wss://" + `${window.location.host}`
// let apiUrl = 'http://149.28.67.183:8000'
// let wsURL = 'ws://149.28.67.183:8000'
let apiUrl = 'http://localhost:8000'
let wsURL = 'ws://localhost:8000'

let walletUrls = {
    'https://tracker.icon.community': 'https://api.icon.geometry.io',  // Change
    'https://tracker.berlin.geometry.io': 'https://berlin.net.solidwallet.io',  // RM
    'https://tracker.lisbon.geometry.io': 'https://lisbon.net.solidwallet.io',  // RM
    'https://tracker.berlin.icon.community': 'https://berlin.net.solidwallet.io',
    'https://tracker.lisbon.icon.community': 'https://lisbon.net.solidwallet.io',
    'https://tracker.sejong.icon.community': 'https://sejong.net.solidwallet.io',
}

export const nodeApiUrl = walletUrls[`${apiUrl}`] || 'https://ctz.solidwallet.io/api/v3'


switch (`${process.env.REACT_APP_DEPLOYMENT_ENVIRONMENT}` + `-` + `${process.env.REACT_APP_NETWORK_NAME}` ) {
    case 'dev-mainnet':
        configJson =  {   
            "VERSION": "1.0.18_20190313_0",
            "TRACKER_API_URL": apiUrl,
            "TRACKER_WS_URL": wsURL,
            "WALLET_API_URL": nodeApiUrl,
            "__IS_SOLO_VERSION": false}
        break
    case 'prod-mainnet' :
        configJson =  {   
            "VERSION": "1.0.18_20190313_0",
            "TRACKER_API_URL": apiUrl, 
            "TRACKER_WS_URL": wsURL,
            "WALLET_API_URL": nodeApiUrl,
            "__IS_SOLO_VERSION": false}
        break
    case 'prod-sejong' :
        configJson =  {   
            "VERSION": "1.0.18_20190313_0",
            "TRACKER_API_URL": apiUrl,
            "TRACKER_WS_URL": wsURL,
            "WALLET_API_URL": nodeApiUrl,
            "__IS_SOLO_VERSION": false}
        break
    case 'prod-berlin' :
        configJson =  {
            "VERSION": "1.0.18_20190313_0",
            "TRACKER_API_URL": apiUrl,
            "TRACKER_WS_URL": wsURL,
            "WALLET_API_URL": nodeApiUrl,
            "__IS_SOLO_VERSION": false}
        break
    case 'prod-lisbon' :
        configJson =  {
            "VERSION": "1.0.18_20190313_0",
            "TRACKER_API_URL": apiUrl,
            "TRACKER_WS_URL": wsURL,
            "WALLET_API_URL": nodeApiUrl,
            "__IS_SOLO_VERSION": false}
        break
    default:
        configJson =  {   
            "VERSION": "1.0.18_20190313_0",
            "TRACKER_API_URL": apiUrl,
            "TRACKER_WS_URL": wsURL,
            "WALLET_API_URL": nodeApiUrl,
            "__IS_SOLO_VERSION": false}
        break
}

export default configJson;
