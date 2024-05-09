const passport = require('passport');

const LocalStrategy = require('passport-local');
const Users = require('../models/users');
const bcrypt = require('bcrypt');
// Strategy ko congfigure krna
passport.use(new LocalStrategy(
    async function (username, password, done) {
        try {
            const user = await Users.findOne({ username: username });
            if (!user) {
                return done(null, false);
            }

            bcrypt.compare(password, user.password, function (err, result) {
                if (!result) return done(null, false);
                return done(null, user);
            });
        } catch (err) {
            done(err);
        }
        /*
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        });
        */
    }
));


// PASSPORT SETUP
passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(async function (id, done) {
    try {
        let user = await Users.findOne({ _id: id });
        done(null, user);
    } catch (err) {
        done(err);
    }
    // User.findById(id, function (err, user) {
    //     done(err, user);
    // });
});



module.exports = passport;