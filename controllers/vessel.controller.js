const { getAllService } = require("../services/vessel.service");


module.exports = {
    async getAll(req,res,next) {
        try {

            return res.json(await getAllService())
        } catch (err) {
            console.log('err');
            next(err)
        }
    }
}