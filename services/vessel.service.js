const prisma = require('../libs/prisma');

module.exports = {
    async getAllService() {
        try {
            return await prisma.vessel.findMany();
        } catch (err) {
            console.log('err',err);
            throw err
        }
    },

    async upsert(param) {
        const {mmsi,name,lat,long,time_utc} = param
        try {
            console.log('long>>',long);
            return prisma.vessel.upsert({
                where : {
                    mmsi
                },
                update: {
                    name,
                    lat,
                    long,
                    time_utc
                },
                create : {
                    mmsi,
                    name,
                    lat,
                    long,
                    time_utc
                }
            });
        } catch (err) {
            console.log('err',err);
            throw err
        }
    }
}