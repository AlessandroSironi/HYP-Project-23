import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';

export default eventHandler(async (event) => {
    const{ id } = getQuery(event);
    const client = serverSupabaseClient<Database>(event);
    
    const { data: project_sup, error: supervisor_error } = await client
        .from('project')
        .select('supervisor')
        .eq('id', id )
        .single();

    const { data, error } = await client
        .from('employee')  
        .select('name, surname')
        .eq('id', project_sup?.supervisor)
        .single();

    return { supervisor: data, error: error };

});