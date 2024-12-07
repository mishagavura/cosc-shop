import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface Params {
  params: { id: string };
}

export async function GET({ params }: Params) {
  const { id } = params;
  const productId = Number(id);
  const filePath = path.join(process.cwd(), 'db.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const product = data.products.find((p: any) => p.id === productId);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  return NextResponse.json(product);
}
