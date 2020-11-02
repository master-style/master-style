const Path = require('path');
const glob = require('globby');

const
    common = require('./webpack.common.js'),
    /** Prod Quick Config =============================================== */
    config = common.config({
        hash: false
    })
    /* ================================================================= **/;

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => {

    const entryGlob = [
        Path.join('../src/app', env.PACKAGE, './**/*/index.{ts,js}'),
        Path.join('../src/app', env.PACKAGE, './**/*/index.{scss,css}'),
        Path.join('!../src/app', env.PACKAGE, './node_modules/**/*')
    ];

    return common.merge({
        entry: () => new Promise((resolve) => resolve(glob.sync(entryGlob).reduce((entrypoint, path) => {
            const parsePath = Path.parse(Path.relative('../src/app', path));
            entrypoint[Path.join(parsePath.dir, parsePath.name)] = path;
            return entrypoint;
        }, {}))),
        output: {
            path: Path.join(__dirname, 'dist')
        },
        mode: 'production',
        plugins: [
            new CleanWebpackPlugin()
        ]
    }, config);
}