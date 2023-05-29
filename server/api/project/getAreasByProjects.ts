import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';

export default eventHandler(async (event) => {
    const{ id } = getQuery(event);
    const client = serverSupabaseClient<Database>(event);
    const { data: area_ids, error: area_id_error }  = await client 
        .from('related_to')
        .select('area')
        .eq('project', id);
    
    console.log(area_ids);  

    let ids: number[] = [];

    area_ids?.forEach((element) => {
        ids.push(element.area);
    });

});