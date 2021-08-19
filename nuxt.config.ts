export default {
    rootDir: 'src',
    buildDir: '../.nuxt',
    dotenv: {
        filename: '../env/' + (process.env.ENV ? process.env.ENV : 'dev') + '.env',
    },
    buildModules: ['@nuxt/typescript-build'],
};
