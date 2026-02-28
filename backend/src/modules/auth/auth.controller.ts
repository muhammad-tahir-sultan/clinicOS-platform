import { Controller, Post, Body, UseGuards, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDto, RegisterClinicDto, RefreshTokenDto } from './dto/auth.dto';
import { CurrentUser } from '../../common/decorators';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() dto: LoginDto) {
        return this.authService.login(dto);
    }

    @Post('register')
    async registerClinic(@Body() dto: RegisterClinicDto) {
        return this.authService.registerClinic(dto);
    }

    @Post('refresh')
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.OK)
    async refreshTokens(
        @CurrentUser('id') userId: string,
        @Body() dto: RefreshTokenDto,
    ) {
        return this.authService.refreshTokens(userId, dto.refreshToken);
    }

    @Post('logout')
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.OK)
    async logout(@CurrentUser('id') userId: string) {
        return this.authService.logout(userId);
    }

    @Get('profile')
    @UseGuards(AuthGuard('jwt'))
    async getProfile(@CurrentUser('id') userId: string) {
        return this.authService.getProfile(userId);
    }
}
