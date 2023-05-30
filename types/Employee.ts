// Employee type
import { Database } from './schema';
export type Employee = Database['public']['Tables']['employee']['Row'];
