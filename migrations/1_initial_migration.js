const Migrations = artifacts.require("Migrations");

const DEXOO_Token = artifacts.require("./DEXOOToken.sol");
module.exports = function(deployer) {
    deployer.deploy(DEXOO_Token, '900000000000000');
};
