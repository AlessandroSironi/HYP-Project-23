import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';

export default eventHandler(async (event) => {
    const {currentProjectName} = getQuery(event); 
    const client = serverSupabaseClient<Database>(event);

    const { data, error } = await client
        .from('project')
        .select('id')
        .order('name')
        .gt('name', currentProjectName)
        .limit(1);
    if (error) {
        console.log(error);
        return false;
    }
    if (data?.length === 0) {
        const {data, error} = await client
        .from('project')
        .select('id')
        .order('name', {ascending: true})
        .limit(1);
        if (error) {
            console.log(error);
        }
        return data;
    }
    return data;
});
