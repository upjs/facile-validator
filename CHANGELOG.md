# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 0.1.0 (2022-03-05)

### ⚠ BREAKING CHANGES

- use `data-rules` instead of `v-rules`

### Features

- add `accepted` rule ([165ad31](https://github.com/upjs/facile-validator/commit/165ad311400c4c267c0394929a51e9499818ea9a))
- add `alpha-num-dash` rule ([e475ef5](https://github.com/upjs/facile-validator/commit/e475ef5fdcc3dd591b72eef09eaba598620dcfa7))
- add `alpha-num` and `num-dash` rules ([f3f1cb3](https://github.com/upjs/facile-validator/commit/f3f1cb3b58e867aff4eb33a4e6a27cda3b5be5eb))
- add `alpha` rule ([857b1a0](https://github.com/upjs/facile-validator/commit/857b1a00d4af8660a8430c33f55211650fcf637e))
- add `alpha` rule ([58fdb6b](https://github.com/upjs/facile-validator/commit/58fdb6b6746b429b86e8d6b3407e1cf3b9db60ac))
- add `createLang` function to support ts in custom langs ([f896802](https://github.com/upjs/facile-validator/commit/f89680274a4159d8552f5b2bb390af601128d421))
- add `createLang` function to support ts in custom langs ([11bacdb](https://github.com/upjs/facile-validator/commit/11bacdb78e688ff87950ce04c67353020e61125b))
- add `digits` rule ([4421af3](https://github.com/upjs/facile-validator/commit/4421af3a843b999c8cfa17dba0600dc0af88ebb6))
- add `endsWith` rule ([7fb1ecc](https://github.com/upjs/facile-validator/commit/7fb1ecc540f462d84da1d16449f0f5e9f0de1f2a))
- add `events` support ([5056dfc](https://github.com/upjs/facile-validator/commit/5056dfc0f90d599c792c9762dc35e78ee330ee66))
- add `gt` rule ([15b4ec6](https://github.com/upjs/facile-validator/commit/15b4ec6c49ae49d5e3a6cd8036e90f4b87c398ed))
- add `gte` rule ([dd96349](https://github.com/upjs/facile-validator/commit/dd9634923cdac34257d8d587aefdc492666b1135))
- add `integer` alias for int ([e630e8e](https://github.com/upjs/facile-validator/commit/e630e8e4baaf4caac43a6f59fdbf98971c0b94b6))
- add `Lang` type ([f7bb99e](https://github.com/upjs/facile-validator/commit/f7bb99e642c4b1cc04002c176a83c4eb97eba2be))
- add `length` rule ([8384bb2](https://github.com/upjs/facile-validator/commit/8384bb226b665b8a34fddf54eb9aa0e2021d3aee))
- add `lt` rule ([6ce701a](https://github.com/upjs/facile-validator/commit/6ce701acb30bf312defbc6159eac64e5811d5448))
- add `lte` rule ([2b21cf6](https://github.com/upjs/facile-validator/commit/2b21cf60f63591294c018d575f186bc36d4d1ff9))
- add `maxlen` & `minlen` & `len` alias ([8da8ac5](https://github.com/upjs/facile-validator/commit/8da8ac535ddb67a0a9c663c53274502608ad97fe))
- add `required-if` rule (without test) ([7497e71](https://github.com/upjs/facile-validator/commit/7497e71f75e6118de1a61b272c2c731f4b03d4e3))
- add `REQUIRED` RuleError to `between` rule ([284167d](https://github.com/upjs/facile-validator/commit/284167d0c32e86b0821febc9cc91e08d38e5762c))
- add `startsWith` rule ([1300995](https://github.com/upjs/facile-validator/commit/1300995365c8f7d2cc12f276718aac66086c09a4))
- add `validate:failed` event ([8d08aba](https://github.com/upjs/facile-validator/commit/8d08abaf21ee1d1ae1f55c9582f48055bf8aca27))
- add `within` rule ([b3eddaf](https://github.com/upjs/facile-validator/commit/b3eddaf984f314f04075768d7917ef189281ac49))
- add two `min` & `max` alias ([830eef6](https://github.com/upjs/facile-validator/commit/830eef619331d94be2043e816853241b69512c06))
- pass form as first argument of events ([cce6275](https://github.com/upjs/facile-validator/commit/cce6275b7ccb443f98c23cf9ac31d7659b23d4af))
- pass status to `validate:end` hook ([9f87f4c](https://github.com/upjs/facile-validator/commit/9f87f4ce916077386d07e35d55e680960f8d18dd))
- replace `throwErrorWhen` with `when` ([a18be2c](https://github.com/upjs/facile-validator/commit/a18be2c7323340f4d07c49b4c2c32eea58d095ad))
- support `async` validation ([b4ad388](https://github.com/upjs/facile-validator/commit/b4ad388a1aeb101418a40bb82b9f8d9235d06966))
- support `defaultOption` ([26611e7](https://github.com/upjs/facile-validator/commit/26611e74106adc8d718aca7013fd56e5a0c14340))
- support `events` with options ([2579900](https://github.com/upjs/facile-validator/commit/2579900676213a48c940a5e969d6b4489223aa25))
- support dependency in rules ([db8e620](https://github.com/upjs/facile-validator/commit/db8e62045cd9a16fa020709613f6a36e46198584))
- support for optional language ([f793c69](https://github.com/upjs/facile-validator/commit/f793c696b2ad39fc818fcc60196d9d89017fdc12))
- support for optional language ([f7d320e](https://github.com/upjs/facile-validator/commit/f7d320e3c533a6b909285074e1cea5b832109f5b))
- support multiple naming for rules ([bcac47a](https://github.com/upjs/facile-validator/commit/bcac47a540040a9f6393fe0b58b4f37976362187))

### Bug Fixes

- `throw error` must stop validating ([8e532f4](https://github.com/upjs/facile-validator/commit/8e532f4f015ecc85f567d84fe05b789f39f934eb))
- add more check on between argument ([6f501db](https://github.com/upjs/facile-validator/commit/6f501dbf3fef6ac0679318efb4122f96022dcbc9))
- add more tests for `alpha-num-dash` ([6369897](https://github.com/upjs/facile-validator/commit/6369897c61e8052499d5c760e0f61e1bcd9f4b89))
- edit error message ([92afda0](https://github.com/upjs/facile-validator/commit/92afda08e41ca72fcde913ed6f7b83eab6209e4b))
- edit incorrect texts ([c21f2f3](https://github.com/upjs/facile-validator/commit/c21f2f30a738afab6afc1e5d9a50f8aba868d47a))
- edit incorrect texts ([b14b2e7](https://github.com/upjs/facile-validator/commit/b14b2e7ee7d1874c37d68fd117d3fb7192b3dbd2))
- fix `max` rule bug ([76602ac](https://github.com/upjs/facile-validator/commit/76602ac523bff33bd8f3f2a51039414786fc5338))
- fix error orders ([caeb77a](https://github.com/upjs/facile-validator/commit/caeb77ac73634dc051afcc9cf05a0ba2d4667bca))
- fix incorrect error texts ([0389509](https://github.com/upjs/facile-validator/commit/03895090fd77d262851e66c1aca65a080ed2f4ee))
- fix lang function ([918a1e8](https://github.com/upjs/facile-validator/commit/918a1e8281094901a4322276493745eb7f6b55c7))
- fix playground `lang` imports bug ([952f7f7](https://github.com/upjs/facile-validator/commit/952f7f74923d8c3288dad476679758063bd83b13))
- fix type check for `langs` ([58864a6](https://github.com/upjs/facile-validator/commit/58864a684537d2a71ba3bde0c58956d23dab4983))
- minor core improvement ([c7455ea](https://github.com/upjs/facile-validator/commit/c7455ea160ef408f1e3368b641faf16ac3a4453c))
- remove `value` hardcode ([19ab1fa](https://github.com/upjs/facile-validator/commit/19ab1faeee0e3058c8a851c35b93ce7445bd147a))
- remove unused `REQUIRED_IF` error cause ([a9f8ec9](https://github.com/upjs/facile-validator/commit/a9f8ec942a1ff997c56c47fd9ff052663e625c58))
- rename `error-dev` constants ([64c1937](https://github.com/upjs/facile-validator/commit/64c193736c39840b5284c54f3674a25027e78f14))
- rename `Language.ts` ([94686a1](https://github.com/upjs/facile-validator/commit/94686a1cb3d6f136a4719a9db91dfcafd6ca2a90))
- rename Locale to Language ([fbb1668](https://github.com/upjs/facile-validator/commit/fbb16687500146f7298f6a0eb92fa1c1f836fab8))
- rename regexes ([90a876c](https://github.com/upjs/facile-validator/commit/90a876cb5280cf8bfd6cd02726762d4d2754b23a))
- rewrite `gte` to remove `between` dep ([03602dc](https://github.com/upjs/facile-validator/commit/03602dca89d626e3cac46d5ab5487779ffd3d719))
- rewrite `lte` to remove `between` dep ([436aae6](https://github.com/upjs/facile-validator/commit/436aae6f363f9c5a4e90d762856c5c94b9a4eee0))
- show right rule name ([dc3379c](https://github.com/upjs/facile-validator/commit/dc3379c781588af8fa8a9e1cc35a3fa6a36d7670))
- support args index ([8ae632f](https://github.com/upjs/facile-validator/commit/8ae632fd586ce87db9a91ff693fc5fc0a2e18824))
- support negative values for int ([b187270](https://github.com/upjs/facile-validator/commit/b187270c069466f244d89b22e159cec3140675f0))
- use `in` instead of `hasOwnProperty` ([8713e20](https://github.com/upjs/facile-validator/commit/8713e20c8849b06151b93cec3c4ef27a9571efda))

- rename `v-rules` to `data-rules` ([8917fc0](https://github.com/upjs/facile-validator/commit/8917fc009120e415645c3a5281b215386561636d))
