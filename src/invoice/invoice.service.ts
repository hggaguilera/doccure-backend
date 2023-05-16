import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { InvoiceInput } from 'src/types';

@Injectable()
export class InvoiceService {
  constructor(private prisma: PrismaService) {}

  async createInvoice(data: InvoiceInput) {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

    if (regex.test(data.personId)) {
      const person = await this.prisma.person.findUnique({
        where: { email: data.personId },
      });
      data['personId'] = person.id;
    }

    const res = await this.prisma.invoice.create({
      data,
    });

    const invoice = await this.prisma.invoice.update({
      where: { id: res.id },
      data: {
        customId: `INV00${res.number}`,
      },
      select: {
        customId: true,
        summary: true,
        date: true,
        tax: true,
        items: {
          select: {
            service: true,
            quantity: true,
            price: true,
          },
        },
      },
    });

    await this.prisma.appointment.update({
      where: { id: data.appointmentId },
      data: { status: 'inactive' },
    });

    return invoice;
  }
}
