```dataview
TABLE without ID
file.name as Origin, out AS "Não criados"
FLATTEN file.outlinks as out
WHERE !(out.file) AND !contains(meta(out).path, ".")
SORT Origin ASC
```
