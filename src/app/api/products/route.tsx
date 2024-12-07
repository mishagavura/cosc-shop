import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'db.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const products = data.products || [];
  return NextResponse.json(products);
}
