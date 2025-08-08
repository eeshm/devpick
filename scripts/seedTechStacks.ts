import { supabase } from '@/lib/supabase';
import fs from 'fs';
import path from 'path';

interface TechStack {
  name: string;
  slug: string;
  short_description: string;
  detailed_description: string;
  official_docs: string;
  pros: string[];
  cons: string[];
  learning_curve: string;
  major_use_cases: string[];
  basic_prerequisites: string[];
  popularity: string;
  logo: string;
  category_slug: string;
}

async function getCategoryId(slug: string): Promise<string> {
  const { data, error } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', slug)
    .single();

  if (error || !data) throw new Error(`Category not found: ${slug}`);
  return data.id;
}

async function insertStacksFromFile(filePath: string) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const stacks: TechStack[] = JSON.parse(raw);

  for (const stack of stacks) {
    try {
      const categoryId = await getCategoryId(stack.category_slug);

      const { error } = await supabase.from('tech_stacks').insert([
        {
          name: stack.name,
          slug: stack.slug,
          short_description: stack.short_description,
          detailed_description: stack.detailed_description,
          official_docs: stack.official_docs,
          pros: stack.pros,
          cons: stack.cons,
          learning_curve: stack.learning_curve,
          major_use_cases: stack.major_use_cases,
          basic_prerequisites: stack.basic_prerequisites,
          popularity: stack.popularity,
          logo: stack.logo,
          category_id: categoryId
        }
      ]);

      if (error) {
        console.error(`Failed: ${stack.name}`, error.message);
      } else {
        console.log(`Inserted: ${stack.name}`);
      }
    } catch (err) {
      console.error(`Skipping: ${stack.name} — ${(err as Error).message}`);
    }
  }
}

async function main() {
  const dataDir = path.join(__dirname, '../data');
  const files = fs.readdirSync(dataDir).filter((file) => file.endsWith('.json'));

  for (const file of files) {
    console.log(`Processing ${file}...`);
    await insertStacksFromFile(path.join(dataDir, file));
  }

  console.log('All tech stacks processed!');
}

main();
