const path = require('path');

module.exports = {
    target: 'node',
    entry: './src/main.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader'
                        
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'bin')
    }
};
