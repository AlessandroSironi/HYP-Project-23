import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';

export default eventHandler(async (event) => {
    // get the worker id from the parameters of the query
    const { id } = getQuery(event);
    // create a client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);
    // query the Db and find the project ids for the employee
    const { data: projects_ids, error: projects_ids_error } = await client
        .from('works_in')
        .select('project')
        .eq('emp', id);
    console.log(projects_ids);

    // transform the list of objects to a list of numbers in order to use .in() later
    let ids: number[] = [];

    projects_ids?.forEach((element) => {
        ids.push(element.project);
    });

    // return the projects in the ids list with all the required information
    const { data, error } = await client.from('project').select('id, name, companyLogo, year').in('id', ids);

    return { projects: data, error: error };
});
