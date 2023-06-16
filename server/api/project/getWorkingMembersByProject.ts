import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';
/*
    Query that returns all the members of the team that have worked on a given project.
*/
export default eventHandler(async (event) => {
    const { id } = getQuery(event);
    const client = serverSupabaseClient<Database>(event);

    const { data: worker_ids, error: worker_errors } = await client.from('works_in').select('emp').eq('project', id);

    let ids: number[] = [];

    worker_ids?.forEach((element) => {
        ids.push(element.emp);
    });

    const { data, error } = await client.from('employee').select('id, name, surname').in('id', ids);

    if (error) {
        console.log(error);
    }

    return data;
});
