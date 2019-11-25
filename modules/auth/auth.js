const jwt = require('jsonwebtoken');
const JWT_SECRET = "this is a JWTSECRET!!";
let userAuth ={};
userAuth.getJwtToken = async (payload) => {

    const token = await jwt.sign({
        data: payload
    }, JWT_SECRET, { expiresIn: '2d' });
    payload.token = token;

    return payload;
}

userAuth.verifyAndDecode = (token) => {
    let decodedPayload = {};
    try {
        decodedPayload = jwt.verify(token, JWT_SECRET);
        if (decodedPayload.exp >= (Date.now() / 1000)) {
            decodedPayload.valid = true;
        } else
            decodedPayload.valid = false;
    } catch (error) {
        return decodedPayload.valid = false;
    }
    return decodedPayload;
};

module.exports = userAuth;
