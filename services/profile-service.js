const dao = require('../db/profile/profile-dao');

module.exports = (app) => {
    const findProfileById = (req, res) =>
        dao.findProfileById(req.params.id)
            .then(profile => res.json(profile));

    const findAllProfile = (req, res) =>
        dao.findAllProfile()
            .then(profile => res.json(profile));

    const updateProfile = (req, res) =>
        dao.updateProfile(req.params.id, req.body)
            .then(status => res.send(status));

    app.get("/rest/profile/:id", findProfileById);
    app.get("/rest/profile", findAllProfile);
    app.put("/rest/profile/:id", updateProfile);
}