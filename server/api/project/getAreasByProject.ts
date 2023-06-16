import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';
/*
    Query that returns all the areas that the project is related to.
*/
export default eventHandler(async (event) => {
    const { id } = getQuery(event);
    const client = serverSupabaseClient<Database>(event);
    const { data: area_ids, error: area_id_error } = await client.from('related_to').select('area').eq('project', id);

    let ids: number[] = [];

    area_ids?.forEach((element) => {
        ids.push(element.area);
    });

    const { data, error } = await client.from('area').select('id, name').in('id', ids);
    if (error) console.log(error);

    return data;
});
