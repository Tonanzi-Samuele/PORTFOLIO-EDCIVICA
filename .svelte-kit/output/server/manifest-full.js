export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1522.png","68.jpeg","COD.png","COST.jpg","aktion.jpeg","amish.png","cf.png","cod.jpeg","mattanza.jpg","ndrangheta.png","prig.png","robots.txt","saviano.png","tonanzi_codicefiscale.c"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.By5fPGRD.js",app:"_app/immutable/entry/app.tlznipBd.js",imports:["_app/immutable/entry/start.By5fPGRD.js","_app/immutable/chunks/CMWG8K6S.js","_app/immutable/chunks/pEbSq9m0.js","_app/immutable/entry/app.tlznipBd.js","_app/immutable/chunks/pEbSq9m0.js","_app/immutable/chunks/Dj6f-nJM.js","_app/immutable/chunks/DEDqjojZ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
