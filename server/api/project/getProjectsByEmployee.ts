import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';
/*
    Query that returns all the projects in which a given employee (id) has worked on.
*/
export default eventHandler(async (event) => {
    // get the worker id from the parameters of the query
    const { id } = getQuery(event);
    // create a client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);
    // query the Db and find the project ids for the employee

    const { data: rawData, error } = await client.from('works_in').select('project(*)').eq('emp', id);
    const newData = rawData?.map((el) => el.project);

    console.log('EMP: ', newData);
    return newData;
});
