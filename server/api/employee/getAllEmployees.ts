import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';

export default eventHandler(async (event: any) => {
    // create a client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);
    // query the Db and then send to the Vue client an object with employees and error field
    const { data, error } = await client.from('employee').select('id, name, surname, role, pic').order('id');
    return { employees: data, error: error };
});
