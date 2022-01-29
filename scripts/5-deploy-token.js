import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("MODULE_ADDR");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "ChinoHillsDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "CHINO",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
