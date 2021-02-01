module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        ['module-resolver', {
            alias: {
                "@bin": "./src/bin",
                "@db": "./src/db",
                "@config": "./src/config/index",
                "@controllers": "./src/controllers",
                "@models": "./src/models",
                "@repositories": "./src/repositories",
                "@routes": "./src/routes",
                "@utils": "./src/utils",
                "@validator": "./src/validators/validator",
                "@app": "./src/app"
            }
        }]
    ],
    ignore: [
        '**/*.spec.js',
    ]
}