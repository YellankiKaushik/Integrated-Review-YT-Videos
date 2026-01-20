/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/analyze/route";
exports.ids = ["app/api/analyze/route"];
exports.modules = {

/***/ "(rsc)/../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fanalyze%2Froute&page=%2Fapi%2Fanalyze%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fanalyze%2Froute.ts&appDir=C%3A%5CUsers%5CYellankiKaushik%5CDesktop%5CKAUSHIK%20CSE%5CMajor%20Project%5CFinal%20Docs%5CIntegrated%20Review%20of%20YT%20Videos%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CYellankiKaushik%5CDesktop%5CKAUSHIK%20CSE%5CMajor%20Project%5CFinal%20Docs%5CIntegrated%20Review%20of%20YT%20Videos%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fanalyze%2Froute&page=%2Fapi%2Fanalyze%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fanalyze%2Froute.ts&appDir=C%3A%5CUsers%5CYellankiKaushik%5CDesktop%5CKAUSHIK%20CSE%5CMajor%20Project%5CFinal%20Docs%5CIntegrated%20Review%20of%20YT%20Videos%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CYellankiKaushik%5CDesktop%5CKAUSHIK%20CSE%5CMajor%20Project%5CFinal%20Docs%5CIntegrated%20Review%20of%20YT%20Videos%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/../node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/../node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/../node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_YellankiKaushik_Desktop_KAUSHIK_CSE_Major_Project_Final_Docs_Integrated_Review_of_YT_Videos_frontend_app_api_analyze_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/analyze/route.ts */ \"(rsc)/./app/api/analyze/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/analyze/route\",\n        pathname: \"/api/analyze\",\n        filename: \"route\",\n        bundlePath: \"app/api/analyze/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\YellankiKaushik\\\\Desktop\\\\KAUSHIK CSE\\\\Major Project\\\\Final Docs\\\\Integrated Review of YT Videos\\\\frontend\\\\app\\\\api\\\\analyze\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_YellankiKaushik_Desktop_KAUSHIK_CSE_Major_Project_Final_Docs_Integrated_Review_of_YT_Videos_frontend_app_api_analyze_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyL2luZGV4LmpzP25hbWU9YXBwJTJGYXBpJTJGYW5hbHl6ZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYW5hbHl6ZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmFuYWx5emUlMkZyb3V0ZS50cyZhcHBEaXI9QyUzQSU1Q1VzZXJzJTVDWWVsbGFua2lLYXVzaGlrJTVDRGVza3RvcCU1Q0tBVVNISUslMjBDU0UlNUNNYWpvciUyMFByb2plY3QlNUNGaW5hbCUyMERvY3MlNUNJbnRlZ3JhdGVkJTIwUmV2aWV3JTIwb2YlMjBZVCUyMFZpZGVvcyU1Q2Zyb250ZW5kJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNZZWxsYW5raUthdXNoaWslNUNEZXNrdG9wJTVDS0FVU0hJSyUyMENTRSU1Q01ham9yJTIwUHJvamVjdCU1Q0ZpbmFsJTIwRG9jcyU1Q0ludGVncmF0ZWQlMjBSZXZpZXclMjBvZiUyMFlUJTIwVmlkZW9zJTVDZnJvbnRlbmQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2tHO0FBQy9LO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxZZWxsYW5raUthdXNoaWtcXFxcRGVza3RvcFxcXFxLQVVTSElLIENTRVxcXFxNYWpvciBQcm9qZWN0XFxcXEZpbmFsIERvY3NcXFxcSW50ZWdyYXRlZCBSZXZpZXcgb2YgWVQgVmlkZW9zXFxcXGZyb250ZW5kXFxcXGFwcFxcXFxhcGlcXFxcYW5hbHl6ZVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYW5hbHl6ZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2FuYWx5emVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FuYWx5emUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxZZWxsYW5raUthdXNoaWtcXFxcRGVza3RvcFxcXFxLQVVTSElLIENTRVxcXFxNYWpvciBQcm9qZWN0XFxcXEZpbmFsIERvY3NcXFxcSW50ZWdyYXRlZCBSZXZpZXcgb2YgWVQgVmlkZW9zXFxcXGZyb250ZW5kXFxcXGFwcFxcXFxhcGlcXFxcYW5hbHl6ZVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fanalyze%2Froute&page=%2Fapi%2Fanalyze%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fanalyze%2Froute.ts&appDir=C%3A%5CUsers%5CYellankiKaushik%5CDesktop%5CKAUSHIK%20CSE%5CMajor%20Project%5CFinal%20Docs%5CIntegrated%20Review%20of%20YT%20Videos%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CYellankiKaushik%5CDesktop%5CKAUSHIK%20CSE%5CMajor%20Project%5CFinal%20Docs%5CIntegrated%20Review%20of%20YT%20Videos%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/../node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/analyze/route.ts":
/*!**********************************!*\
  !*** ./app/api/analyze/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/../node_modules/next/dist/api/server.js\");\n\nasync function POST(request) {\n    try {\n        const { videoId, url } = await request.json();\n        if (!videoId && !url) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Video ID or URL is required\"\n            }, {\n                status: 400\n            });\n        }\n        // Connect to our Flask backend\n        const backendUrl = process.env.NEXT_PUBLIC_API_URL || \"http://localhost:5000\";\n        console.log(`Sending analysis request to: ${backendUrl}/api/analyze`);\n        const response = await fetch(`${backendUrl}/api/analyze`, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"Accept\": \"application/json\"\n            },\n            body: JSON.stringify({\n                videoId,\n                url\n            })\n        });\n        if (!response.ok) {\n            const errorData = await response.json().catch(()=>({\n                    error: 'Unknown error'\n                }));\n            console.error(\"Backend error:\", errorData);\n            // Check if it's an API quota exceeded error\n            if (errorData.apiQuotaExceeded) {\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    message: \"OpenAI API quota exceeded. Please try again later or check your API key.\",\n                    apiQuotaExceeded: true\n                }, {\n                    status: 429\n                });\n            }\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: errorData.error || \"Failed to process video\"\n            }, {\n                status: response.status\n            });\n        }\n        const data = await response.json();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(data);\n    } catch (error) {\n        console.error(\"Error in analyze API:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Failed to process video\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FuYWx5emUvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7QUFFbkMsZUFBZUMsS0FBS0MsT0FBZ0I7SUFDekMsSUFBSTtRQUNGLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxHQUFHLEVBQUUsR0FBRyxNQUFNRixRQUFRRyxJQUFJO1FBRTNDLElBQUksQ0FBQ0YsV0FBVyxDQUFDQyxLQUFLO1lBQ3BCLE9BQU9KLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBOEIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3JGO1FBRUEsK0JBQStCO1FBQy9CLE1BQU1DLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0MsbUJBQW1CLElBQUk7UUFDdERDLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLDZCQUE2QixFQUFFTCxXQUFXLFlBQVksQ0FBQztRQUVwRSxNQUFNTSxXQUFXLE1BQU1DLE1BQU0sR0FBR1AsV0FBVyxZQUFZLENBQUMsRUFBRTtZQUN4RFEsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtnQkFDaEIsVUFBVTtZQUNaO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRWpCO2dCQUFTQztZQUFJO1FBQ3RDO1FBRUEsSUFBSSxDQUFDVSxTQUFTTyxFQUFFLEVBQUU7WUFDaEIsTUFBTUMsWUFBWSxNQUFNUixTQUFTVCxJQUFJLEdBQUdrQixLQUFLLENBQUMsSUFBTztvQkFBRUMsT0FBTztnQkFBZ0I7WUFDOUVaLFFBQVFZLEtBQUssQ0FBQyxrQkFBa0JGO1lBRWhDLDRDQUE0QztZQUM1QyxJQUFJQSxVQUFVRyxnQkFBZ0IsRUFBRTtnQkFDOUIsT0FBT3pCLHFEQUFZQSxDQUFDSyxJQUFJLENBQ3RCO29CQUFFQyxTQUFTO29CQUE0RW1CLGtCQUFrQjtnQkFBSyxHQUM5RztvQkFBRWxCLFFBQVE7Z0JBQUk7WUFFbEI7WUFFQSxPQUFPUCxxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO2dCQUFFQyxTQUFTZ0IsVUFBVUUsS0FBSyxJQUFJO1lBQTBCLEdBQUc7Z0JBQUVqQixRQUFRTyxTQUFTUCxNQUFNO1lBQUM7UUFDaEg7UUFFQSxNQUFNbUIsT0FBTyxNQUFNWixTQUFTVCxJQUFJO1FBQ2hDLE9BQU9MLHFEQUFZQSxDQUFDSyxJQUFJLENBQUNxQjtJQUMzQixFQUFFLE9BQU9GLE9BQU87UUFDZFosUUFBUVksS0FBSyxDQUFDLHlCQUF5QkE7UUFDdkMsT0FBT3hCLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUEwQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNqRjtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFllbGxhbmtpS2F1c2hpa1xcRGVza3RvcFxcS0FVU0hJSyBDU0VcXE1ham9yIFByb2plY3RcXEZpbmFsIERvY3NcXEludGVncmF0ZWQgUmV2aWV3IG9mIFlUIFZpZGVvc1xcZnJvbnRlbmRcXGFwcFxcYXBpXFxhbmFseXplXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB2aWRlb0lkLCB1cmwgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpXG5cbiAgICBpZiAoIXZpZGVvSWQgJiYgIXVybCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJWaWRlbyBJRCBvciBVUkwgaXMgcmVxdWlyZWRcIiB9LCB7IHN0YXR1czogNDAwIH0pXG4gICAgfVxuXG4gICAgLy8gQ29ubmVjdCB0byBvdXIgRmxhc2sgYmFja2VuZFxuICAgIGNvbnN0IGJhY2tlbmRVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCJcbiAgICBjb25zb2xlLmxvZyhgU2VuZGluZyBhbmFseXNpcyByZXF1ZXN0IHRvOiAke2JhY2tlbmRVcmx9L2FwaS9hbmFseXplYClcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFja2VuZFVybH0vYXBpL2FuYWx5emVgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB2aWRlb0lkLCB1cmwgfSksXG4gICAgfSlcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKS5jYXRjaCgoKSA9PiAoeyBlcnJvcjogJ1Vua25vd24gZXJyb3InIH0pKVxuICAgICAgY29uc29sZS5lcnJvcihcIkJhY2tlbmQgZXJyb3I6XCIsIGVycm9yRGF0YSlcbiAgICAgIFxuICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhbiBBUEkgcXVvdGEgZXhjZWVkZWQgZXJyb3JcbiAgICAgIGlmIChlcnJvckRhdGEuYXBpUXVvdGFFeGNlZWRlZCkge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgICAgeyBtZXNzYWdlOiBcIk9wZW5BSSBBUEkgcXVvdGEgZXhjZWVkZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIgb3IgY2hlY2sgeW91ciBBUEkga2V5LlwiLCBhcGlRdW90YUV4Y2VlZGVkOiB0cnVlIH0sXG4gICAgICAgICAgeyBzdGF0dXM6IDQyOSB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogZXJyb3JEYXRhLmVycm9yIHx8IFwiRmFpbGVkIHRvIHByb2Nlc3MgdmlkZW9cIiB9LCB7IHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihkYXRhKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBhbmFseXplIEFQSTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJGYWlsZWQgdG8gcHJvY2VzcyB2aWRlb1wiIH0sIHsgc3RhdHVzOiA1MDAgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlBPU1QiLCJyZXF1ZXN0IiwidmlkZW9JZCIsInVybCIsImpzb24iLCJtZXNzYWdlIiwic3RhdHVzIiwiYmFja2VuZFVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImVycm9yRGF0YSIsImNhdGNoIiwiZXJyb3IiLCJhcGlRdW90YUV4Y2VlZGVkIiwiZGF0YSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/analyze/route.ts\n");

/***/ }),

/***/ "(ssr)/../node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/../node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fanalyze%2Froute&page=%2Fapi%2Fanalyze%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fanalyze%2Froute.ts&appDir=C%3A%5CUsers%5CYellankiKaushik%5CDesktop%5CKAUSHIK%20CSE%5CMajor%20Project%5CFinal%20Docs%5CIntegrated%20Review%20of%20YT%20Videos%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CYellankiKaushik%5CDesktop%5CKAUSHIK%20CSE%5CMajor%20Project%5CFinal%20Docs%5CIntegrated%20Review%20of%20YT%20Videos%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();