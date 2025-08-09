import { createClient } from "@supabase/supabase-js";
import * as path from 'path';
import * as dotenv from 'dotenv'
import { ReactNode } from "react";

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


export interface Categories{
    name:string,
    slug:string,
    description:string,
    logo:string
}

export interface Tech_stacks{
    name:string,
    slug:string,
    category_slug:string,
    logo_url:string,
    logo:string,
    short_description:string,
    detailed_description:string,
    official_docs:string,
    learning_curve?:string,
    popularity?:string,
    pros:string[],
    cons:string[],
    major_use_cases:string[],
    basic_prerequisites:string[],
}