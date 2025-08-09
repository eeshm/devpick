import * as fs from 'fs/promises';
import * as path from 'path';
import * as dotenv from 'dotenv';

import { createClient } from "@supabase/supabase-js";


dotenv.config({ path: path.resolve(__dirname, '../.env') });
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
const dataDir = path.resolve(__dirname, '../data');

async function loadJSON(fileName: string) {
  const filePath = path.join(dataDir, fileName);
  const content = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(content);
}

async function insertCategories() {
  const categories = await loadJSON('categories.json');
  console.log(`Inserting ${categories.length} categories...`);

  for (const category of categories) {
    const { error } = await supabase
      .from('categories')
      .upsert(category, { onConflict: 'slug' });

    if (error) {
      console.error(`Failed to insert category "${category.name}":`, error.message);
      process.exit(1);
    }
    console.log(`Category inserted: ${category.name}`);
  }
}

async function insertTechStacks(fileName: string, categorySlug: string) {
  const techStacks = await loadJSON(fileName);
  console.log(`Inserting ${techStacks.length} stacks from ${fileName}...`);

  for (const stack of techStacks) {
    stack.category_slug = categorySlug;

    const { error } = await supabase
      .from('tech_stacks')
      .upsert(stack, { onConflict: 'slug' });

    if (error) {
      console.error(`Failed to insert stack "${stack.name}":`, error.message);
      process.exit(1);
    }

    console.log(`Stack inserted: ${stack.name}`);
  }
}

async function seed() {
  try {
    await insertCategories();

    // File to category_slug map
    const fileCategoryMap: Record<string, string> = {
      'frontend.json': 'frontend-development',
      'backend.json': 'backend-development',
      'devops-cloud.json': 'devops-cloud',
      'mobile.json': 'mobile-development',
      'ai-ml.json': 'ai-ml-data-science',
      'testing.json':'testing-frameworks',
      'database.json':'database-systems',
      'cssframeworks.json':'css-frameworks'
    };

    for (const [fileName, categorySlug] of Object.entries(fileCategoryMap)) {
      await insertTechStacks(fileName, categorySlug);
    }

    console.log('Seeding completed successfully!');
  } catch (err: any) {
    console.error('Seeding failed:', err.message);
    process.exit(1);
  }
}

seed();
