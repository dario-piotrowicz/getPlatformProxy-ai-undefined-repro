import { getPlatformProxy } from 'wrangler';

const { env, dispose } = await getPlatformProxy();

if(env.AI) {
    console.log(`\x1b[32m The AI binding is present \x1b[0m`);
} else {
    console.error(`\x1b[31m The AI binding is not present \x1b[0m`);
}

await dispose()
