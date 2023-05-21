import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';

export default eventHandler(async (event) => {
    // create a client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);
    // query the Db and then send to the Vue client an object with employees and error field
    const { data, error } = await client.from('area').select('id, name, description, pic').order('id');
    return { areas: data, error: error };
});
