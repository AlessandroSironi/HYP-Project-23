import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';

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