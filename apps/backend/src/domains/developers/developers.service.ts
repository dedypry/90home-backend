import { Injectable } from '@nestjs/common';
import { CreateDeveloperDto } from './dto/create.dto';
import { DeveloperModel } from 'models/Developer.model';

@Injectable()
export class DevelopersService {
  async list() {
    return await DeveloperModel.query().orderBy('created_at', 'desc');
  }

  async create(body: CreateDeveloperDto) {
    const dev = await DeveloperModel.query().upsertGraphAndFetch({
      id: body.id,
      logo: body.logo,
      company_brand: body.company_brand,
      company_name: body.company_name,
      phone: body.phone,
      email: body.email,
      address: body.address,
      address_title: body.address_title,
    });

    if (body.coordinator_ids) {
      for (const ids of body.coordinator_ids) {
        await dev.$relatedQuery('coordinators').unrelate();
        await dev.$relatedQuery('coordinators').relate(ids);
      }
    }

    return 'Developer berhasil disimpan';
  }
}
