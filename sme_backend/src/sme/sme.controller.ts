import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { SmeService } from './sme.service';
import { CreateSmeDto } from './dto/create-sme.dto';
import { UpdateSmeDto } from './dto/update-sme.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import UploadFilesDto from './dto/update-files-sme.dto';

@Controller('sme')
export class SmeController {
  constructor(private readonly smeService: SmeService) {}

  @Get()
  findAll() {
    return this.smeService.findAll();
  }

  @Post()
  create(@Body() createSmeDto: CreateSmeDto) {
    return this.smeService.create(createSmeDto);
  }

  @Patch()
  update(@Body() smeDto: UpdateSmeDto) {
    return this.smeService.update(smeDto, smeDto.id);
  }

  @Post('upload')
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'smeDocuments', maxCount: 6 }]),
  )
  async uploadFiles(
    @Body() uploadFilesDto: UploadFilesDto,
    @UploadedFiles() files: { smeDocuments?: Express.Multer.File[] },
  ) {
    const fileLinks = await this.smeService.uploadFiles(files.smeDocuments);
    const updatedSme: Omit<UpdateSmeDto, 'id'> = {
      Documents: fileLinks,
    };
    return await this.smeService.update(updatedSme, uploadFilesDto.id);
  }
}
