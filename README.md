# Design tokens types

This repo contains types for DTCG tokens and tokens for the [TokensBrücke](https://github.com/tokens-bruecke/figma-plugin) Figma plugin.

## Installation

```bash
yarn add git+https://github.com/tokens-bruecke/tokens-types.git -D
```

or with a specific version:

```bash
yarn add git+https://github.com/tokens-bruecke/tokens-types.git#package-tag -D
```

1. Configure _tsconfig.json_
    ```js
    {
        "compilerOptions": {
            "typeRoots": [
                "./node_modules/@tokens-bruecke/tokens-types"
            ]
        }
    }
    ```
    The configuration above is needed for the TypeScript compiler to use type definitions found in both `./node_modules/@types` and `./node_modules/@figma`. Normally, most external type definitions are from DefinitelyTyped and are installed in `/@types`, which included by TypeScript by default. Since we host the plugin typings separately, they are installed outside in `/@figma` instead.

    Types should become globally available without needing to use import statements. We do it this way because the plugin API is part of the host environment, as opposed to being a package that a plugin includes.

