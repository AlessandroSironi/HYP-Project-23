import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';

export default eventHandler(async (event) => {
    const { id } = getQuery(event);
    const client = serverSupabaseClient<Database>(event);

    const { data, error } = await client
        .from('project')
        .select(
            'id, name, year, founderName, founderSurname, description, review, companyLogo, companyImage, mostRelevant, supervisor'
        )
        .eq('id', id)
        .single();

    if (error) console.log(error);

    return data;
});
