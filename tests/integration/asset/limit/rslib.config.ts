import { defineConfig } from '@rslib/core';
import { generateBundleEsmConfig } from 'test-helper';

export default defineConfig({
  lib: [
    // 0. bundle esm default
    // generateBundleEsmConfig({
    //   output: {
    //     distPath: {
    //       root: './dist/esm/bundle-default',
    //     },
    //   },
    // }),
    // 1. bundle esm inline
    // generateBundleEsmConfig({
    //   output: {
    //     distPath: {
    //       root: './dist/esm/bundle-inline',
    //     },
    //     dataUriLimit: {
    //       svg: 4096,
    //     },
    //   },
    // }),
    // 2. bundleless esm default
    // generateBundleEsmConfig({
    //   bundle: false,
    //   output: {
    //     distPath: {
    //       root: './dist/esm/bundleless-default',
    //     },
    //   },
    // }),

    // 3. bundleless esm inline
    generateBundleEsmConfig({
      bundle: false,
      output: {
        distPath: {
          root: './dist/esm/bundleless-inline',
        },
        dataUriLimit: {
          svg: 4096,
        },
      },
    }),
    
  ],
  output: {
    target: 'web',
  },
});
