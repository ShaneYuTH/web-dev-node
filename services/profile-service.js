let profile = require('../data/profile.json');

module.exports = (app) => {

    const getCurrentProfile = (req, res) => {
        res.json(profile);
    }

    const updateCurrentProfile = (req, res) => {
        const name = req.body.name;
        const bio = req.body.bio;
        const location = req.body.location;
        const website = req.body.website;
        const dateOfBirth = req.body.dateOfBirth;

        const updatedProfile = {
            ...profile,
            name: name,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth,
        }

        res.json(updatedProfile);
    }

    app.get('/api/profile', getCurrentProfile);
    app.put('/api/profile', updateCurrentProfile);
}

