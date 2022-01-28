//https://eth-ropsten.alchemyapi.io/v2/U6Gq4_b2289tTrWYCPRydx8JudMthbvH

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/U6Gq4_b2289tTrWYCPRydx8JudMthbvH',
      accounts: ['85b769c06048a4eebedd741f8df0b49f589e5dac4419c73d90af8a6e64bdfa43']
    }
  }
}