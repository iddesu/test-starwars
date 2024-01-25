const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env){
    alias({
        '@components': 'src/components',
        '@consts': 'src/consts',
        '@hoc': 'src/hoc',
        '@services': 'src/services',
        '@utils': 'src/utils',
        '@containers': 'src/containers',
        '@styles': 'src/styles',
        '@routes': 'src/routes',
        '@hooks': 'src/hooks',
        '@UI': 'src/components/UI',
        '@store': 'src/store',
        '@context': 'src/context'
    })(config);

    return config;
}