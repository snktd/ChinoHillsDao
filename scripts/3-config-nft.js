import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "BUNDLE_DROP_MODULE_ADDR",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Chino Hills Citizenship",
        description: "This NFT will give you access to ChinoHillsDAO!",
        image: readFileSync("scripts/assets/chinohillscitizenship.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()