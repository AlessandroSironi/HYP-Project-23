// project type directly taken from the schema.ts Database interfcae

import { Database } from './schema';
export type Project = Database['public']['Tables']['project']['Row'];
