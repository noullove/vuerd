import fs from "fs";
import path from "path";
import { tokenizer, parser } from "@src/core/SQLParser";
import { databaseHints } from "@src/core/DataType";

type TestCase = [string, string, string];
const testCaseList: Array<TestCase> = [];
function setupCase() {
  const sqlDDLTestCase = fs.readFileSync(
    path.join(__dirname, "../../../data/SQL_DDL_Test_Case.md"),
    "utf8"
  );
  const testCases = sqlDDLTestCase
    .split("### ")
    .slice(1)
    .map((value) => `### ${value}`);
  testCases.forEach((testCase) => {
    const caseName = /###.*/.exec(testCase);
    if (caseName) {
      const center = testCase.search(/```\s/);
      const jsonString = testCase.slice(center + 3);
      const sql = testCase.substring(testCase.search(/```sql/) + 6, center);
      const json = jsonString.substring(
        jsonString.search(/```json/) + 7,
        jsonString.search(/```\s/)
      );
      testCaseList.push([
        caseName.toString(),
        sql,
        JSON.stringify(JSON.parse(json)),
      ]);
    }
  });
}
setupCase();

it.each(testCaseList)("%s", (_, sql, json) => {
  const tokens = tokenizer(sql);
  const statements = parser(tokens);
  expect(JSON.parse(json)).toEqual({ statements });
});