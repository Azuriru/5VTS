import { defineConfig } from 'eslint/config';
import azuriru, { svelte } from 'eslint-config-azuriru';
import svelteConfig from './svelte.config.js';

export default defineConfig([
    {
        'extends': [azuriru, svelte(svelteConfig)],
        rules: {
            'import/dynamic-import-chunkname': 'off'
        }
    }
]);