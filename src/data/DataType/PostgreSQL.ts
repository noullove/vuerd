import { DataTypeHint } from "../dataType";

const PostgreSQLTypes: DataTypeHint[] = [
  { name: "bigint" },
  { name: "int8" },
  { name: "bigserial" },
  { name: "serial8" },
  { name: "bit" },
  { name: "bit varying" },
  { name: "varbit" },
  { name: "boolean" },
  { name: "bool" },
  { name: "box" },
  { name: "bytea" },
  { name: "character varying" },
  { name: "varchar" },
  { name: "character" },
  { name: "char" },
  { name: "cidr" },
  { name: "circle" },
  { name: "date" },
  { name: "double precision" },
  { name: "float8" },
  { name: "inet" },
  { name: "integer" },
  { name: "int" },
  { name: "int4" },
  { name: "interval" },
  { name: "line" },
  { name: "lseg" },
  { name: "macaddr" },
  { name: "money" },
  { name: "numeric" },
  { name: "decimal" },
  { name: "path" },
  { name: "point" },
  { name: "polygon" },
  { name: "real" },
  { name: "float4" },
  { name: "smallint" },
  { name: "int2" },
  { name: "smallserial" },
  { name: "serial" },
  { name: "text" },
  { name: "time" },
  { name: "timetz" },
  { name: "timestamp" },
  { name: "timestamptz" },
  { name: "tsquery" },
  { name: "tsvector" },
  { name: "txid_snapshot" },
  { name: "uuid" },
  { name: "xml" },
  { name: "json" }
];

export default PostgreSQLTypes;