import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';

/**
 * Query that returns the previous project, in alphabetical order, given the current project name.
 */
export default eventHandler(async (event) => {
    const {currentProjectName} = getQuery(event); 
    const client = serverSupabaseClient<Database>(event);

    const { data, error } = await client
        .from('project')
        .select('id')
        .order('name', { ascending: false })
        .lt('name', currentProjectName)
        .limit(1);
    if (error) {
        console.log(error);
        return false;
    }
    if (data?.length === 0) {
        const {data, error} = await client
        .from('project')
        .select('id')
        .order('name', {ascending: false})
        .limit(1);
        if (error) {
            console.log(error);
        }
        return data;
    }
    return data;
});
