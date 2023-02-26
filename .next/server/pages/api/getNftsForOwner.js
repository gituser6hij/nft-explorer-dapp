"use strict";
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
exports.id = "pages/api/getNftsForOwner";
exports.ids = ["pages/api/getNftsForOwner"];
exports.modules = {

/***/ "alchemy-sdk":
/*!******************************!*\
  !*** external "alchemy-sdk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("alchemy-sdk");

/***/ }),

/***/ "(api)/./pages/api/getNftsForOwner.js":
/*!**************************************!*\
  !*** ./pages/api/getNftsForOwner.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alchemy-sdk */ \"alchemy-sdk\");\n/* harmony import */ var alchemy_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const { address , pageSize , chain , excludeFilter , pageKey  } = JSON.parse(req.body);\n    console.log(chain);\n    if (req.method !== \"POST\") {\n        res.status(405).send({\n            message: \"Only POST requests allowed\"\n        });\n        return;\n    }\n    const settings = {\n        apiKey: process.env.ALCHEMY_API_KEY,\n        network: alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__.Network[chain]\n    };\n    const alchemy = new alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__.Alchemy(settings);\n    try {\n        const nfts = await alchemy.nft.getNftsForOwner(address, {\n            pageSize: pageSize ? pageSize : 100,\n            excludeFilters: excludeFilter && [\n                alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__.NftFilters.SPAM\n            ],\n            pageKey: pageKey ? pageKey : \"\"\n        });\n        const formattedNfts = nfts.ownedNfts.map((nft)=>{\n            var _contract_openSea, _media_, _media_1, _contract_openSea1;\n            const { contract , title , tokenType , tokenId , description , media  } = nft;\n            return {\n                contract: contract.address,\n                symbol: contract.symbol,\n                collectionName: (_contract_openSea = contract.openSea) === null || _contract_openSea === void 0 ? void 0 : _contract_openSea.collectionName,\n                media: ((_media_ = media[0]) === null || _media_ === void 0 ? void 0 : _media_.gateway) ? (_media_1 = media[0]) === null || _media_1 === void 0 ? void 0 : _media_1.gateway : \"https://via.placeholder.com/500\",\n                verified: (_contract_openSea1 = contract.openSea) === null || _contract_openSea1 === void 0 ? void 0 : _contract_openSea1.safelistRequestStatus,\n                tokenType,\n                tokenId,\n                title,\n                description\n            };\n        });\n        const filteredNfts = formattedNfts.filter((nft)=>nft.title.length && nft.description.length && nft.media);\n        res.status(200).json({\n            nfts: filteredNfts,\n            pageKey: nfts.pageKey\n        });\n    } catch (e) {\n        console.warn(e);\n        res.status(500).send({\n            message: \"something went wrong, check the log in your terminal\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0TmZ0c0Zvck93bmVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyRDtBQUU1QyxlQUFlRyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQyxNQUFNLEVBQUVDLFFBQU8sRUFBRUMsU0FBUSxFQUFFQyxNQUFLLEVBQUVDLGNBQWEsRUFBRUMsUUFBTyxFQUFFLEdBQUdDLEtBQUtDLEtBQUssQ0FDdEVSLElBQUlTLElBQUk7SUFFVEMsUUFBUUMsR0FBRyxDQUFDUDtJQUNaLElBQUlKLElBQUlZLE1BQU0sS0FBSyxRQUFRO1FBQzFCWCxJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBNkI7UUFDN0Q7SUFDRCxDQUFDO0lBRUQsTUFBTUMsV0FBVztRQUNoQkMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO1FBQ25DQyxTQUFTekIsZ0RBQU8sQ0FBQ1EsTUFBTTtJQUN4QjtJQUVBLE1BQU1rQixVQUFVLElBQUl6QixnREFBT0EsQ0FBQ21CO0lBRTVCLElBQUk7UUFDSCxNQUFNTyxPQUFPLE1BQU1ELFFBQVFFLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDdkIsU0FBUztZQUN2REMsVUFBVUEsV0FBV0EsV0FBVyxHQUFHO1lBQ25DdUIsZ0JBQWdCckIsaUJBQWlCO2dCQUFDUCx3REFBZTthQUFDO1lBQ2xEUSxTQUFTQSxVQUFVQSxVQUFVLEVBQUU7UUFDaEM7UUFFQSxNQUFNc0IsZ0JBQWdCTCxLQUFLTSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxDQUFDTixNQUFRO2dCQU9oQ08sbUJBQ1RDLFNBQ0pBLFVBRU9EO1lBVlgsTUFBTSxFQUFFQSxTQUFRLEVBQUVFLE1BQUssRUFBRUMsVUFBUyxFQUFFQyxRQUFPLEVBQUVDLFlBQVcsRUFBRUosTUFBSyxFQUFFLEdBQ2hFUjtZQUVELE9BQU87Z0JBQ05PLFVBQVVBLFNBQVM3QixPQUFPO2dCQUMxQm1DLFFBQVFOLFNBQVNNLE1BQU07Z0JBQ3ZCQyxnQkFBZ0JQLENBQUFBLG9CQUFBQSxTQUFTUSxPQUFPLGNBQWhCUiwrQkFBQUEsS0FBQUEsSUFBQUEsa0JBQWtCTyxjQUFjO2dCQUNoRE4sT0FBT0EsQ0FBQUEsQ0FBQUEsVUFBQUEsS0FBSyxDQUFDLEVBQUUsY0FBUkEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVVRLE9BQU8sSUFDckJSLENBQUFBLFdBQUFBLEtBQUssQ0FBQyxFQUFFLGNBQVJBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVUSxPQUFPLEdBQ2pCLGlDQUFpQztnQkFDcENDLFVBQVVWLENBQUFBLHFCQUFBQSxTQUFTUSxPQUFPLGNBQWhCUixnQ0FBQUEsS0FBQUEsSUFBQUEsbUJBQWtCVyxxQkFBcUI7Z0JBQ2pEUjtnQkFDQUM7Z0JBQ0FGO2dCQUNBRztZQUNEO1FBQ0Q7UUFDRixNQUFNTyxlQUFlZixjQUFjZ0IsTUFBTSxDQUNuQyxDQUFDcEIsTUFBUUEsSUFBSVMsS0FBSyxDQUFDWSxNQUFNLElBQUlyQixJQUFJWSxXQUFXLENBQUNTLE1BQU0sSUFBSXJCLElBQUlRLEtBQUs7UUFFcEUvQixJQUFJWSxNQUFNLENBQUMsS0FBS2lDLElBQUksQ0FBQztZQUFFdkIsTUFBTW9CO1lBQWNyQyxTQUFTaUIsS0FBS2pCLE9BQU87UUFBQztJQUNsRSxFQUFFLE9BQU95QyxHQUFHO1FBQ1hyQyxRQUFRc0MsSUFBSSxDQUFDRDtRQUNiOUMsSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNwQkMsU0FBUztRQUNWO0lBQ0Q7QUFDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmZ0LWV4cGxvcmVyLWRhcHAvLi9wYWdlcy9hcGkvZ2V0TmZ0c0Zvck93bmVyLmpzP2Y0NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV0d29yaywgQWxjaGVteSwgTmZ0RmlsdGVycyB9IGZyb20gXCJhbGNoZW15LXNka1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cdGNvbnN0IHsgYWRkcmVzcywgcGFnZVNpemUsIGNoYWluLCBleGNsdWRlRmlsdGVyLCBwYWdlS2V5IH0gPSBKU09OLnBhcnNlKFxuXHRcdHJlcS5ib2R5XG5cdCk7XG5cdGNvbnNvbGUubG9nKGNoYWluKTtcblx0aWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSB7XG5cdFx0cmVzLnN0YXR1cyg0MDUpLnNlbmQoeyBtZXNzYWdlOiBcIk9ubHkgUE9TVCByZXF1ZXN0cyBhbGxvd2VkXCIgfSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc2V0dGluZ3MgPSB7XG5cdFx0YXBpS2V5OiBwcm9jZXNzLmVudi5BTENIRU1ZX0FQSV9LRVksXG5cdFx0bmV0d29yazogTmV0d29ya1tjaGFpbl0sXG5cdH07XG5cblx0Y29uc3QgYWxjaGVteSA9IG5ldyBBbGNoZW15KHNldHRpbmdzKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IG5mdHMgPSBhd2FpdCBhbGNoZW15Lm5mdC5nZXROZnRzRm9yT3duZXIoYWRkcmVzcywge1xuXHRcdFx0cGFnZVNpemU6IHBhZ2VTaXplID8gcGFnZVNpemUgOiAxMDAsXG5cdFx0XHRleGNsdWRlRmlsdGVyczogZXhjbHVkZUZpbHRlciAmJiBbTmZ0RmlsdGVycy5TUEFNXSxcblx0XHRcdHBhZ2VLZXk6IHBhZ2VLZXkgPyBwYWdlS2V5IDogXCJcIixcblx0XHR9KTtcblxuXHRcdGNvbnN0IGZvcm1hdHRlZE5mdHMgPSBuZnRzLm93bmVkTmZ0cy5tYXAoKG5mdCkgPT4ge1xuXHRcdFx0Y29uc3QgeyBjb250cmFjdCwgdGl0bGUsIHRva2VuVHlwZSwgdG9rZW5JZCwgZGVzY3JpcHRpb24sIG1lZGlhIH0gPVxuXHRcdFx0XHRuZnQ7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNvbnRyYWN0OiBjb250cmFjdC5hZGRyZXNzLFxuXHRcdFx0XHRzeW1ib2w6IGNvbnRyYWN0LnN5bWJvbCxcblx0XHRcdFx0Y29sbGVjdGlvbk5hbWU6IGNvbnRyYWN0Lm9wZW5TZWE/LmNvbGxlY3Rpb25OYW1lLFxuXHRcdFx0XHRtZWRpYTogbWVkaWFbMF0/LmdhdGV3YXlcblx0XHRcdFx0XHQ/IG1lZGlhWzBdPy5nYXRld2F5XG5cdFx0XHRcdFx0OiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81MDBcIixcblx0XHRcdFx0dmVyaWZpZWQ6IGNvbnRyYWN0Lm9wZW5TZWE/LnNhZmVsaXN0UmVxdWVzdFN0YXR1cyxcblx0XHRcdFx0dG9rZW5UeXBlLFxuXHRcdFx0XHR0b2tlbklkLFxuXHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0ZGVzY3JpcHRpb24sXG5cdFx0XHR9O1xuXHRcdH0pO1xuY29uc3QgZmlsdGVyZWROZnRzID0gZm9ybWF0dGVkTmZ0cy5maWx0ZXIoXG4gICAgICAobmZ0KSA9PiBuZnQudGl0bGUubGVuZ3RoICYmIG5mdC5kZXNjcmlwdGlvbi5sZW5ndGggJiYgbmZ0Lm1lZGlhXG4gICAgKTtcblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7IG5mdHM6IGZpbHRlcmVkTmZ0cywgcGFnZUtleTogbmZ0cy5wYWdlS2V5IH0pO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Y29uc29sZS53YXJuKGUpO1xuXHRcdHJlcy5zdGF0dXMoNTAwKS5zZW5kKHtcblx0XHRcdG1lc3NhZ2U6IFwic29tZXRoaW5nIHdlbnQgd3JvbmcsIGNoZWNrIHRoZSBsb2cgaW4geW91ciB0ZXJtaW5hbFwiLFxuXHRcdH0pO1xuXHR9XG59XG4iXSwibmFtZXMiOlsiTmV0d29yayIsIkFsY2hlbXkiLCJOZnRGaWx0ZXJzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImFkZHJlc3MiLCJwYWdlU2l6ZSIsImNoYWluIiwiZXhjbHVkZUZpbHRlciIsInBhZ2VLZXkiLCJKU09OIiwicGFyc2UiLCJib2R5IiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwic2V0dGluZ3MiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiQUxDSEVNWV9BUElfS0VZIiwibmV0d29yayIsImFsY2hlbXkiLCJuZnRzIiwibmZ0IiwiZ2V0TmZ0c0Zvck93bmVyIiwiZXhjbHVkZUZpbHRlcnMiLCJTUEFNIiwiZm9ybWF0dGVkTmZ0cyIsIm93bmVkTmZ0cyIsIm1hcCIsImNvbnRyYWN0IiwibWVkaWEiLCJ0aXRsZSIsInRva2VuVHlwZSIsInRva2VuSWQiLCJkZXNjcmlwdGlvbiIsInN5bWJvbCIsImNvbGxlY3Rpb25OYW1lIiwib3BlblNlYSIsImdhdGV3YXkiLCJ2ZXJpZmllZCIsInNhZmVsaXN0UmVxdWVzdFN0YXR1cyIsImZpbHRlcmVkTmZ0cyIsImZpbHRlciIsImxlbmd0aCIsImpzb24iLCJlIiwid2FybiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getNftsForOwner.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getNftsForOwner.js"));
module.exports = __webpack_exports__;

})();