import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';

export default eventHandler(async (event) => {
    const {currentProjectName} = getQuery(event); 
    const client = serverSupabaseClient<Database>(event);

    console.log("I am in query getPrevProject. Current Project Name: " + currentProjectName);

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
