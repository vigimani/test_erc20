const { BN } = require("@openzeppelin/test-helpers");

const ERC20Token = artifacts.require("MyToken");

module.exports=async(deployer, network, accounts) => {
    deployer.deploy(ERC20Token, 926)
}