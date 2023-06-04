import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';

export default eventHandler(async (event) => {
    const {currentProjectName} = getQuery(event); 
    const client = serverSupabaseClient<Database>(event);

    console.log("I am in query getNextProject. Current Project Name: " + currentProjectName);

    const { data, error } = await client
        .from('project')
        .select('id')
        .order('name')
        .gt('name', currentProjectName)
        .limit(1);
    if (error) {
        console.log(error);
    }
    if (data?.values.length === 0) {
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
