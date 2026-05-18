

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.ClP2V9vZ.js","_app/immutable/chunks/pEbSq9m0.js","_app/immutable/chunks/DEDqjojZ.js"];
export const stylesheets = ["_app/immutable/assets/2.DuwEWG7B.css"];
export const fonts = [];
