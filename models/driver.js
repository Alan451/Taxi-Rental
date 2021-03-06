const mongoose = require('mongoose');
const bcrypt = require('bcrypt'),
      SALT_WORK_FACTOR = 10;
const DriverSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
    },
    license:{
        type: String,
        required: true,
        unique:true
    },
    vehicle:{
        type: String,
        required: true
    },
    capacity:{
        type: Number,
        required: true
    },
    available:{
        type:Boolean,
        required:true,
    },
    on_journey:{
        type:Boolean,
        required:true
    }
  
});

DriverSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });


});

DriverSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
const Driver = mongoose.model("Driver",DriverSchema);
module.exports = Driver;