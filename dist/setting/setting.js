System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "jimu-ui"
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ },

/***/ "jimu-ui/advanced/setting-components"
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/mapillary-explorer/src/setting/setting.tsx ***!
  \****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/** @jsx jsx */




class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.onMapWidgetSelected = (useMapWidgetIds) => {
            this.props.onSettingChange({
                id: this.props.id,
                useMapWidgetIds: useMapWidgetIds
            });
        };
        this.onToggleTrafficSigns = (evt) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('enableTrafficSigns', evt.target.checked)
            });
        };
        this.onToggleObjects = (evt) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('enableMapillaryObjects', evt.target.checked)
            });
        };
        // Handle Turbo Mode Only Toggle
        this.onToggleTurboModeOnly = (evt) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('turboModeOnly', evt.target.checked)
            });
        };
        this.onToggleHideTurboFilter = (evt) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('hideTurboFilter', evt.target.checked)
            });
        };
        this.onToggleCoverageAlwaysOn = (evt) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('coverageLayerAlwaysOn', evt.target.checked)
            });
        };
        this.onToggleHideCoverageCircles = (evt) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('hideCoverageCircles', evt.target.checked)
            });
        };
        // Handle Creator Input
        this.onCreatorChange = (evt) => {
            const value = evt.target.value;
            let config = this.props.config.set('turboCreator', value);
            config = this.autoSetTurboMode(config);
            this.props.onSettingChange({ id: this.props.id, config });
        };
        // Turbo Preset Handlers
        this.onTurboDefaultStartDateChange = (evt) => {
            const value = evt.target.value || undefined;
            let config = this.props.config.set('turboDefaultStartDate', value);
            config = this.autoSetTurboMode(config);
            this.props.onSettingChange({ id: this.props.id, config });
        };
        this.onTurboDefaultEndDateChange = (evt) => {
            const value = evt.target.value || undefined;
            let config = this.props.config.set('turboDefaultEndDate', value);
            config = this.autoSetTurboMode(config);
            this.props.onSettingChange({ id: this.props.id, config });
        };
        /**
          * Cycles the Is Pano preset through three states via a <Select>:
          *   ''      → no filter (undefined)
          *   'true'  → panoramas only
          *   'false' → non-panoramas only
        */
        this.onTurboDefaultIsPanoChange = (evt) => {
            const raw = evt.target.value;
            const value = raw === 'true' ? true : raw === 'false' ? false : null;
            let config = this.props.config.set('turboDefaultIsPano', value);
            config = this.autoSetTurboMode(config);
            this.props.onSettingChange({ id: this.props.id, config });
        };
        this.onToggleTurboDefaultColorByDate = (evt) => {
            let config = this.props.config.set('turboDefaultColorByDate', evt.target.checked);
            config = this.autoSetTurboMode(config);
            this.props.onSettingChange({ id: this.props.id, config });
        };
        this.onToggleHideLegend = (evt) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('hideLegend', evt.target.checked)
            });
        };
        this.onToggleHideInfoBox = (evt) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('hideInfoBox', evt.target.checked)
            });
        };
        this.onToggleHideImageDownload = (evt) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('hideImageDownload', evt.target.checked)
            });
        };
        this.onToggleHideTimeTravel = (evt) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('hideTimeTravel', evt.target.checked)
            });
        };
        this.onToggleHideShareButton = (evt) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('hideShareButton', evt.target.checked)
            });
        };
        this.onToggleHideSyncHeadingButton = (evt) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('hideSyncHeadingButton', evt.target.checked)
            });
        };
        this.onToggleHideCenterMapButton = (evt) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('hideCenterMapButton', evt.target.checked)
            });
        };
        this.onToggleHideCoverageAnalysis = (evt) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('hideCoverageAnalysis', evt.target.checked)
            });
        };
        this.onToggleHidePointCloud = (evt) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('hidePointCloud', evt.target.checked)
            });
        };
        // Handler for Render Mode
        this.onRenderModeChange = (evt) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('renderMode', parseInt(evt.target.value, 10))
            });
        };
        // Handler for Transition Mode
        this.onTransitionModeChange = (evt) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('transitionMode', parseInt(evt.target.value, 10))
            });
        };
        // Handler for Sync Map Position (West, East, Center, etc.)
        this.onSyncPositionChange = (evt) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('syncMapPosition', evt.target.value)
            });
        };
        this.onCameraXChange = (value) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('cameraX', value)
            });
        };
        this.onCameraYChange = (value) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('cameraY', value)
            });
        };
        this.onToggleDebugMode = (evt) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('debugMode', evt.target.checked)
            });
        };
    }
    // Helper: converts stored boolean | null | undefined to the <Select> string value
    isPanoSelectValue() {
        const v = this.props.config.turboDefaultIsPano;
        if (v === true)
            return 'true';
        if (v === false)
            return 'false';
        return '';
    }
    autoSetTurboMode(config) {
        const hasAnyPreset = !!(config.turboCreator ||
            config.turboDefaultStartDate ||
            config.turboDefaultEndDate ||
            (config.turboDefaultIsPano !== null && config.turboDefaultIsPano !== undefined) ||
            config.turboDefaultColorByDate);
        return config.set('turboModeOnly', hasAnyPreset);
    }
    render() {
        var _a, _b;
        const config = this.props.config;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-setting-mapillary jimu-widget-setting" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Source" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: '100%' } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: '8px', fontWeight: 500 } }, "Select Map Widget"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { onSelect: this.onMapWidgetSelected, useMapWidgetIds: this.props.useMapWidgetIds }))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Lock Map to View", flow: "wrap" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "d-flex justify-content-between w-100 align-items-center" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { title: "Syncs the map center to the current image location" }, "Enable Sync"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: this.props.config.syncMapWithImage === true, onChange: (evt) => {
                                this.props.onSettingChange({
                                    id: this.props.id,
                                    config: this.props.config.set('syncMapWithImage', evt.target.checked)
                                });
                            } })),
                    this.props.config.syncMapWithImage && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mt-2 w-100", style: { paddingLeft: '0px' } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: '12px', fontWeight: 500, marginBottom: '4px' } }, "Lock Position:"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { size: "sm", value: config.syncMapPosition || 'center', onChange: this.onSyncPositionChange, style: { width: '100%' } },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "center" }, "Center (Default)"),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "west" }, "West (Focus Left)"),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "east" }, "East (Focus Right)"),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "north" }, "North (Focus Top)"),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "south" }, "South (Focus Bottom)")),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "text mt-2", style: { fontSize: '10px', fontStyle: 'italic', lineHeight: '1.3', opacity: '0.3' } },
                            config.syncMapPosition === 'east' && "Best if your widget is docked on the Left.",
                            config.syncMapPosition === 'west' && "Best if your widget is docked on the Right.",
                            config.syncMapPosition === 'north' && "Best if your widget is docked on the Bottom.",
                            config.syncMapPosition === 'south' && "Best if your widget is docked on the Top.",
                            (!config.syncMapPosition || config.syncMapPosition === 'center') && "Keeps the active frame in the center of the map."))))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "General Settings" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Mapillary Coverage", style: { marginTop: '5px' } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: config.coverageLayerAlwaysOn === true, onChange: this.onToggleCoverageAlwaysOn })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "text", style: { fontSize: '12px', fontStyle: 'italic', marginTop: '5px', opacity: '0.3' } }, "Always shows standard Mapillary vector tiles and hides the map toggle.")),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Hide Coverage Circles" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: config.hideCoverageCircles === true, onChange: this.onToggleHideCoverageCircles })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "text", style: { fontSize: '12px', marginTop: '5px', opacity: '0.3', fontStyle: 'italic' } }, "Hides the individual image points on the Mapillary coverage layer, showing only sequence lines.")),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Turbo Mode Only" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: config.turboModeOnly === true, onChange: this.onToggleTurboModeOnly })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "text", style: { fontSize: '12px', fontStyle: 'italic', marginTop: '5px', opacity: '0.3' } }, "Always enables the turbo coverage layer and hides the toggle. Disables Normal Mode, allowing interaction only by clicking visible coverage points.")),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: "wrap" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: '100%' } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: '5px', fontWeight: 500 } }, "Default Creator (Turbo Mode Only)"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { className: "w-100", placeholder: "e.g. mapillary_user", value: config.turboCreator || '', onChange: this.onCreatorChange })))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Turbo Coverage Presets" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "text", style: { fontSize: '12px', fontStyle: 'italic', opacity: '0.4' } }, "These values pre-populate the Turbo Mode filter panel when the widget loads. Users can still override them at runtime via the filter button (unless it is hidden).")),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: "wrap" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: '100%' } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: '5px', fontWeight: 500 } }, "Default Start Date"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "date", value: config.turboDefaultStartDate || '', onChange: this.onTurboDefaultStartDateChange, style: {
                                width: '100%',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                border: '1px solid var(--border-color, #ccc)',
                                background: 'var(--input-bg, #fff)',
                                color: 'var(--input-color, #333)',
                                fontSize: '13px',
                                boxSizing: 'border-box'
                            } }),
                        config.turboDefaultStartDate && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: () => {
                                let config = this.props.config.set('turboDefaultStartDate', undefined);
                                config = this.autoSetTurboMode(config);
                                this.props.onSettingChange({ id: this.props.id, config });
                            }, style: {
                                marginTop: '4px',
                                fontSize: '11px',
                                background: 'none',
                                border: 'none',
                                color: 'var(--danger-color, #c00)',
                                cursor: 'pointer',
                                padding: '0'
                            } }, "\u2715 Clear start date")))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: "wrap" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: '100%' } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: '5px', fontWeight: 500 } }, "Default End Date"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "date", value: config.turboDefaultEndDate || '', onChange: this.onTurboDefaultEndDateChange, style: {
                                width: '100%',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                border: '1px solid var(--border-color, #ccc)',
                                background: 'var(--input-bg, #fff)',
                                color: 'var(--input-color, #333)',
                                fontSize: '13px',
                                boxSizing: 'border-box'
                            } }),
                        config.turboDefaultEndDate && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: () => {
                                let config = this.props.config.set('turboDefaultEndDate', undefined);
                                config = this.autoSetTurboMode(config);
                                this.props.onSettingChange({ id: this.props.id, config });
                            }, style: {
                                marginTop: '4px',
                                fontSize: '11px',
                                background: 'none',
                                border: 'none',
                                color: 'var(--danger-color, #c00)',
                                cursor: 'pointer',
                                padding: '0'
                            } }, "\u2715 Clear end date")))),
                config.turboDefaultStartDate && config.turboDefaultEndDate &&
                    config.turboDefaultStartDate > config.turboDefaultEndDate && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: '11px', color: 'var(--danger-color, #c00)', fontWeight: 500 } }, "\u26A0 Start date is after end date - no images will match this range."))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: "wrap" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: '100%' } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: '5px', fontWeight: 500 } }, "Default Panorama Filter"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { size: "sm", value: this.isPanoSelectValue(), onChange: this.onTurboDefaultIsPanoChange, style: { width: '100%' } },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "" }, "All images (no filter)"),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "true" }, "Panoramas only"),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "false" }, "Non-panoramas only")),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: '11px', fontStyle: 'italic', marginTop: '4px', opacity: '0.4' } }, "Restricts Turbo coverage to panoramic or flat images only."))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Default Color by Capture Year" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: config.turboDefaultColorByDate === true, onChange: this.onToggleTurboDefaultColorByDate })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "text", style: { fontSize: '11px', fontStyle: 'italic', opacity: '0.4' } }, "When enabled, Turbo coverage points are coloured by their capture year on first load. The legend in the info box will reflect the year breakdown."))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Appearance Settings" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "text", style: { fontSize: '12px', marginTop: '5px', opacity: '0.3', fontStyle: 'italic' } }, "Toggle UI elements and action tools to simplify the interface.")),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Hide Legend" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: config.hideLegend === true, onChange: this.onToggleHideLegend })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Hide Info Box" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: config.hideInfoBox === true, onChange: this.onToggleHideInfoBox })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Hide Turbo Mode Filter Button" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: config.hideTurboFilter === true, onChange: this.onToggleHideTurboFilter })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Hide Analysis, StreetGap & Quality View" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: config.hideCoverageAnalysis === true, onChange: this.onToggleHideCoverageAnalysis })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Hide Point Cloud (3D only)" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: config.hidePointCloud === true, onChange: this.onToggleHidePointCloud })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Hide Image Download" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: config.hideImageDownload === true, onChange: this.onToggleHideImageDownload })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Hide Time Travel" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: config.hideTimeTravel === true, onChange: this.onToggleHideTimeTravel })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Hide Share Button" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: config.hideShareButton === true, onChange: this.onToggleHideShareButton })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Hide Lock Map Rotation Button (3D)" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: config.hideSyncHeadingButton === true, onChange: evt => this.props.onSettingChange({
                            id: this.props.id,
                            config: this.props.config.set('hideSyncHeadingButton', evt.target.checked)
                        }) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Hide Center Map Button" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: config.hideCenterMapButton === true, onChange: evt => this.props.onSettingChange({
                            id: this.props.id,
                            config: this.props.config.set('hideCenterMapButton', evt.target.checked)
                        }) }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Feature Detection Layers" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Enable Traffic Signs" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: config.enableTrafficSigns !== false, onChange: this.onToggleTrafficSigns })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Enable Mapillary Objects" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: config.enableMapillaryObjects !== false, onChange: this.onToggleObjects })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "text", style: { fontSize: '12px', fontStyle: 'italic', marginTop: '5px', opacity: '0.3' } }, "Disabling these will hide the sign and object layer toggle buttons in the widget interface."))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Advanced Settings" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Render Mode" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { size: "sm", 
                        // Fallback to '1' (Fill) if renderMode is undefined
                        value: String((_a = config.renderMode) !== null && _a !== void 0 ? _a : 1), onChange: (evt) => this.props.onSettingChange({
                            id: this.props.id,
                            config: this.props.config.set('renderMode', parseInt(evt.target.value, 10))
                        }), style: { width: '130px' } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "1" }, "Fill (Default)"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "0" }, "Letterbox"))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "text", style: { fontSize: '11px', fontStyle: 'italic', marginTop: '-5px', opacity: '0.3' } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", null, "Fill:"),
                        " Fills the window.",
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", null, "Letterbox:"),
                        " Shows the full original image (may show black bars, recommended for wide widgets).")),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Transition Mode" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { size: "sm", value: String((_b = config.transitionMode) !== null && _b !== void 0 ? _b : 0), onChange: this.onTransitionModeChange, style: { width: '130px' } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "0" }, "Smooth (Default)"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { value: "1" }, "Instantaneous"))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "text", style: { fontSize: '11px', fontStyle: 'italic', marginTop: '-5px', opacity: '0.3' } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", null, "Default:"),
                        " Uses motion blending between frames.",
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", null, "Instantaneous:"),
                        " Jumps immediately to the next frame (snappier).")),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: "wrap" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-100" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontWeight: 500, marginBottom: '5px' } }, "Default Camera Angle (Normalized 0-1)"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "d-flex justify-content-between align-items-center mb-2" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: '12px' } }, "Horizontal (X)"),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.NumericInput, { size: "sm", style: { width: '80px' }, value: config.cameraX, min: 0, max: 1, step: 0.05, placeholder: "0.5" // Shows 0.5 when empty
                                , onChange: this.onCameraXChange })),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "d-flex justify-content-between align-items-center mb-2" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: '12px' } }, "Vertical (Y)"),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.NumericInput, { size: "sm", style: { width: '80px' }, value: config.cameraY, min: 0, max: 1, step: 0.05, placeholder: "0.5" // Shows 0.5 when empty
                                , onChange: this.onCameraYChange })),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "text", style: { fontSize: '11px', fontStyle: 'italic', opacity: '0.3' } },
                            "Standard is 0.5 for both(refers to center). ",
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", null, "X:"),
                            " 0 = Left, 1 = Right. ",
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", null, "Y:"),
                            " 0 = Sky, 1 = Ground. (Try 0.55 for wide widgets)"))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Debug Mode" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: config.debugMode === true, onChange: this.onToggleDebugMode })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "text", style: { fontSize: '12px', fontStyle: 'italic', marginTop: '0px', opacity: '0.3' } }, "Enables developer logging in the browser console (F12).")))));
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXBpbGxhcnktZXhwbG9yZXIvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGlGOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCxlQUFlO0FBQ3dCO0FBRTBDO0FBQ1Q7QUFDRTtBQUczRCxNQUFNLE9BQVEsU0FBUSw0Q0FBSyxDQUFDLGFBQW1EO0lBQTlGOztRQUVFLHdCQUFtQixHQUFHLENBQUMsZUFBeUIsRUFBRSxFQUFFO1lBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2dCQUN6QixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixlQUFlLEVBQUUsZUFBZTthQUNqQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQseUJBQW9CLEdBQUcsQ0FBQyxHQUF3QyxFQUFFLEVBQUU7WUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7Z0JBQ3pCLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7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RyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFwaWxsYXJ5LWV4cGxvcmVyL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IFJlYWN0LCBqc3ggfSBmcm9tICdqaW11LWNvcmUnO1xyXG5pbXBvcnQgeyBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tICdqaW11LWZvci1idWlsZGVyJztcclxuaW1wb3J0IHsgU2V0dGluZ1NlY3Rpb24sIFNldHRpbmdSb3cgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IE1hcFdpZGdldFNlbGVjdG9yIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBTd2l0Y2gsIFRleHRJbnB1dCwgTnVtZXJpY0lucHV0LCBTZWxlY3QsIE9wdGlvbiB9IGZyb20gJ2ppbXUtdWknO1xyXG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+LCBhbnk+IHtcclxuXHJcbiAgb25NYXBXaWRnZXRTZWxlY3RlZCA9ICh1c2VNYXBXaWRnZXRJZHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICB1c2VNYXBXaWRnZXRJZHM6IHVzZU1hcFdpZGdldElkc1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZVRyYWZmaWNTaWducyA9IChldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnZW5hYmxlVHJhZmZpY1NpZ25zJywgZXZ0LnRhcmdldC5jaGVja2VkKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZU9iamVjdHMgPSAoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2VuYWJsZU1hcGlsbGFyeU9iamVjdHMnLCBldnQudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gSGFuZGxlIFR1cmJvIE1vZGUgT25seSBUb2dnbGVcclxuICBvblRvZ2dsZVR1cmJvTW9kZU9ubHkgPSAoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ3R1cmJvTW9kZU9ubHknLCBldnQudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlSGlkZVR1cmJvRmlsdGVyID0gKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdoaWRlVHVyYm9GaWx0ZXInLCBldnQudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlQ292ZXJhZ2VBbHdheXNPbiA9IChldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnY292ZXJhZ2VMYXllckFsd2F5c09uJywgZXZ0LnRhcmdldC5jaGVja2VkKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZUhpZGVDb3ZlcmFnZUNpcmNsZXMgPSAoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2hpZGVDb3ZlcmFnZUNpcmNsZXMnLCBldnQudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIEhhbmRsZSBDcmVhdG9yIElucHV0XHJcbiAgb25DcmVhdG9yQ2hhbmdlID0gKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICBsZXQgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWcuc2V0KCd0dXJib0NyZWF0b3InLCB2YWx1ZSk7XHJcbiAgICAgIGNvbmZpZyA9IHRoaXMuYXV0b1NldFR1cmJvTW9kZShjb25maWcpO1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7IGlkOiB0aGlzLnByb3BzLmlkLCBjb25maWcgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBUdXJibyBQcmVzZXQgSGFuZGxlcnNcclxuICBvblR1cmJvRGVmYXVsdFN0YXJ0RGF0ZUNoYW5nZSA9IChldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQ7XHJcbiAgICAgIGxldCBjb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ3R1cmJvRGVmYXVsdFN0YXJ0RGF0ZScsIHZhbHVlKTtcclxuICAgICAgY29uZmlnID0gdGhpcy5hdXRvU2V0VHVyYm9Nb2RlKGNvbmZpZyk7XHJcbiAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHRoaXMucHJvcHMuaWQsIGNvbmZpZyB9KTtcclxuICB9XHJcblxyXG4gIG9uVHVyYm9EZWZhdWx0RW5kRGF0ZUNoYW5nZSA9IChldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQ7XHJcbiAgICAgIGxldCBjb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ3R1cmJvRGVmYXVsdEVuZERhdGUnLCB2YWx1ZSk7XHJcbiAgICAgIGNvbmZpZyA9IHRoaXMuYXV0b1NldFR1cmJvTW9kZShjb25maWcpO1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7IGlkOiB0aGlzLnByb3BzLmlkLCBjb25maWcgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3ljbGVzIHRoZSBJcyBQYW5vIHByZXNldCB0aHJvdWdoIHRocmVlIHN0YXRlcyB2aWEgYSA8U2VsZWN0PjpcclxuICAgICogICAnJyAgICAgIOKGkiBubyBmaWx0ZXIgKHVuZGVmaW5lZClcclxuICAgICogICAndHJ1ZScgIOKGkiBwYW5vcmFtYXMgb25seVxyXG4gICAgKiAgICdmYWxzZScg4oaSIG5vbi1wYW5vcmFtYXMgb25seVxyXG4gICovXHJcbiAgb25UdXJib0RlZmF1bHRJc1Bhbm9DaGFuZ2UgPSAoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcclxuICAgICAgY29uc3QgcmF3ID0gZXZ0LnRhcmdldC52YWx1ZTtcclxuICAgICAgY29uc3QgdmFsdWUgPSByYXcgPT09ICd0cnVlJyA/IHRydWUgOiByYXcgPT09ICdmYWxzZScgPyBmYWxzZSA6IG51bGw7XHJcbiAgICAgIGxldCBjb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ3R1cmJvRGVmYXVsdElzUGFubycsIHZhbHVlKTtcclxuICAgICAgY29uZmlnID0gdGhpcy5hdXRvU2V0VHVyYm9Nb2RlKGNvbmZpZyk7XHJcbiAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHRoaXMucHJvcHMuaWQsIGNvbmZpZyB9KTtcclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlVHVyYm9EZWZhdWx0Q29sb3JCeURhdGUgPSAoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICBsZXQgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWcuc2V0KCd0dXJib0RlZmF1bHRDb2xvckJ5RGF0ZScsIGV2dC50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICAgIGNvbmZpZyA9IHRoaXMuYXV0b1NldFR1cmJvTW9kZShjb25maWcpO1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7IGlkOiB0aGlzLnByb3BzLmlkLCBjb25maWcgfSk7XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZUhpZGVMZWdlbmQgPSAoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2hpZGVMZWdlbmQnLCBldnQudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlSGlkZUluZm9Cb3ggPSAoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2hpZGVJbmZvQm94JywgZXZ0LnRhcmdldC5jaGVja2VkKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZUhpZGVJbWFnZURvd25sb2FkID0gKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdoaWRlSW1hZ2VEb3dubG9hZCcsIGV2dC50YXJnZXQuY2hlY2tlZClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVIaWRlVGltZVRyYXZlbCA9IChldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnaGlkZVRpbWVUcmF2ZWwnLCBldnQudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlSGlkZVNoYXJlQnV0dG9uID0gKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdoaWRlU2hhcmVCdXR0b24nLCBldnQudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlSGlkZVN5bmNIZWFkaW5nQnV0dG9uID0gKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnaGlkZVN5bmNIZWFkaW5nQnV0dG9uJywgZXZ0LnRhcmdldC5jaGVja2VkKVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlSGlkZUNlbnRlck1hcEJ1dHRvbiA9IChldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2hpZGVDZW50ZXJNYXBCdXR0b24nLCBldnQudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVIaWRlQ292ZXJhZ2VBbmFseXNpcyA9IChldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnaGlkZUNvdmVyYWdlQW5hbHlzaXMnLCBldnQudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlSGlkZVBvaW50Q2xvdWQgPSAoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2hpZGVQb2ludENsb3VkJywgZXZ0LnRhcmdldC5jaGVja2VkKVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gXHJcbiAgLy8gSGFuZGxlciBmb3IgUmVuZGVyIE1vZGVcclxuICBvblJlbmRlck1vZGVDaGFuZ2UgPSAoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdyZW5kZXJNb2RlJywgcGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSwgMTApKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBIYW5kbGVyIGZvciBUcmFuc2l0aW9uIE1vZGVcclxuICBvblRyYW5zaXRpb25Nb2RlQ2hhbmdlID0gKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgndHJhbnNpdGlvbk1vZGUnLCBwYXJzZUludChldnQudGFyZ2V0LnZhbHVlLCAxMCkpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIEhhbmRsZXIgZm9yIFN5bmMgTWFwIFBvc2l0aW9uIChXZXN0LCBFYXN0LCBDZW50ZXIsIGV0Yy4pXHJcbiAgb25TeW5jUG9zaXRpb25DaGFuZ2UgPSAoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdzeW5jTWFwUG9zaXRpb24nLCBldnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNhbWVyYVhDaGFuZ2UgPSAodmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2NhbWVyYVgnLCB2YWx1ZSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DYW1lcmFZQ2hhbmdlID0gKHZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdjYW1lcmFZJywgdmFsdWUpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlRGVidWdNb2RlID0gKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdkZWJ1Z01vZGUnLCBldnQudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIEhlbHBlcjogY29udmVydHMgc3RvcmVkIGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkIHRvIHRoZSA8U2VsZWN0PiBzdHJpbmcgdmFsdWVcclxuICBwcml2YXRlIGlzUGFub1NlbGVjdFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2ID0gdGhpcy5wcm9wcy5jb25maWcudHVyYm9EZWZhdWx0SXNQYW5vO1xyXG4gICAgaWYgKHYgPT09IHRydWUpICByZXR1cm4gJ3RydWUnO1xyXG4gICAgaWYgKHYgPT09IGZhbHNlKSByZXR1cm4gJ2ZhbHNlJztcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbiAgXHJcbiAgcHJpdmF0ZSBhdXRvU2V0VHVyYm9Nb2RlKGNvbmZpZzogYW55KTogYW55IHtcclxuICAgIGNvbnN0IGhhc0FueVByZXNldCA9ICEhKFxyXG4gICAgICAgIGNvbmZpZy50dXJib0NyZWF0b3IgfHxcclxuICAgICAgICBjb25maWcudHVyYm9EZWZhdWx0U3RhcnREYXRlIHx8XHJcbiAgICAgICAgY29uZmlnLnR1cmJvRGVmYXVsdEVuZERhdGUgfHxcclxuICAgICAgICAoY29uZmlnLnR1cmJvRGVmYXVsdElzUGFubyAhPT0gbnVsbCAmJiBjb25maWcudHVyYm9EZWZhdWx0SXNQYW5vICE9PSB1bmRlZmluZWQpIHx8XHJcbiAgICAgICAgY29uZmlnLnR1cmJvRGVmYXVsdENvbG9yQnlEYXRlXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGNvbmZpZy5zZXQoJ3R1cmJvTW9kZU9ubHknLCBoYXNBbnlQcmVzZXQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWc7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc2V0dGluZy1tYXBpbGxhcnkgamltdS13aWRnZXQtc2V0dGluZ1wiPlxyXG5cclxuICAgICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9XCJTb3VyY2VcIj5cclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzhweCcsIGZvbnRXZWlnaHQ6IDUwMCB9fT5TZWxlY3QgTWFwIFdpZGdldDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yIFxyXG4gICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5vbk1hcFdpZGdldFNlbGVjdGVkfSBcclxuICAgICAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc30gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuXHJcbiAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIkxvY2sgTWFwIHRvIFZpZXdcIiBmbG93PVwid3JhcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiU3luY3MgdGhlIG1hcCBjZW50ZXIgdG8gdGhlIGN1cnJlbnQgaW1hZ2UgbG9jYXRpb25cIj5FbmFibGUgU3luYzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxTd2l0Y2ggXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMuY29uZmlnLnN5bmNNYXBXaXRoSW1hZ2UgPT09IHRydWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnc3luY01hcFdpdGhJbWFnZScsIGV2dC50YXJnZXQuY2hlY2tlZClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfX0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiBFeHRlbmRlZCBQb3NpdGlvbiBPcHRpb25zICovfVxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jb25maWcuc3luY01hcFdpdGhJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgdy0xMDBcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnLCBmb250V2VpZ2h0OiA1MDAsIG1hcmdpbkJvdHRvbTogJzRweCcgfX0+TG9jayBQb3NpdGlvbjo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlnLnN5bmNNYXBQb3NpdGlvbiB8fCAnY2VudGVyJ30gXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblN5bmNQb3NpdGlvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiY2VudGVyXCI+Q2VudGVyIChEZWZhdWx0KTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIndlc3RcIj5XZXN0IChGb2N1cyBMZWZ0KTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImVhc3RcIj5FYXN0IChGb2N1cyBSaWdodCk8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJub3J0aFwiPk5vcnRoIChGb2N1cyBUb3ApPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwic291dGhcIj5Tb3V0aCAoRm9jdXMgQm90dG9tKTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dCBtdC0yXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxMHB4JywgZm9udFN0eWxlOiAnaXRhbGljJywgbGluZUhlaWdodDogJzEuMycsIG9wYWNpdHk6ICcwLjMnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlnLnN5bmNNYXBQb3NpdGlvbiA9PT0gJ2Vhc3QnICYmIFwiQmVzdCBpZiB5b3VyIHdpZGdldCBpcyBkb2NrZWQgb24gdGhlIExlZnQuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb25maWcuc3luY01hcFBvc2l0aW9uID09PSAnd2VzdCcgJiYgXCJCZXN0IGlmIHlvdXIgd2lkZ2V0IGlzIGRvY2tlZCBvbiB0aGUgUmlnaHQuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb25maWcuc3luY01hcFBvc2l0aW9uID09PSAnbm9ydGgnICYmIFwiQmVzdCBpZiB5b3VyIHdpZGdldCBpcyBkb2NrZWQgb24gdGhlIEJvdHRvbS5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbmZpZy5zeW5jTWFwUG9zaXRpb24gPT09ICdzb3V0aCcgJiYgXCJCZXN0IGlmIHlvdXIgd2lkZ2V0IGlzIGRvY2tlZCBvbiB0aGUgVG9wLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KCFjb25maWcuc3luY01hcFBvc2l0aW9uIHx8IGNvbmZpZy5zeW5jTWFwUG9zaXRpb24gPT09ICdjZW50ZXInKSAmJiBcIktlZXBzIHRoZSBhY3RpdmUgZnJhbWUgaW4gdGhlIGNlbnRlciBvZiB0aGUgbWFwLlwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgICAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT1cIkdlbmVyYWwgU2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9XCJNYXBpbGxhcnkgQ292ZXJhZ2VcIiBzdHlsZT17e21hcmdpblRvcDogJzVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgPFN3aXRjaCBcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjb25maWcuY292ZXJhZ2VMYXllckFsd2F5c09uID09PSB0cnVlfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRvZ2dsZUNvdmVyYWdlQWx3YXlzT259IFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcsIGZvbnRTdHlsZTogJ2l0YWxpYycsIG1hcmdpblRvcDogJzVweCcsIG9wYWNpdHk6ICcwLjMnIH19PlxyXG4gICAgICAgICAgICAgICAgICBBbHdheXMgc2hvd3Mgc3RhbmRhcmQgTWFwaWxsYXJ5IHZlY3RvciB0aWxlcyBhbmQgaGlkZXMgdGhlIG1hcCB0b2dnbGUuXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9XCJIaWRlIENvdmVyYWdlIENpcmNsZXNcIj5cclxuICAgICAgICAgICAgICAgICAgPFN3aXRjaCBcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjb25maWcuaGlkZUNvdmVyYWdlQ2lyY2xlcyA9PT0gdHJ1ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Ub2dnbGVIaWRlQ292ZXJhZ2VDaXJjbGVzfSBcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRcIiBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnLCBtYXJnaW5Ub3A6ICc1cHgnLCBvcGFjaXR5OiAnMC4zJywgZm9udFN0eWxlOidpdGFsaWMnIH19PlxyXG4gICAgICAgICAgICAgICAgICBIaWRlcyB0aGUgaW5kaXZpZHVhbCBpbWFnZSBwb2ludHMgb24gdGhlIE1hcGlsbGFyeSBjb3ZlcmFnZSBsYXllciwgc2hvd2luZyBvbmx5IHNlcXVlbmNlIGxpbmVzLlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPVwiVHVyYm8gTW9kZSBPbmx5XCI+XHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoIFxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtjb25maWcudHVyYm9Nb2RlT25seSA9PT0gdHJ1ZX0gXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVG9nZ2xlVHVyYm9Nb2RlT25seX0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcsIGZvbnRTdHlsZTogJ2l0YWxpYycsIG1hcmdpblRvcDogJzVweCcsIG9wYWNpdHk6ICcwLjMnIH19PlxyXG4gICAgICAgICAgICAgICAgICBBbHdheXMgZW5hYmxlcyB0aGUgdHVyYm8gY292ZXJhZ2UgbGF5ZXIgYW5kIGhpZGVzIHRoZSB0b2dnbGUuIERpc2FibGVzIE5vcm1hbCBNb2RlLCBhbGxvd2luZyBpbnRlcmFjdGlvbiBvbmx5IGJ5IGNsaWNraW5nIHZpc2libGUgY292ZXJhZ2UgcG9pbnRzLlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIHsvKkRlZmF1bHQgQ3JlYXRvciBGaWVsZCAqL31cclxuICAgICAgICAgICAgPFNldHRpbmdSb3cgZmxvdz1cIndyYXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzVweCcsIGZvbnRXZWlnaHQ6IDUwMCB9fT5cclxuICAgICAgICAgICAgICAgICAgRGVmYXVsdCBDcmVhdG9yIChUdXJibyBNb2RlIE9ubHkpXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCIgXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBtYXBpbGxhcnlfdXNlclwiIFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlnLnR1cmJvQ3JlYXRvciB8fCAnJ30gXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ3JlYXRvckNoYW5nZX0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuXHJcbiAgICAgICAgey8qVHVyYm8gQ292ZXJhZ2UgUHJlc2V0cyAqL31cclxuICAgICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9XCJUdXJibyBDb3ZlcmFnZSBQcmVzZXRzXCI+XHJcbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcsIGZvbnRTdHlsZTogJ2l0YWxpYycsIG9wYWNpdHk6ICcwLjQnIH19PlxyXG4gICAgICAgICAgICAgIFRoZXNlIHZhbHVlcyBwcmUtcG9wdWxhdGUgdGhlIFR1cmJvIE1vZGUgZmlsdGVyIHBhbmVsIHdoZW4gdGhlIHdpZGdldCBsb2Fkcy5cclxuICAgICAgICAgICAgICBVc2VycyBjYW4gc3RpbGwgb3ZlcnJpZGUgdGhlbSBhdCBydW50aW1lIHZpYSB0aGUgZmlsdGVyIGJ1dHRvbiAodW5sZXNzIGl0IGlzIGhpZGRlbikuXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuXHJcbiAgICAgICAgICB7LyogU3RhcnQgRGF0ZSAqL31cclxuICAgICAgICAgIDxTZXR0aW5nUm93IGZsb3c9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzVweCcsIGZvbnRXZWlnaHQ6IDUwMCB9fT5EZWZhdWx0IFN0YXJ0IERhdGU8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb25maWcudHVyYm9EZWZhdWx0U3RhcnREYXRlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UdXJib0RlZmF1bHRTdGFydERhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNHB4IDhweCcsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICNjY2MpJyxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3ZhcigtLWlucHV0LWJnLCAjZmZmKScsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0taW5wdXQtY29sb3IsICMzMzMpJyxcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7Y29uZmlnLnR1cmJvRGVmYXVsdFN0YXJ0RGF0ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBjb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ3R1cmJvRGVmYXVsdFN0YXJ0RGF0ZScsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25maWcgPSB0aGlzLmF1dG9TZXRUdXJib01vZGUoY29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHRoaXMucHJvcHMuaWQsIGNvbmZpZyB9KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICc0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTFweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tZGFuZ2VyLWNvbG9yLCAjYzAwKScsXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzAnXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIOKclSBDbGVhciBzdGFydCBkYXRlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuXHJcbiAgICAgICAgICB7LyogRW5kIERhdGUgKi99XHJcbiAgICAgICAgICA8U2V0dGluZ1JvdyBmbG93PVwid3JhcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc1cHgnLCBmb250V2VpZ2h0OiA1MDAgfX0+RGVmYXVsdCBFbmQgRGF0ZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbmZpZy50dXJib0RlZmF1bHRFbmREYXRlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UdXJib0RlZmF1bHRFbmREYXRlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzRweCA4cHgnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCAjY2NjKScsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd2YXIoLS1pbnB1dC1iZywgI2ZmZiknLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWlucHV0LWNvbG9yLCAjMzMzKScsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTNweCcsXHJcbiAgICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge2NvbmZpZy50dXJib0RlZmF1bHRFbmREYXRlICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbmZpZyA9IHRoaXMucHJvcHMuY29uZmlnLnNldCgndHVyYm9EZWZhdWx0RW5kRGF0ZScsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25maWcgPSB0aGlzLmF1dG9TZXRUdXJib01vZGUoY29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHRoaXMucHJvcHMuaWQsIGNvbmZpZyB9KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICc0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTFweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tZGFuZ2VyLWNvbG9yLCAjYzAwKScsXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzAnXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIOKclSBDbGVhciBlbmQgZGF0ZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcblxyXG4gICAgICAgICAgey8qIERhdGUgcmFuZ2UgdmFsaWRhdGlvbiBoaW50ICovfVxyXG4gICAgICAgICAge2NvbmZpZy50dXJib0RlZmF1bHRTdGFydERhdGUgJiYgY29uZmlnLnR1cmJvRGVmYXVsdEVuZERhdGUgJiZcclxuICAgICAgICAgICAgY29uZmlnLnR1cmJvRGVmYXVsdFN0YXJ0RGF0ZSA+IGNvbmZpZy50dXJib0RlZmF1bHRFbmREYXRlICYmIChcclxuICAgICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxMXB4JywgY29sb3I6ICd2YXIoLS1kYW5nZXItY29sb3IsICNjMDApJywgZm9udFdlaWdodDogNTAwIH19PlxyXG4gICAgICAgICAgICAgICAg4pqgIFN0YXJ0IGRhdGUgaXMgYWZ0ZXIgZW5kIGRhdGUgLSBubyBpbWFnZXMgd2lsbCBtYXRjaCB0aGlzIHJhbmdlLlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7LyogSXMgUGFubyBGaWx0ZXIgKi99XHJcbiAgICAgICAgICA8U2V0dGluZ1JvdyBmbG93PVwid3JhcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc1cHgnLCBmb250V2VpZ2h0OiA1MDAgfX0+RGVmYXVsdCBQYW5vcmFtYSBGaWx0ZXI8L2Rpdj5cclxuICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuaXNQYW5vU2VsZWN0VmFsdWUoKX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVHVyYm9EZWZhdWx0SXNQYW5vQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj5BbGwgaW1hZ2VzIChubyBmaWx0ZXIpPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwidHJ1ZVwiPlBhbm9yYW1hcyBvbmx5PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiZmFsc2VcIj5Ob24tcGFub3JhbWFzIG9ubHk8L09wdGlvbj5cclxuICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMTFweCcsIGZvbnRTdHlsZTogJ2l0YWxpYycsIG1hcmdpblRvcDogJzRweCcsIG9wYWNpdHk6ICcwLjQnIH19PlxyXG4gICAgICAgICAgICAgICAgUmVzdHJpY3RzIFR1cmJvIGNvdmVyYWdlIHRvIHBhbm9yYW1pYyBvciBmbGF0IGltYWdlcyBvbmx5LlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuXHJcbiAgICAgICAgICB7LyogQ29sb3IgYnkgRGF0ZSAqL31cclxuICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPVwiRGVmYXVsdCBDb2xvciBieSBDYXB0dXJlIFllYXJcIj5cclxuICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmZpZy50dXJib0RlZmF1bHRDb2xvckJ5RGF0ZSA9PT0gdHJ1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRvZ2dsZVR1cmJvRGVmYXVsdENvbG9yQnlEYXRlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRcIiBzdHlsZT17eyBmb250U2l6ZTogJzExcHgnLCBmb250U3R5bGU6ICdpdGFsaWMnLCBvcGFjaXR5OiAnMC40JyB9fT5cclxuICAgICAgICAgICAgICBXaGVuIGVuYWJsZWQsIFR1cmJvIGNvdmVyYWdlIHBvaW50cyBhcmUgY29sb3VyZWQgYnkgdGhlaXIgY2FwdHVyZSB5ZWFyIG9uIGZpcnN0IGxvYWQuXHJcbiAgICAgICAgICAgICAgVGhlIGxlZ2VuZCBpbiB0aGUgaW5mbyBib3ggd2lsbCByZWZsZWN0IHRoZSB5ZWFyIGJyZWFrZG93bi5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPVwiQXBwZWFyYW5jZSBTZXR0aW5nc1wiPiAgICBcclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCIgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JywgbWFyZ2luVG9wOiAnNXB4Jywgb3BhY2l0eTogJzAuMycsIGZvbnRTdHlsZTonaXRhbGljJyB9fT5cclxuICAgICAgICAgICAgICBUb2dnbGUgVUkgZWxlbWVudHMgYW5kIGFjdGlvbiB0b29scyB0byBzaW1wbGlmeSB0aGUgaW50ZXJmYWNlLlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcblxyXG4gICAgICAgICAgey8qIFVJIFRvZ2dsZXMgKi99XHJcbiAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIkhpZGUgTGVnZW5kXCI+XHJcbiAgICAgICAgICAgIDxTd2l0Y2ggXHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17Y29uZmlnLmhpZGVMZWdlbmQgPT09IHRydWV9IFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVG9nZ2xlSGlkZUxlZ2VuZH0gXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcblxyXG4gICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9XCJIaWRlIEluZm8gQm94XCI+XHJcbiAgICAgICAgICAgIDxTd2l0Y2ggXHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17Y29uZmlnLmhpZGVJbmZvQm94ID09PSB0cnVlfSBcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRvZ2dsZUhpZGVJbmZvQm94fSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuXHJcbiAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIkhpZGUgVHVyYm8gTW9kZSBGaWx0ZXIgQnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoIFxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtjb25maWcuaGlkZVR1cmJvRmlsdGVyID09PSB0cnVlfSBcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Ub2dnbGVIaWRlVHVyYm9GaWx0ZXJ9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuXHJcbiAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIkhpZGUgQW5hbHlzaXMsIFN0cmVldEdhcCAmIFF1YWxpdHkgVmlld1wiPlxyXG4gICAgICAgICAgICA8U3dpdGNoIFxyXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmZpZy5oaWRlQ292ZXJhZ2VBbmFseXNpcyA9PT0gdHJ1ZX0gXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Ub2dnbGVIaWRlQ292ZXJhZ2VBbmFseXNpc30gXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcblxyXG4gICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9XCJIaWRlIFBvaW50IENsb3VkICgzRCBvbmx5KVwiPlxyXG4gICAgICAgICAgICA8U3dpdGNoIFxyXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmZpZy5oaWRlUG9pbnRDbG91ZCA9PT0gdHJ1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRvZ2dsZUhpZGVQb2ludENsb3VkfSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuXHJcbiAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIkhpZGUgSW1hZ2UgRG93bmxvYWRcIj5cclxuICAgICAgICAgICAgPFN3aXRjaCBcclxuICAgICAgICAgICAgICBjaGVja2VkPXtjb25maWcuaGlkZUltYWdlRG93bmxvYWQgPT09IHRydWV9IFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVG9nZ2xlSGlkZUltYWdlRG93bmxvYWR9IFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG5cclxuICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPVwiSGlkZSBUaW1lIFRyYXZlbFwiPlxyXG4gICAgICAgICAgICA8U3dpdGNoIFxyXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmZpZy5oaWRlVGltZVRyYXZlbCA9PT0gdHJ1ZX0gXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Ub2dnbGVIaWRlVGltZVRyYXZlbH0gXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcblxyXG4gICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9XCJIaWRlIFNoYXJlIEJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8U3dpdGNoIFxyXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmZpZy5oaWRlU2hhcmVCdXR0b24gPT09IHRydWV9IFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVG9nZ2xlSGlkZVNoYXJlQnV0dG9ufSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPVwiSGlkZSBMb2NrIE1hcCBSb3RhdGlvbiBCdXR0b24gKDNEKVwiPlxyXG4gICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y29uZmlnLmhpZGVTeW5jSGVhZGluZ0J1dHRvbiA9PT0gdHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2dCA9PiB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdoaWRlU3luY0hlYWRpbmdCdXR0b24nLCBldnQudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcblxyXG4gICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9XCJIaWRlIENlbnRlciBNYXAgQnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtjb25maWcuaGlkZUNlbnRlck1hcEJ1dHRvbiA9PT0gdHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2dCA9PiB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdoaWRlQ2VudGVyTWFwQnV0dG9uJywgZXZ0LnRhcmdldC5jaGVja2VkKVxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT1cIkZlYXR1cmUgRGV0ZWN0aW9uIExheWVyc1wiPlxyXG4gICAgICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPVwiRW5hYmxlIFRyYWZmaWMgU2lnbnNcIj5cclxuICAgICAgICAgICAgICAgIDxTd2l0Y2ggXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmZpZy5lbmFibGVUcmFmZmljU2lnbnMgIT09IGZhbHNlfSBcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Ub2dnbGVUcmFmZmljU2lnbnN9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcblxyXG4gICAgICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPVwiRW5hYmxlIE1hcGlsbGFyeSBPYmplY3RzXCI+XHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoIFxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtjb25maWcuZW5hYmxlTWFwaWxsYXJ5T2JqZWN0cyAhPT0gZmFsc2V9IFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRvZ2dsZU9iamVjdHN9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcblxyXG4gICAgICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcsIGZvbnRTdHlsZTogJ2l0YWxpYycsIG1hcmdpblRvcDogJzVweCcsIG9wYWNpdHk6ICcwLjMnIH19PlxyXG4gICAgICAgICAgICAgICAgICBEaXNhYmxpbmcgdGhlc2Ugd2lsbCBoaWRlIHRoZSBzaWduIGFuZCBvYmplY3QgbGF5ZXIgdG9nZ2xlIGJ1dHRvbnMgaW4gdGhlIHdpZGdldCBpbnRlcmZhY2UuXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPVwiQWR2YW5jZWQgU2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9XCJSZW5kZXIgTW9kZVwiPlxyXG4gICAgICAgICAgICAgIDxTZWxlY3QgXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIiBcclxuICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrIHRvICcxJyAoRmlsbCkgaWYgcmVuZGVyTW9kZSBpcyB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtTdHJpbmcoY29uZmlnLnJlbmRlck1vZGUgPz8gMSl9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICAgICAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdyZW5kZXJNb2RlJywgcGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSwgMTApKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEzMHB4JyB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCIxXCI+RmlsbCAoRGVmYXVsdCk8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCIwXCI+TGV0dGVyYm94PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMTFweCcsIGZvbnRTdHlsZTogJ2l0YWxpYycsIG1hcmdpblRvcDogJy01cHgnLCBvcGFjaXR5OiAnMC4zJyB9fT5cclxuICAgICAgICAgICAgICAgIDxiPkZpbGw6PC9iPiBGaWxscyB0aGUgd2luZG93Ljxici8+XHJcbiAgICAgICAgICAgICAgICA8Yj5MZXR0ZXJib3g6PC9iPiBTaG93cyB0aGUgZnVsbCBvcmlnaW5hbCBpbWFnZSAobWF5IHNob3cgYmxhY2sgYmFycywgcmVjb21tZW5kZWQgZm9yIHdpZGUgd2lkZ2V0cykuXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcblxyXG4gICAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIlRyYW5zaXRpb24gTW9kZVwiPlxyXG4gICAgICAgICAgICAgIDxTZWxlY3QgXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIiBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtTdHJpbmcoY29uZmlnLnRyYW5zaXRpb25Nb2RlID8/IDApfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVHJhbnNpdGlvbk1vZGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEzMHB4JyB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCIwXCI+U21vb3RoIChEZWZhdWx0KTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjFcIj5JbnN0YW50YW5lb3VzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMTFweCcsIGZvbnRTdHlsZTogJ2l0YWxpYycsIG1hcmdpblRvcDogJy01cHgnLCBvcGFjaXR5OiAnMC4zJyB9fT5cclxuICAgICAgICAgICAgICAgIDxiPkRlZmF1bHQ6PC9iPiBVc2VzIG1vdGlvbiBibGVuZGluZyBiZXR3ZWVuIGZyYW1lcy48YnIvPlxyXG4gICAgICAgICAgICAgICAgPGI+SW5zdGFudGFuZW91czo8L2I+IEp1bXBzIGltbWVkaWF0ZWx5IHRvIHRoZSBuZXh0IGZyYW1lIChzbmFwcGllcikuXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93IGZsb3c9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiA1MDAsIG1hcmdpbkJvdHRvbTogJzVweCcgfX0+RGVmYXVsdCBDYW1lcmEgQW5nbGUgKE5vcm1hbGl6ZWQgMC0xKTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JyB9fT5Ib3Jpem9udGFsIChYKTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzgwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlnLmNhbWVyYVh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9IG1heD17MX0gc3RlcD17MC4wNX1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC41XCIgLy8gU2hvd3MgMC41IHdoZW4gZW1wdHlcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2FtZXJhWENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19PlZlcnRpY2FsIChZKTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzgwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlnLmNhbWVyYVl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9IG1heD17MX0gc3RlcD17MC4wNX1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC41XCIgLy8gU2hvd3MgMC41IHdoZW4gZW1wdHlcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2FtZXJhWUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIiBzdHlsZT17eyBmb250U2l6ZTogJzExcHgnLCBmb250U3R5bGU6ICdpdGFsaWMnLCBvcGFjaXR5OiAnMC4zJ319PlxyXG4gICAgICAgICAgICAgICAgICBTdGFuZGFyZCBpcyAwLjUgZm9yIGJvdGgocmVmZXJzIHRvIGNlbnRlcikuIDxici8+XHJcbiAgICAgICAgICAgICAgICAgIDxiPlg6PC9iPiAwID0gTGVmdCwgMSA9IFJpZ2h0LiA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICA8Yj5ZOjwvYj4gMCA9IFNreSwgMSA9IEdyb3VuZC4gKFRyeSAwLjU1IGZvciB3aWRlIHdpZGdldHMpXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIkRlYnVnIE1vZGVcIj5cclxuICAgICAgICAgICAgICAgIDxTd2l0Y2ggXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmZpZy5kZWJ1Z01vZGUgPT09IHRydWV9IFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRvZ2dsZURlYnVnTW9kZX0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcsIGZvbnRTdHlsZTogJ2l0YWxpYycsIG1hcmdpblRvcDogJzBweCcsIG9wYWNpdHk6ICcwLjMnfX0+XHJcbiAgICAgICAgICAgICAgICAgIEVuYWJsZXMgZGV2ZWxvcGVyIGxvZ2dpbmcgaW4gdGhlIGJyb3dzZXIgY29uc29sZSAoRjEyKS5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9