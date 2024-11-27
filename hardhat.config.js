require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.0",
        settings: {
          optimizer: {
           enabled: true,
           runs: 1000,
          }
        }
      },
      {
        version: "0.8.27",
        settings: {
          optimizer: {
           enabled: true,
           runs: 1000,
          }
        }
      },
      {
        version: "0.6.0",
        settings: {
          optimizer: {
           enabled: true,
           runs: 1000,
          }
        }
      },
      {
        version: "0.6.2",
        settings: {
          optimizer: {
           enabled: true,
           runs: 1000,
          }
        }
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
           enabled: true,
           runs: 1000,
          }
        }
      },
      {
        version: "0.5.16",
        settings: {
           optimizer: {
            enabled: true,
            runs: 1000,
           }
         }
      },
    ]
  },
};
