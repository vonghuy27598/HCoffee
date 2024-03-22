"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DraggableBottomSheetProvider_1 = require("./DraggableBottomSheetProvider");
var AppDraggableBottom_1 = require("./AppDraggableBottom");
var AppDraggaleBottomSheet = function (_a) {
    var showBottomSheet = _a.showBottomSheet, setShowBottomSheet = _a.setShowBottomSheet, HeaderBottomSheetComponent = _a.HeaderBottomSheetComponent, BodyBottomSheetComponent = _a.BodyBottomSheetComponent, FooterBottoomSheetComponent = _a.FooterBottoomSheetComponent, maxHeightBottomSheet = _a.maxHeightBottomSheet;
    return (react_1["default"].createElement(DraggableBottomSheetProvider_1.DraggableBottomSheetProvider, { value: {
            maxHeightBottomSheet: maxHeightBottomSheet,
            showBottomSheet: showBottomSheet,
            setShowBottomSheet: setShowBottomSheet
        } },
        react_1["default"].createElement(AppDraggableBottom_1["default"], { HeaderBottomSheetComponent: HeaderBottomSheetComponent, BodyBottomSheetComponent: BodyBottomSheetComponent, FooterBottoomSheetComponent: FooterBottoomSheetComponent, maxHeightBottomSheet: maxHeightBottomSheet })));
};
exports["default"] = AppDraggaleBottomSheet;
