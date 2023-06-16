import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';
/*
    Query that returns all the projects from the database.
*/
export default eventHandler(async (event) => {
    // create a client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);
    // query the Db and then send to the Vue client an object with projects
    const { data, error } = await client
        .from('project')
        .select('id, name, year, companyLogo, mostRelevant, related_to(area(name))')
        .order('name');
    if (error) {
        console.log(error);
    }

    return data;
});
