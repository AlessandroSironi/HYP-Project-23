import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';

export default eventHandler(async (event) => {
    const client = serverSupabaseClient<Database>(event);
    const { data, error } = await client.from('employee').select('id, name, surname, role, pic').order('id');
    return { employees: data, error: error };
});
