/**
 * This store takes advantage of pinia
 * library in order to share the area_name
 * ref value across all pages.
 * This trick allow us to preserve the user
 * filter choice after leaving the /projects page.
 * It also allow us to set the area_name after choosing
 * a specific area in /areas or areas/[id],
 * and then redirect the user to /projects with the correct
 * filter already applied.
 */

import { defineStore } from 'pinia';

export const useAreaStore = defineStore('area', () => {
    const area_name = ref('');

    function setAreaName(newName: string) {
        area_name.value = newName;
    }

    return { area_name, setAreaName };
});
