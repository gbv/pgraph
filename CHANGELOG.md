# Changelog

## 0.6.16

- Sort labels in PG-JSON format

## 0.6.14 and 0.6.15

- Cleanup dependencies

## 0.6.13

- Give reason when graph is reduced

## 0.6.12

- PG format: more align with current specification

## 0.6.11

- PG format: disallow space between property key and colon

## 0.6.10

- Fix serialization of mixed graph in GraphML
- Dot parser: warn when subgraph is ignored

## 0.6.9

- PG format: allow linebreaks in quoted strings
- Add space in HTML view

## 0.6.8

- Add missing file

## 0.6.7

- Support HTML labels in DOT output

## 0.6.6

- PG format: require whitespace around direction

## 0.6.5

- Fix Docker image

## 0.6.4

- Release and document Docker images

## 0.6.3

- Add verbatim strings to PG format

## 0.6.2

- Warn when graph is reduced (at least in some cases)
- Fix bug in PG-JSON parser
- PG format: disallow unquoted identifier to start with opening bracket
- Use NULL byte as array delimiter in CSV export

## 0.6.1

- Disallow repeated edge identifiers

## 0.6.0

- Support directly writing into Neo4J 
- PG format: require space between unquoted identifier and direction
- PG format: support edge identifiers

## 0.5.4

- Add experimental Mermaid export and --html filter

## 0.5.3

- Allow single quoted strings in PG format

## 0.5.2

- Add NCOL format

## 0.5.1

- Fix use when neo4j is not installed

## 0.5.0

- Remove null from data model, PG format, and PG-JSON(L)
- Change PG parsing of unquoted key-value pair "a:b:c" to "a: b:c"

## 0.4.2

- Support Graphology import/export serialization
- Extend documentation of format features

## 0.4.1

- Fix null values in Cypher export

## 0.4.0

- Disallow reverse direction <-

## 0.3.1

- Support to omit space around direction

## 0.3.1

- Allow comma in unquoted strings except for values

## 0.3.0

- Make property values lists instead of sets
- Add type field in PG-JSONL

## 0.2.4

- Disallow unquoted identifiers to start with --
- Add experimental support of JSON Canvas

## 0.2.3

- support parsing Cypher create statements
- disallow empty string node identifiers, labels, and property keys

## 0.2.2

- support writing Cypher create statements

## 0.2.1

- add CLI option -i, --id to copy node id to a property
- rename CLI option -v, --verbose to -e, --errors
- fix merging of properties in repeated nodes
- update grammar and format description

## 0.2.0

- change line separator from semicolon to vertical bar
- extend documentation and grammar
- rename NDJSON to JSONL

## 0.1.1

- move repository to <https://github.com/pg-format>
- extend documentation

## 0.1.0

- first release at npm

