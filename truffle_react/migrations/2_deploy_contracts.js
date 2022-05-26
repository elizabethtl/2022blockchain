var GeneStorage = artifacts.require("./GeneStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(GeneStorage);
};
