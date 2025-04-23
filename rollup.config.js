import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import packageJson from "./package.json";
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { dts } from 'rollup-plugin-dts';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';


export default [
    {
        input: "src/index.tsx",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourceMap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourceMap: true,
            }
        ],
        plugins: [
            peerDepsExternal(),
            nodeResolve(),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
            }),
            terser(),
            postcss()
        ],
        external: ['react', 'react-dom']
    },
    // for typescript types files 
    {
        input: 'src/index.tsx',
        output: {
            file: packageJson.types
        }, plugins: [
            //NOTE: check it before finalizing with dts.default()
            dts(),
        ]
    }
];