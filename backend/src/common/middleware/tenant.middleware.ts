import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TenantMiddleware implements NestMiddleware {
    use(req: Request, _res: Response, next: NextFunction) {
        // Extract clinicId from authenticated user (set by JWT strategy)
        const user = (req as any).user;
        if (user?.clinicId) {
            (req as any).clinicId = user.clinicId;
        }
        next();
    }
}
