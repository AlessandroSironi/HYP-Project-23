import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';
/*
    Query that returns all the projects that a certain employee (given its ID) has supervised.
*/
export default eventHandler(async (event) => {
    // get the supervisor id from the parameters of the query
    const { id } = getQuery(event);
    // create a client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);
    // query the Db and then send to the Vue client an object with projects and error field
    const { data, error } = await client.from('project').select('id, name, year, companyLogo').eq('supervisor', id);
    console.log(error);
    return data;
});
