import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';

/**
 * Query that returns the total number of areas present in the DB.
 */
export default eventHandler(async (event) => {
    const {currentProjectName} = getQuery(event); 
    const client = serverSupabaseClient<Database>(event);

    const { data, error } = await client
        .from('area')
        .select('*', { count: 'exact' });
    if (error) {
        console.log(error);
        return;
    }
    return data.length;
});

//TODO: remove this