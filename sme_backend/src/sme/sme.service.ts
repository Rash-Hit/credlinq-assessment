import {
  Injectable,
  UnprocessableEntityException,
  ValidationError,
} from '@nestjs/common';
import { CreateSmeDto } from './dto/create-sme.dto';
import { UpdateSmeDto } from './dto/update-sme.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { readFile, rm } from 'fs/promises';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class SmeService {
  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  findAll() {
    return this.prisma.sME.findMany();
  }

  async create(createSmeDto: CreateSmeDto) {
    const sme = createSmeDto;

    try {
      return await this.prisma.sME.create({
        data: sme,
      });
    } catch (error) {
      if (Array.isArray(error.errors)) {
        const validationErrors: ValidationError[] = error.errors
          .filter((error) => error.type === 'Validation error')
          .map((error) => {
            return {
              error: error.message,
              fieldName: error.path,
            };
          });
        if (Array.isArray(validationErrors) && validationErrors.length > 0) {
          throw new UnprocessableEntityException(validationErrors);
        } else {
          throw error;
        }
      }
      throw error;
    }
  }

  update(smeDto: Omit<UpdateSmeDto, 'id'>, id: number) {
    const sme = smeDto;
    return this.prisma.sME.update({
      data: sme,
      where: {
        id,
      },
    });
  }

  async uploadFiles(files: Express.Multer.File[]) {
    if (files) {
      const allFilesPromise = files.map(async (file) => {
        const formData = new FormData();
        const fileData = await readFile(file.path);
        formData.append('file', new Blob([fileData]), file.originalname);
        const fileUploadResponse = await this.httpService.axiosRef.post<{
          id: string;
          success: boolean;
          name: string;
          key: string;
          size: number;
          mimeType: string;
          link: string;
        }>('https://file.io/', formData, {
          headers: {
            Authorization: `Bearer ${process.env.FILEIOAPIKEY}`,
          },
        });
        await rm(file.path);
        if (fileUploadResponse.status === 200) {
          const { link } = fileUploadResponse.data;
          return link;
        } else {
          throw Error(`${file.originalname} file not uploaded`);
        }
      });
      return Promise.all(allFilesPromise);
    }
  }
}
