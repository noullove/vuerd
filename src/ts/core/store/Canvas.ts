export interface CanvasState {
  width: number;
  height: number;
  scrollTop: number;
  scrollLeft: number;
  show: Show;
  database: Database;
  databaseName: string;
  canvasType: CanvasType;
  language: Language; // ADD: version 0.2.16
  tableCase: NameCase; // ADD: version 0.2.18
  columnCase: NameCase; // ADD: version 0.2.18
}

export interface Show {
  tableComment: boolean;
  columnComment: boolean;
  columnDataType: boolean;
  columnDefault: boolean;
  columnAutoIncrement: boolean;
  columnPrimaryKey: boolean;
  columnUnique: boolean;
  columnNotNull: boolean;
  relationship: boolean;
}

export type ShowKey =
  | "tableComment"
  | "columnComment"
  | "columnDataType"
  | "columnDefault"
  | "columnAutoIncrement"
  | "columnPrimaryKey"
  | "columnUnique"
  | "columnNotNull"
  | "relationship";

export type CanvasType =
  | "ERD"
  | "SQL"
  | "List"
  | "GeneratorCode"
  | "Visualization";

export type Database = "MariaDB" | "MSSQL" | "MySQL" | "Oracle" | "PostgreSQL";

export type Language =
  | "graphql"
  | "cs"
  | "java"
  | "kotlin"
  | "typescript"
  | "JPA";

export type NameCase = "none" | "camelCase" | "pascalCase" | "snakeCase";

export function createCanvasState(): CanvasState {
  return {
    width: 2000,
    height: 2000,
    scrollTop: 0,
    scrollLeft: 0,
    show: {
      tableComment: true,
      columnComment: true,
      columnDataType: true,
      columnDefault: true,
      columnAutoIncrement: true,
      columnPrimaryKey: true,
      columnUnique: true,
      columnNotNull: true,
      relationship: true,
    },
    database: "MySQL",
    databaseName: "",
    canvasType: "ERD",
    language: "graphql",
    tableCase: "pascalCase",
    columnCase: "camelCase",
  };
}
