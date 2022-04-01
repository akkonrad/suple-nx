# Suple

This is an example file with default selections.

## Install

Install all dependencies.

Prequisities: you need to have neo4j database at some point (TODO)

```
yarn install
```

## Run app

Run each job separately

```
yarn go:be // backend
yarn go:fe // frontend
yarn go:db // neo4j database - TODO
```

## Development

```

```

### Project structure

frontend - backend - libraries -

- ui
- data
- b
- c

```
TODO
```

### Create new library

```
nx g @nrwl/workspace:library <path/library name> --dryRun
nx g @nrwl/angular:library <app-name/library type> --dryRun
```

### Create a new module in library

```
nx g @nrwl/angular:module <module name> --project=<library name> --dryRun
```

### Create new component in a library

```
nx g @nrwl/angular:component <path/component-name> --project=<library name> --dryRun
```

## Tests

TODO

## Deployment

TODO

## Contributing

PRs accepted.

## License

MIT © Richard McRichface.
