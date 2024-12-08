import jwt from 'jsonwebtoken'


export const authentication = async (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }
    else {
        try {
            const user = jwt.verify(token, process.env.jWT_SECRET);
            return {user: user}
            next();
        } catch (error) {
            console.error(error);
            return res.status(403).json({ message: "Access denied. Invalid token." });
        }
    }
}