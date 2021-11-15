const AuraERC20 = artifacts.require('Aura')
const SafeMath = artifacts.require('SafeMath')

module.exports = function (deployer, network, accounts) {
    deployer.deploy(SafeMath, {
        from: accounts[0]
    })
    deployer.link(SafeMath, AuraERC20)
    deployer.deploy(AuraERC20, {
        from: accounts[0]
    })
}
