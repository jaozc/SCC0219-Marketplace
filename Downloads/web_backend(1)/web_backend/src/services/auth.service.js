import jwt from 'jsonwebtoken';

export class AuthService {


    generateToken   = async (data)  => jwt.sign(data, global.SALT_KEY, { expiresIn: '12h' });
    decodeToken     = async (token) => jwt.verify(token, global.SALT_KEY);

    static getTokenFromRequest(req) {
        return req.body.token
            || req.query.token
            || req.headers['token']
            || req.params.token;
    }

    authorize(req, res, next) {
        const token = AuthService.getTokenFromRequest(req);

        if (!token) {
            res.status(401).json({ message: 'Acesso Restrito' });
        } else {
            jwt.verify(token, global.SALT_KEY, (error, _) => {
                if (error) {
                    res.status(401).json({ message: 'Token Inválido' });
                } else {
                    next();
                }
            });
        }
    }

    isAdmin(req, res, next) {
        const token = AuthService.getTokenFromRequest(req);

        if (!token) {
            res.status(401).json({ message: 'Token Inválido' });
        } else {
            jwt.verify(token, global.SALT_KEY, (error, decoded) => {
                if (error) {
                    res.status(401).json({ message: 'Token Inválido' });
                } else if (decoded.role !== 'admin') {
                    res.status(403).json({ message: 'Somente para admins' });
                } else {
                    next();
                }

            });
        }
    }
}