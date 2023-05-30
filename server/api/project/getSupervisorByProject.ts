import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';

export default eventHandler(async (event) => {
    const{ id } = getQuery(event);
    const client = serverSupabaseClient<Database>(event);
    const { data: supervisor, error: supervisor_error } = await client
        .from('employees')
        .select('name, surname')
        .eq('id', id)
        .single();

    console.log(supervisor);

    return{ supervisor: data, error: error };

})