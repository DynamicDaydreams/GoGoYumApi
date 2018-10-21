const environmentConfig = {
    environmentName: 'local',
    sequelizeConfig: {
        database: 'gogoyum-api',
        userName: 'sa',
        password: 'sa',
        settings: {
            dialect: 'sqlite',
            storage: 'gogoyum-api.sqlite'
        }
    },
    jwt: {
        serviceId: 'gogoyum-api',
        issuers: {
            client: {
                publicKey: '2262CE66E91F8EE3A48A6F4B76353'
            },
            server: {
                publicKey: '8C43916375D1A11D8B914C9DB62F6'
            }
        }
    }
}

export { environmentConfig }