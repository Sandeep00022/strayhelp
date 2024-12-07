
export const signout = (req, res, next) => {
    try {
        res.clearCookie("access_token")
        .status(200)
        .json("user has been signed out")
    } catch (error) {
        next(error);
    }
}