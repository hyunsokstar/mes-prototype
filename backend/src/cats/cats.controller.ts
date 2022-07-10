import { JwtAuthGuard } from './../auth/jwt/jwt.guard';
import { PositiveIntPipe } from './../common/pipes/positiveInt.pipe';
import { CatsService } from './cats.service';
import { getSystemErrorMap } from 'util';
import {
  Controller, Delete, Get, HttpException, Param, Patch, Post, Put, UseFilters, ParseIntPipe,
  UseInterceptors,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from './../common/interceptors/success.interceptor';
import { CatRequestDto } from './dto/cats.request.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ReadOnlyCatDto } from './dto/cat.dto';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { Request } from "express"
import { CurrentUser } from 'src/common/decorators/user.decorator';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
export class CatsController {
  constructor(
    private readonly CatsService: CatsService,
    private readonly authService: AuthService
  ) { }


  @UseGuards(JwtAuthGuard)
  @Get()
  getCurrentCat(@CurrentUser() cat) {
    return cat.readOnlyData;
  }

  @ApiResponse({
    status: 500,
    description: 'server Errror'
  })
  @ApiResponse({
    status: 200,
    description: '성공',
    type: ReadOnlyCatDto
  })
  @ApiOperation({ summary: "회원 가입" })
  @Post()
  async signUp(@Body() body: CatRequestDto) {
    console.log("body : ", body);
    console.log("회원 가입 실행 확인 !!");

    return await this.CatsService.signUp(body);
  }

  @ApiOperation({ summary: "로그인" })
  @Post('login')
  logIn(@Body() data: LoginRequestDto) {
    return this.authService.jwtlogin(data);
  }

  @Post('logout')
  logOut() {
    return 'logout';
  }

  @Post('upload/cats')
  uploadCatImg() {
    return 'uploadImg';
  }

}