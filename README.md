# Wrangler `getPlatformProxy` AI `undefined` binding reproduction

`getPlatformProxy` stopped returning an appropriate AI binding since `3.42.0`

You can see this by running:
```sh
npm run test-ok
```

and
```sh
npm run test-not-ok
```

and see how the former shows the presence of the binding while the latter does not
