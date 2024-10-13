import { readFileSync } from "fs";
import path from "path";
import { gql } from "graphql-tag";

function loadFileContents() {
  return readFileSync(
    path.join(__dirname, "../../../resources/schema.graphql"),
    "utf-8",
  );
}

const schema = gql(loadFileContents());

export default schema;
