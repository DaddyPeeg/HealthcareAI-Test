import { CodegenConfig } from "@graphql-codegen/cli";
import { config as dotenv } from "dotenv";
dotenv();

const config: CodegenConfig = {
  schema: process.env.VITE_GRAPHQL_URL,
  documents: [
    "src/graphql/declarations/**/*.tsx",
    "src/graphql/declarations/**/*.ts",
  ],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/graphql/generated/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false, // HERE
      },
    },
  },
  verbose: true,
};

export default config;
