"use strict";
(self["webpackChunkNoteHub"] = self["webpackChunkNoteHub"] || []).push([["src_app_main-workspaces_project-workspace_project-workspace_module_ts"],{

/***/ 9043:
/*!**************************************************************************************!*\
  !*** ./src/app/main-workspaces/project-workspace/pro-boards/pro-boards.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProBoardsComponent": () => (/* binding */ ProBoardsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_projectWorkspace_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/projectWorkspace.service */ 3751);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);






function ProBoardsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ProBoardsComponent_div_6_Template_input_input_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.filterBoardTable($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ProBoardsComponent_table_8_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Project Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProBoardsComponent_table_8_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r16.boardName, " ");
  }
}
function ProBoardsComponent_table_8_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Project Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProBoardsComponent_table_8_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r17.projectType, " ");
  }
}
function ProBoardsComponent_table_8_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Lead user ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProBoardsComponent_table_8_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r18.userId.userName, " ");
  }
}
function ProBoardsComponent_table_8_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Lead email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProBoardsComponent_table_8_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r19.userId.email, " ");
  }
}
function ProBoardsComponent_table_8_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 20);
  }
}
const _c0 = function (a1) {
  return ["/workspaces/project-workspace/boards/", a1];
};
function ProBoardsComponent_table_8_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 21);
  }
  if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, row_r20._id));
  }
}
function ProBoardsComponent_table_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProBoardsComponent_table_8_th_2_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProBoardsComponent_table_8_td_3_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProBoardsComponent_table_8_th_5_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProBoardsComponent_table_8_td_6_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProBoardsComponent_table_8_th_8_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProBoardsComponent_table_8_td_9_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProBoardsComponent_table_8_th_11_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProBoardsComponent_table_8_td_12_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProBoardsComponent_table_8_tr_13_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProBoardsComponent_table_8_tr_14_Template, 1, 3, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r1.BoardDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
  }
}
function ProBoardsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class ProBoardsComponent {
  constructor(_projectService) {
    this._projectService = _projectService;
    this.displayedColumns = ['name', 'type', 'userId', 'lead'];
    this.BoardDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource();
  }
  ngOnInit() {
    this.BoardDataSource.data = this._projectService.boardsDetails;
    this.boardDataSubscription = this._projectService.DetailsDataTransfer.subscribe(data => {
      this.BoardDataSource.data = data.boardDetails;
    });
  }
  // implements Search Functionality
  filterBoardTable(event) {
    const value = event.target.value;
    if (value.length > 0) {
      const data = this._projectService.SearchBoard(value);
      this._projectService.DetailsDataTransfer.emit({
        userDetails: this._projectService.userDetails,
        boardDetails: data
      });
    } else {
      this._projectService.DetailsDataTransfer.emit({
        userDetails: this._projectService.userDetails,
        boardDetails: this._projectService.boardsDetails
      });
    }
  }
  createProject() {
    this._projectService.CreateProjectDataTransfer.emit(true);
  }
  ngOnDestroy() {
    this.boardDataSubscription.unsubscribe();
  }
}
ProBoardsComponent.ɵfac = function ProBoardsComponent_Factory(t) {
  return new (t || ProBoardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_projectWorkspace_service__WEBPACK_IMPORTED_MODULE_0__.ProjectWorkspaceService));
};
ProBoardsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProBoardsComponent,
  selectors: [["app-pro-boards"]],
  decls: 11,
  vars: 3,
  consts: [[1, "boards-heading"], [1, "text-2xl", "md:text-4xl"], [1, "text-sm", "md:text-lg", "bg-primary", 3, "click"], ["class", "boards-search ", 4, "ngIf"], [1, "boards-table-container"], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf", "ngIfElse"], ["elseBoard", ""], [1, "boards-search"], ["type", "search", "placeholder", "Search", 1, "w-8/12", "sm:w-auto", 3, "input"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["class", "w-1/4 text-xs md:text-sm", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "w-1/4 text-xs md:text-sm", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "type"], ["matColumnDef", "userId"], ["matColumnDef", "lead"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "routerLink", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "w-1/4", "text-xs", "md:text-sm"], ["mat-cell", "", 1, "w-1/4", "text-xs", "md:text-sm"], ["mat-header-row", ""], ["mat-row", "", 3, "routerLink"], [1, "empty-page-container"], [1, "empty-page"], [1, "fa-regular", "fa-file"]],
  template: function ProBoardsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Boards");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProBoardsComponent_Template_button_click_4_listener() {
        return ctx.createProject();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Create");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProBoardsComponent_div_6_Template, 2, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProBoardsComponent_table_8_Template, 15, 3, "table", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProBoardsComponent_ng_template_9_Template, 5, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.BoardDataSource == null ? null : ctx.BoardDataSource.data.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.BoardDataSource == null ? null : ctx.BoardDataSource.data.length) > 0)("ngIfElse", _r2);
    }
  },
  dependencies: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  styles: [".boards-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 18px 20px;\n  font-size: 42px;\n  font-family: 'JosefinSans-Regular';\n}\n\n.boards-heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: white;\n  padding: 3px 8px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n\n.boards-search[_ngcontent-%COMP%] {\n  padding: 12px 10px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.boards-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: solid 2px #cbcbcb;\n  border-radius: 4px;\n  padding: 3px 6px;\n  font-size: 18px;\n  outline: none;\n  caret-color: #cbcbcb;\n}\n\n.boards-table-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 18px 10px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: white;\n  padding: 3px 8px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\ntr[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  line-break: anywhere;\n}\n\ntr[mat-row][_ngcontent-%COMP%]:hover {\n  background-color: rgb(235, 234, 234);\n  cursor: pointer;\n}\n\n\n.empty-page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 120px 0px;\n}\n\n.empty-page[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.empty-page[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: #6e6e6e;\n}\n\n.empty-page[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  font-family: 'JosefinSans-Bold';\n  font-size: 30px;\n  align-self: flex-end;\n  color: #6e6e6e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByby1ib2FyZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFJZixhQUFhO0VBQ2Isb0JBQW9CO0FBSnRCOztBQU9BO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGVBQWU7QUFDakI7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEIiLCJmaWxlIjoicHJvLWJvYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvYXJkcy1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMThweCAyMHB4O1xuICBmb250LXNpemU6IDQycHg7XG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpblNhbnMtUmVndWxhcic7XG59XG5cbi5ib2FyZHMtaGVhZGluZyBidXR0b24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qICBTZWFyY2ggYmFyICovXG4uYm9hcmRzLXNlYXJjaCB7XG4gIHBhZGRpbmc6IDEycHggMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm9hcmRzLXNlYXJjaCBpbnB1dCB7XG4gIGJvcmRlcjogc29saWQgMnB4ICNjYmNiY2I7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogM3B4IDZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYm9hcmRzLXNlYXJjaCBpbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNhcmV0LWNvbG9yOiAjY2JjYmNiO1xufVxuXG4uYm9hcmRzLXRhYmxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxOHB4IDEwcHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudHIgKiB7XG4gIGxpbmUtYnJlYWs6IGFueXdoZXJlO1xufVxuXG50clttYXQtcm93XTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNCwgMjM0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBlbXB0eSBwYWdlICovXG4uZW1wdHktcGFnZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTIwcHggMHB4O1xufVxuXG4uZW1wdHktcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG5cbi5lbXB0eS1wYWdlID4gaSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6ICM2ZTZlNmU7XG59XG5cbi5lbXB0eS1wYWdlID4gaDMge1xuICBmb250LWZhbWlseTogJ0pvc2VmaW5TYW5zLUJvbGQnO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBjb2xvcjogIzZlNmU2ZTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi13b3Jrc3BhY2VzL3Byb2plY3Qtd29ya3NwYWNlL3Byby1ib2FyZHMvcHJvLWJvYXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUlmLGFBQWE7RUFDYixvQkFBb0I7QUFKdEI7O0FBT0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7QUFEQSx3bUdBQXdtRyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2FyZHMtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE4cHggMjBweDtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBmb250LWZhbWlseTogJ0pvc2VmaW5TYW5zLVJlZ3VsYXInO1xufVxuXG4uYm9hcmRzLWhlYWRpbmcgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiAgU2VhcmNoIGJhciAqL1xuLmJvYXJkcy1zZWFyY2gge1xuICBwYWRkaW5nOiAxMnB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJvYXJkcy1zZWFyY2ggaW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDJweCAjY2JjYmNiO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDNweCA2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmJvYXJkcy1zZWFyY2ggaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBjYXJldC1jb2xvcjogI2NiY2JjYjtcbn1cblxuLmJvYXJkcy10YWJsZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMThweCAxMHB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZCBidXR0b24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRyICoge1xuICBsaW5lLWJyZWFrOiBhbnl3aGVyZTtcbn1cblxudHJbbWF0LXJvd106aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzQsIDIzNCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogZW1wdHkgcGFnZSAqL1xuLmVtcHR5LXBhZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEyMHB4IDBweDtcbn1cblxuLmVtcHR5LXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uZW1wdHktcGFnZSA+IGkge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGNvbG9yOiAjNmU2ZTZlO1xufVxuXG4uZW1wdHktcGFnZSA+IGgzIHtcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluU2Fucy1Cb2xkJztcbiAgZm9udC1zaXplOiAzMHB4O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgY29sb3I6ICM2ZTZlNmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8526:
/*!**************************************************************************************************!*\
  !*** ./src/app/main-workspaces/project-workspace/pro-contributors/pro-contributors.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProContributorsComponent": () => (/* binding */ ProContributorsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_projectWorkspace_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/projectWorkspace.service */ 3751);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






const _c0 = function (a0, a1) {
  return {
    "cursor-not-allowed": a0,
    "cursor-pointer": a1
  };
};
function ProContributorsComponent_section_0_i_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProContributorsComponent_section_0_i_5_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.addNewRole());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, !ctx_r3.accessAdmin, ctx_r3.accessAdmin));
  }
}
function ProContributorsComponent_section_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProContributorsComponent_section_0_div_6_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.addNewRole());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add role");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, !ctx_r4.accessAdmin, ctx_r4.accessAdmin));
  }
}
const _c1 = function (a0) {
  return {
    "background-color": a0
  };
};
function ProContributorsComponent_section_0_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProContributorsComponent_section_0_div_7_div_1_Template_div_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const element_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.removeRole(ctx_r15.boardDetails._id, element_r14.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, !ctx_r13.accessAdmin, ctx_r13.accessAdmin));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, element_r14.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r14.name);
  }
}
function ProContributorsComponent_section_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProContributorsComponent_section_0_div_7_div_1_Template, 6, 8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.boardDetails.roles);
  }
}
function ProContributorsComponent_section_0_i_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProContributorsComponent_section_0_i_12_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.addNewContributors(ctx_r17.boardDetails == null ? null : ctx_r17.boardDetails._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, !ctx_r6.accessAdmin, ctx_r6.accessAdmin));
  }
}
function ProContributorsComponent_section_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProContributorsComponent_section_0_div_13_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.addNewContributors(ctx_r19.boardDetails == null ? null : ctx_r19.boardDetails._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add Contributors");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, !ctx_r7.accessAdmin, ctx_r7.accessAdmin));
  }
}
function ProContributorsComponent_section_0_div_14_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProContributorsComponent_section_0_div_14_td_4_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", element_r31.userId.fullName, " ");
  }
}
function ProContributorsComponent_section_0_div_14_td_4_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProContributorsComponent_section_0_div_14_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProContributorsComponent_section_0_div_14_td_4_p_1_Template, 2, 1, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProContributorsComponent_section_0_div_14_td_4_p_2_Template, 2, 0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r31.userId.fullName !== ( false || null));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r31.userId.fullName === ( false || null));
  }
}
function ProContributorsComponent_section_0_div_14_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProContributorsComponent_section_0_div_14_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r35.userId.userName, " ");
  }
}
function ProContributorsComponent_section_0_div_14_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProContributorsComponent_section_0_div_14_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r36.role, " ");
  }
}
function ProContributorsComponent_section_0_div_14_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "th", 32);
  }
}
function ProContributorsComponent_section_0_div_14_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33)(1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProContributorsComponent_section_0_div_14_td_13_Template_i_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);
      const element_r37 = restoredCtx.$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r38.removeContributor(ctx_r38.boardDetails._id, element_r37.userId._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, !ctx_r28.accessAdmin, ctx_r28.accessAdmin));
  }
}
function ProContributorsComponent_section_0_div_14_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 36);
  }
}
function ProContributorsComponent_section_0_div_14_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 37);
  }
}
function ProContributorsComponent_section_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22)(1, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProContributorsComponent_section_0_div_14_th_3_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProContributorsComponent_section_0_div_14_td_4_Template, 3, 2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProContributorsComponent_section_0_div_14_th_6_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProContributorsComponent_section_0_div_14_td_7_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProContributorsComponent_section_0_div_14_th_9_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProContributorsComponent_section_0_div_14_td_10_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProContributorsComponent_section_0_div_14_th_12_Template, 1, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProContributorsComponent_section_0_div_14_td_13_Template, 2, 4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProContributorsComponent_section_0_div_14_tr_14_Template, 1, 0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProContributorsComponent_section_0_div_14_tr_15_Template, 1, 0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r8.ContributorsDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r8.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r8.displayedColumns);
  }
}
function ProContributorsComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section")(1, "div", 2)(2, "div", 3)(3, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProContributorsComponent_section_0_i_5_Template, 1, 4, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProContributorsComponent_section_0_div_6_Template, 3, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProContributorsComponent_section_0_div_7_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Contributors");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProContributorsComponent_section_0_i_12_Template, 1, 4, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProContributorsComponent_section_0_div_13_Template, 3, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProContributorsComponent_section_0_div_14_Template, 16, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.boardDetails == null ? null : ctx_r0.boardDetails.roles.length) > 0 && ctx_r0.accessAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.boardDetails == null ? null : ctx_r0.boardDetails.roles.length) === 0 && ctx_r0.accessAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.boardDetails == null ? null : ctx_r0.boardDetails.roles.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.boardDetails == null ? null : ctx_r0.boardDetails.roles.length) > 0 && ctx_r0.accessAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.boardDetails == null ? null : ctx_r0.boardDetails.contributors.length) === 0 && ctx_r0.accessAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.boardDetails == null ? null : ctx_r0.boardDetails.contributors.length) > 0);
  }
}
function ProContributorsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38)(1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Select a Board");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class ProContributorsComponent {
  constructor(_projectService, route) {
    this._projectService = _projectService;
    this.route = route;
    this.displayedColumns = ['name', 'userName', 'role', 'remove'];
    this.ContributorsDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource();
  }
  ngOnInit() {
    this._projectService.AccessAdminDataTransfer.subscribe(data => {
      this.accessAdmin = data;
    });
    this.route.params.subscribe(data => {
      // Access to admin
      this._projectService.isAccessProjectAdmin(data?.['id']).subscribe({
        next: response => {
          this.accessAdmin = response.data;
        }
      });
      this._projectService.GetBoardDetails(data?.['id']).subscribe({
        next: response => {
          this._projectService.board_Details = response.data.boardDetails;
          this._projectService.userDetails = response.data.userDetails;
          this.boardDetails = this._projectService.board_Details;
          this.ContributorsDataSource.data = this.boardDetails?.contributors;
        }
      });
      this._projectService.BoardDataTransfer.subscribe(data => {
        this.boardDetails = data;
        this.ContributorsDataSource.data = this.boardDetails?.contributors;
      });
    });
  }
  addNewRole() {
    if (this.accessAdmin) {
      this._projectService.CreateRoleDataTransfer.emit(true);
    }
  }
  addNewContributors(id) {
    if (this.accessAdmin) {
      this._projectService.CreateContributorsDataTransfer.emit(id);
    }
  }
  removeContributor(projectId, userId) {
    if (this.accessAdmin) {
      this._projectService.RemoveContributorsDataTransfer.emit({
        projectId: projectId,
        userId: userId
      });
    }
  }
  removeRole(projectId, roleName) {
    if (this.accessAdmin) {
      this._projectService.RemoveRolesDataTransfer.emit({
        projectId: projectId,
        roleName: roleName
      });
    }
  }
}
ProContributorsComponent.ɵfac = function ProContributorsComponent_Factory(t) {
  return new (t || ProContributorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_projectWorkspace_service__WEBPACK_IMPORTED_MODULE_0__.ProjectWorkspaceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
};
ProContributorsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProContributorsComponent,
  selectors: [["app-pro-contributors"]],
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["elseBoard_details", ""], [1, "contributors-roles-container"], [1, "contributors-roles-head"], [1, "text-3xl", "sm:text-4xl"], ["class", "fa-solid fa-circle-plus", 3, "ngClass", "click", 4, "ngIf"], ["class", "plus-icon", 3, "ngClass", "click", 4, "ngIf"], ["class", "contributors-roles", 4, "ngIf"], [1, "contributors-container"], [1, "contributors-head"], ["class", "plus-icon", 3, "ngClass", 4, "ngIf"], ["class", "contributors", 4, "ngIf"], [1, "fa-solid", "fa-circle-plus", 3, "ngClass", "click"], [1, "plus-icon", 3, "ngClass", "click"], [1, "contributors-roles"], ["class", "roles w-4/12 sm:w-2/12 ", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "roles", "w-4/12", "sm:w-2/12", 3, "ngClass"], [3, "ngStyle"], [1, "w-full", "h-full", 3, "click"], [1, "fa-solid", "fa-trash"], [1, "plus-icon", 3, "ngClass"], [3, "click"], [1, "contributors"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["class", "w-1/4 text-xs md:text-sm", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "w-1/4 text-xs md:text-sm", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "userName"], ["matColumnDef", "role"], ["matColumnDef", "remove"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "w-1/4", "text-xs", "md:text-sm"], ["mat-cell", "", 1, "w-1/4", "text-xs", "md:text-sm"], [4, "ngIf"], [1, "fa-solid", "fa-user-slash", 3, "ngClass", "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-page-container"], [1, "empty-page"], [1, "fa-regular", "fa-file"]],
  template: function ProContributorsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProContributorsComponent_section_0_Template, 15, 6, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProContributorsComponent_ng_template_1_Template, 5, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.boardDetails == null ? null : ctx.boardDetails._id)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle],
  styles: ["section[_ngcontent-%COMP%] {\n  padding: 40px 6px;\n}\n\n\n\n.contributors-roles-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.contributors-roles-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  column-gap: 20px;\n}\n\n.contributors-roles-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #6c6c6c;\n  transition: 0.3s;\n}\n\n.contributors-roles-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #222;\n}\n\n.contributors-roles[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 15px 0;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.plus-icon[_ngcontent-%COMP%] {\n  padding: 15px 0;\n}\n\n.plus-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #fff;\n  background-color: #0053a6;\n  padding: 4px 9px;\n  border-radius: 8px;\n  transition: 0.3s;\n}\n\n.plus-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #222;\n}\n\n.contributors-roles[_ngcontent-%COMP%]   .roles[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 7px;\n  border-radius: 7px;\n  padding: 7px 8px;\n  background-color: #e0e0e0;\n  -webkit-user-select: none;\n          user-select: none;\n  transition: 0.3s;\n  box-shadow: 1px 1.5px 1px rgb(23 43 77 / 20%);\n}\n\n.contributors-roles[_ngcontent-%COMP%]   .roles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  overflow: hidden;\n}\n\n.contributors-roles[_ngcontent-%COMP%]   .roles[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  border-radius: 10px;\n}\n\n.contributors-roles[_ngcontent-%COMP%]   .roles[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  background-color: #c5c5c5;\n  border-radius: 7px;\n}\n\n.contributors-roles[_ngcontent-%COMP%]   .roles[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n\n.contributors-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 40px 0;\n}\n\n.contributors-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  column-gap: 20px;\n}\n\n.contributors-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #6c6c6c;\n  transition: 0.3s;\n}\n\n.contributors-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #222;\n}\n\n.contributors[_ngcontent-%COMP%] {\n  padding: 15px 0;\n  width: 100%;\n}\n\n.plus-icon[_ngcontent-%COMP%] {\n  padding: 15px 0;\n}\n\n.plus-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 18px;\n  cursor: pointer;\n  color: #fff;\n  background-color: #0053a6;\n  padding: 4px 9px;\n  border-radius: 8px;\n  transition: 0.3s;\n}\n\n.plus-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #222;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: white;\n  padding: 3px 8px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\ntr[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  line-break: anywhere;\n}\n\ntr[mat-row][_ngcontent-%COMP%]:hover {\n  -webkit-user-select: none;\n          user-select: none;\n}\n\ntd[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n\n.empty-page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 90px 0px;\n}\n\n.empty-page[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.empty-page[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 44px;\n  color: #6e6e6e;\n  margin-top: -8px;\n}\n\n.empty-page[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  font-family: 'JosefinSans-Bold';\n  font-size: 30px;\n  align-self: flex-end;\n  color: #6e6e6e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByby1jb250cmlidXRvcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSx3QkFBd0I7O0FBRXhCO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLGVBQWU7QUFDZjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCIiwiZmlsZSI6InByby1jb250cmlidXRvcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICBwYWRkaW5nOiA0MHB4IDZweDtcbn1cblxuLyogLmNvbnRyaWJ1dG9ycyByb2xlcyAqL1xuXG4uY29udHJpYnV0b3JzLXJvbGVzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udHJpYnV0b3JzLXJvbGVzLWhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDIwcHg7XG59XG5cbi5jb250cmlidXRvcnMtcm9sZXMtaGVhZCBpIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzZjNmM2YztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmNvbnRyaWJ1dG9ycy1yb2xlcy1oZWFkIGk6aG92ZXIge1xuICBjb2xvcjogIzIyMjtcbn1cblxuLmNvbnRyaWJ1dG9ycy1yb2xlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAwO1xuICBnYXA6IDE2cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnBsdXMtaWNvbiB7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cblxuLnBsdXMtaWNvbiBidXR0b24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1M2E2O1xuICBwYWRkaW5nOiA0cHggOXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5wbHVzLWljb24gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbn1cblxuLmNvbnRyaWJ1dG9ycy1yb2xlcyAucm9sZXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogN3B4IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJveC1zaGFkb3c6IDFweCAxLjVweCAxcHggcmdiKDIzIDQzIDc3IC8gMjAlKTtcbn1cblxuLmNvbnRyaWJ1dG9ycy1yb2xlcyAucm9sZXMgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRyaWJ1dG9ycy1yb2xlcyAucm9sZXMgc3BhbiB7XG4gIHdpZHRoOiAxN3B4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jb250cmlidXRvcnMtcm9sZXMgLnJvbGVzIGRpdiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNWM1YzU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmNvbnRyaWJ1dG9ycy1yb2xlcyAucm9sZXM6aG92ZXIgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLyogYWRkIHVzZXIgYW5kIGxpc3QgdXNlcnMgKi9cbi5jb250cmlidXRvcnMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDQwcHggMDtcbn1cblxuLmNvbnRyaWJ1dG9ycy1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAyMHB4O1xufVxuXG4uY29udHJpYnV0b3JzLWhlYWQgaSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICM2YzZjNmM7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5jb250cmlidXRvcnMtaGVhZCBpOmhvdmVyIHtcbiAgY29sb3I6ICMyMjI7XG59XG5cbi5jb250cmlidXRvcnMge1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGx1cy1pY29uIHtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuXG4ucGx1cy1pY29uIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTNhNjtcbiAgcGFkZGluZzogNHB4IDlweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4ucGx1cy1pY29uIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50ciAqIHtcbiAgbGluZS1icmVhazogYW55d2hlcmU7XG59XG5cbnRyW21hdC1yb3ddOmhvdmVyIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbnRkIGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi8qIGVtcHR5IHBhZ2UgKi9cbi5lbXB0eS1wYWdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA5MHB4IDBweDtcbn1cblxuLmVtcHR5LXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uZW1wdHktcGFnZSA+IGkge1xuICBmb250LXNpemU6IDQ0cHg7XG4gIGNvbG9yOiAjNmU2ZTZlO1xuICBtYXJnaW4tdG9wOiAtOHB4O1xufVxuXG4uZW1wdHktcGFnZSA+IGgzIHtcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluU2Fucy1Cb2xkJztcbiAgZm9udC1zaXplOiAzMHB4O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgY29sb3I6ICM2ZTZlNmU7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi13b3Jrc3BhY2VzL3Byb2plY3Qtd29ya3NwYWNlL3Byby1jb250cmlidXRvcnMvcHJvLWNvbnRyaWJ1dG9ycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLHdCQUF3Qjs7QUFFeEI7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7O0FBSUEsb29NQUFvb00iLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgcGFkZGluZzogNDBweCA2cHg7XG59XG5cbi8qIC5jb250cmlidXRvcnMgcm9sZXMgKi9cblxuLmNvbnRyaWJ1dG9ycy1yb2xlcy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRyaWJ1dG9ycy1yb2xlcy1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAyMHB4O1xufVxuXG4uY29udHJpYnV0b3JzLXJvbGVzLWhlYWQgaSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICM2YzZjNmM7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5jb250cmlidXRvcnMtcm9sZXMtaGVhZCBpOmhvdmVyIHtcbiAgY29sb3I6ICMyMjI7XG59XG5cbi5jb250cmlidXRvcnMtcm9sZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgZ2FwOiAxNnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wbHVzLWljb24ge1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG5cbi5wbHVzLWljb24gYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTNhNjtcbiAgcGFkZGluZzogNHB4IDlweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4ucGx1cy1pY29uIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG59XG5cbi5jb250cmlidXRvcnMtcm9sZXMgLnJvbGVzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogN3B4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IDdweCA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBib3gtc2hhZG93OiAxcHggMS41cHggMXB4IHJnYigyMyA0MyA3NyAvIDIwJSk7XG59XG5cbi5jb250cmlidXRvcnMtcm9sZXMgLnJvbGVzIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250cmlidXRvcnMtcm9sZXMgLnJvbGVzIHNwYW4ge1xuICB3aWR0aDogMTdweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY29udHJpYnV0b3JzLXJvbGVzIC5yb2xlcyBkaXYge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjNWM1O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5jb250cmlidXRvcnMtcm9sZXMgLnJvbGVzOmhvdmVyIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi8qIGFkZCB1c2VyIGFuZCBsaXN0IHVzZXJzICovXG4uY29udHJpYnV0b3JzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA0MHB4IDA7XG59XG5cbi5jb250cmlidXRvcnMtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMjBweDtcbn1cblxuLmNvbnRyaWJ1dG9ycy1oZWFkIGkge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjNmM2YzZjO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uY29udHJpYnV0b3JzLWhlYWQgaTpob3ZlciB7XG4gIGNvbG9yOiAjMjIyO1xufVxuXG4uY29udHJpYnV0b3JzIHtcbiAgcGFkZGluZzogMTVweCAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBsdXMtaWNvbiB7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cblxuLnBsdXMtaWNvbiBidXR0b24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUzYTY7XG4gIHBhZGRpbmc6IDRweCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLnBsdXMtaWNvbiBidXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudHIgKiB7XG4gIGxpbmUtYnJlYWs6IGFueXdoZXJlO1xufVxuXG50clttYXQtcm93XTpob3ZlciB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG50ZCBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4vKiBlbXB0eSBwYWdlICovXG4uZW1wdHktcGFnZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOTBweCAwcHg7XG59XG5cbi5lbXB0eS1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cblxuLmVtcHR5LXBhZ2UgPiBpIHtcbiAgZm9udC1zaXplOiA0NHB4O1xuICBjb2xvcjogIzZlNmU2ZTtcbiAgbWFyZ2luLXRvcDogLThweDtcbn1cblxuLmVtcHR5LXBhZ2UgPiBoMyB7XG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpblNhbnMtQm9sZCc7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGNvbG9yOiAjNmU2ZTZlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3309:
/*!********************************************************************************************!*\
  !*** ./src/app/main-workspaces/project-workspace/pro-workspace/pro-workspace.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProWorkspaceComponent": () => (/* binding */ ProWorkspaceComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_service_projectWorkspace_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/projectWorkspace.service */ 3751);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_pipe_last_edit_date_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pipe/last-edit-date.pipe */ 7683);









const _c0 = function (a0, a1) {
  return {
    "cursor-not-allowed": a0,
    "cursor-pointer": a1
  };
};
function ProWorkspaceComponent_section_0_i_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProWorkspaceComponent_section_0_i_4_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.removeProject(ctx_r8.boardDetails._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](1, _c0, !ctx_r3.accessAdmin, ctx_r3.accessAdmin));
  }
}
const _c1 = function () {
  return {
    color: "#007419"
  };
};
function ProWorkspaceComponent_section_0_div_12_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
  }
}
const _c2 = function () {
  return {
    color: "rgb(217 79 79)"
  };
};
function ProWorkspaceComponent_section_0_div_12_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c2));
  }
}
function ProWorkspaceComponent_section_0_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "button", 20)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", null, 21)(6, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProWorkspaceComponent_section_0_div_12_div_9_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.removeTask(item_r10._id, "todo", ctx_r15.boardDetails._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r14);
  }
}
const _c3 = function (a0) {
  return {
    "cursor-no-drop": a0
  };
};
function ProWorkspaceComponent_section_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProWorkspaceComponent_section_0_div_12_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.showTaskList(ctx_r18.boardDetails._id, item_r10, "todo"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProWorkspaceComponent_section_0_div_12_mat_icon_2_Template, 2, 2, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProWorkspaceComponent_section_0_div_12_mat_icon_3_Template, 2, 2, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "lastEditDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ProWorkspaceComponent_section_0_div_12_div_9_Template, 9, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c3, !(ctx_r4.taskAccesData == null ? null : ctx_r4.taskAccesData.includes(item_r10._id)) && !ctx_r4.accessAdmin));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r4.taskAccesData == null ? null : ctx_r4.taskAccesData.includes(item_r10._id)) || ctx_r4.accessAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r4.taskAccesData == null ? null : ctx_r4.taskAccesData.includes(item_r10._id)) && !ctx_r4.accessAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r10.taskName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 6, item_r10.updateTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.accessAdmin);
  }
}
const _c4 = function (a0) {
  return {
    "cursor-not-allowed": a0
  };
};
function ProWorkspaceComponent_section_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProWorkspaceComponent_section_0_div_13_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.addNewTask(ctx_r20.boardDetails._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Create task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c4, !ctx_r5.accessAdmin));
  }
}
function ProWorkspaceComponent_section_0_div_19_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
  }
}
function ProWorkspaceComponent_section_0_div_19_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c2));
  }
}
function ProWorkspaceComponent_section_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProWorkspaceComponent_section_0_div_19_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const item_r22 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.showTaskList(ctx_r26.boardDetails._id, item_r22, "progress"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProWorkspaceComponent_section_0_div_19_mat_icon_2_Template, 2, 2, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProWorkspaceComponent_section_0_div_19_mat_icon_3_Template, 2, 2, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "lastEditDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 19)(10, "button", 20)(11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-menu", null, 21)(15, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProWorkspaceComponent_section_0_div_19_Template_button_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const item_r22 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.removeTask(item_r22._id, "progress", ctx_r28.boardDetails._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r22 = ctx.$implicit;
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c3, !(ctx_r6.taskAccesData == null ? null : ctx_r6.taskAccesData.includes(item_r22._id)) && !ctx_r6.accessAdmin));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r6.taskAccesData == null ? null : ctx_r6.taskAccesData.includes(item_r22._id)) || ctx_r6.accessAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r6.taskAccesData == null ? null : ctx_r6.taskAccesData.includes(item_r22._id)) && !ctx_r6.accessAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r22.taskName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 6, item_r22.updateTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r25);
  }
}
function ProWorkspaceComponent_section_0_div_25_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
  }
}
function ProWorkspaceComponent_section_0_div_25_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c2));
  }
}
function ProWorkspaceComponent_section_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProWorkspaceComponent_section_0_div_25_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      const item_r29 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r33.showTaskList(ctx_r33.boardDetails._id, item_r29, "completed"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProWorkspaceComponent_section_0_div_25_mat_icon_2_Template, 2, 2, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProWorkspaceComponent_section_0_div_25_mat_icon_3_Template, 2, 2, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "lastEditDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 19)(10, "button", 20)(11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-menu", null, 21)(15, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProWorkspaceComponent_section_0_div_25_Template_button_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      const item_r29 = restoredCtx.$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r35.removeTask(item_r29._id, "completed", ctx_r35.boardDetails._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c3, !(ctx_r7.taskAccesData == null ? null : ctx_r7.taskAccesData.includes(item_r29._id)) && !ctx_r7.accessAdmin));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r7.taskAccesData == null ? null : ctx_r7.taskAccesData.includes(item_r29._id)) || ctx_r7.accessAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r7.taskAccesData == null ? null : ctx_r7.taskAccesData.includes(item_r29._id)) && !ctx_r7.accessAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r29.taskName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 6, item_r29.updateTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r32);
  }
}
function ProWorkspaceComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section")(1, "div", 2)(2, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProWorkspaceComponent_section_0_i_4_Template, 1, 4, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "TO DO TASK");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function ProWorkspaceComponent_section_0_Template_div_cdkDropListDropped_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r36.drop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ProWorkspaceComponent_section_0_div_12_Template, 10, 10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ProWorkspaceComponent_section_0_div_13_Template, 4, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7)(15, "div", 8)(16, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "IN PROGRESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function ProWorkspaceComponent_section_0_Template_div_cdkDropListDropped_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r38.drop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ProWorkspaceComponent_section_0_div_19_Template, 18, 10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 7)(21, "div", 8)(22, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "DONE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function ProWorkspaceComponent_section_0_Template_div_cdkDropListDropped_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r39.drop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ProWorkspaceComponent_section_0_div_25_Template, 18, 10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Projects / ", ctx_r0.boardDetails == null ? null : ctx_r0.boardDetails.boardName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.accessAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDropListData", ctx_r0.boardDetails == null ? null : ctx_r0.boardDetails.tasks.todo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.boardDetails == null ? null : ctx_r0.boardDetails.tasks.todo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.accessAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDropListData", ctx_r0.boardDetails == null ? null : ctx_r0.boardDetails.tasks.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.boardDetails == null ? null : ctx_r0.boardDetails.tasks.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDropListData", ctx_r0.boardDetails == null ? null : ctx_r0.boardDetails.tasks.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.boardDetails == null ? null : ctx_r0.boardDetails.tasks.completed);
  }
}
function ProWorkspaceComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Select a Board");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class ProWorkspaceComponent {
  constructor(route, _projectService, router) {
    this.route = route;
    this._projectService = _projectService;
    this.router = router;
  }
  ngOnInit() {
    this._projectService.AccessAdminDataTransfer.subscribe(data => {
      this.accessAdmin = data;
    });
    this._projectService.AccessContributorDataTransfer.subscribe(data => {
      this.taskAccesData = data;
    });
    this.route.params.subscribe(data => {
      // Access to admin
      this._projectService.isAccessProjectAdmin(data?.['id']).subscribe({
        next: response => {
          this.accessAdmin = response.data;
        }
      });
      // Access contributor to task
      this._projectService.isAccessProjectContributorsTask(data?.['id']).subscribe({
        next: response => {
          this.taskAccesData = response.data;
        }
      });
      this._projectService.GetBoardDetails(data?.['id']).subscribe({
        next: response => {
          this._projectService.board_Details = response.data.boardDetails;
          this._projectService.userDetails = response.data.userDetails;
          this.boardDetails = this._projectService.board_Details;
        }
      });
    });
    this._projectService.BoardDataTransfer.subscribe(data => {
      this.boardDetails = data;
    });
  }
  drop(event) {
    const id = event.previousContainer.data[event.previousIndex]._id;
    if (this.accessAdmin || this.taskAccesData.includes(id)) {
      if (event.previousContainer === event.container) {
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.moveItemInArray)(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.transferArrayItem)(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      }
      let editedTaskId;
      let editedListName;
      if (event.container.id === 'cdk-drop-list-0') {
        editedTaskId = this.boardDetails.tasks.todo[event.currentIndex]._id;
        editedListName = 'todo';
      } else if (event.container.id === 'cdk-drop-list-1') {
        editedTaskId = this.boardDetails.tasks.progress[event.currentIndex]._id;
        editedListName = 'progress';
      } else if (event.container.id === 'cdk-drop-list-2') {
        editedTaskId = this.boardDetails.tasks.completed[event.currentIndex]._id;
        editedListName = 'completed';
      }
      this._projectService.UpdateProjectTask(this.boardDetails.tasks, this.boardDetails._id, editedTaskId, editedListName).subscribe({
        next: response => {
          this._projectService.board_Details = response.data;
          this._projectService.BoardDataTransfer.emit(this._projectService.board_Details);
        }
      });
    }
  }
  addNewTask(id) {
    this._projectService.CreateTaskDataTransfer.emit(id);
  }
  showTaskList(projectId, taskDetails, taskList) {
    this._projectService.WorkspaceDataTransfer.emit({
      projectId: projectId,
      taskDetails: taskDetails,
      taskList: taskList
    });
  }
  removeTask(taskId, taskListName, projectId) {
    this._projectService.RemoveTaskDataTransfer.emit({
      taskId: taskId,
      taskListName: taskListName,
      projectId: projectId
    });
  }
  removeProject(projectId) {
    this._projectService.RemoveProjectDataTransfer.emit(projectId);
  }
  ngOnDestroy() {}
}
ProWorkspaceComponent.ɵfac = function ProWorkspaceComponent_Factory(t) {
  return new (t || ProWorkspaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_projectWorkspace_service__WEBPACK_IMPORTED_MODULE_0__.ProjectWorkspaceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
ProWorkspaceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProWorkspaceComponent,
  selectors: [["app-pro-workspace"]],
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["elseBoard_details", ""], [1, "boards-title"], [1, "text-lg", "md:text-xl"], ["class", "fa-solid fa-trash", 3, "ngClass", "click", 4, "ngIf"], [1, "board-workspace-container", "py-12"], ["cdkDropListGroup", "", 1, "overflow-x-auto", "flex", "px-2", "pb-3", "w-full", "gap-2"], [1, "board-workspace-drag-container", "flex", "md:block", "justify-center", "w-full", "md:w-1/3", "mt-4", "px-0", "py-3", "md:p-3"], [1, "w-10/12", "md:w-auto"], [1, "board-workspace-drag-heading"], ["cdkDropList", "", 1, "board-workspace-drag-list", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "board-workspace-drag-box", "cdkDrag", "", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "board-workspace-drag-new", 3, "ngClass", "click", 4, "ngIf"], [1, "fa-solid", "fa-trash", 3, "ngClass", "click"], ["cdkDrag", "", 1, "board-workspace-drag-box", 3, "ngClass"], [1, "py-2", 3, "click"], [3, "ngStyle", 4, "ngIf"], ["class", "board-workspace-drag-box-more", 4, "ngIf"], [3, "ngStyle"], [1, "board-workspace-drag-box-more"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "text-sm"], [1, "board-workspace-drag-new", 3, "ngClass", "click"], [1, "fa-solid", "fa-plus"], [1, "empty-page-container"], [1, "empty-page"], [1, "fa-regular", "fa-file"]],
  template: function ProWorkspaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProWorkspaceComponent_section_0_Template, 26, 9, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProWorkspaceComponent_ng_template_1_Template, 5, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.boardDetails == null ? null : ctx.boardDetails._id)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDropListGroup, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDrag, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, src_app_pipe_last_edit_date_pipe__WEBPACK_IMPORTED_MODULE_1__.LastEditDatePipe],
  styles: ["section[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n}\n\n\n.empty-page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 90px 0px;\n}\n\n.empty-page[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.empty-page[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 44px;\n  color: #6e6e6e;\n  margin-top: -8px;\n}\n\n.empty-page[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  font-family: 'JosefinSans-Bold';\n  font-size: 30px;\n  align-self: flex-end;\n  color: #6e6e6e;\n}\n\n\n.boards-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  font-family: 'JosefinSans-Regular';\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.boards-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #222;\n  padding: 4px 5px;\n  border-radius: 6px;\n}\n\n.boards-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  background-color: #dbdbdb;\n}\n\n.boards-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: 'Jaldi-Regular';\n  font-style: italic;\n  color: #444;\n  cursor: default;\n}\n\n\n\n.board-filter-sort-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 0;\n}\n\n.board-filter-sort-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n}\n\n.board-filter-sort-button[_ngcontent-%COMP%] {\n  background-color: #e0e7ff;\n  color: #655dd5;\n  padding: 2px 9px;\n  border-radius: 6px;\n}\n\n\n.board-workspace-container[_ngcontent-%COMP%] {\n  width: 100%;\n  -webkit-user-select: none;\n          user-select: none;\n  padding-bottom: 50px;\n}\n\n.board-workspace-drag-container[_ngcontent-%COMP%] {\n  background-color: #eff1f4;\n  border-radius: 6px;\n  min-width: 240px;\n}\n\n.board-workspace-drag-heading[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #727272;\n  padding: 6px 10px;\n  overflow: hidden;\n}\n\n.board-workspace-drag-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  min-height: 60px;\n  cursor: pointer;\n}\n\n.board-workspace-drag-box[_ngcontent-%COMP%] {\n  min-height: 60px;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 1px 1.5px 1px rgba(23, 43, 77, 0.2);\n  padding: 6px 6px;\n  position: relative;\n}\n\n.board-workspace-drag-box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.board-workspace-drag-box[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  color: #007419;\n  font-size: 20px;\n  width: 100%;\n  height: 100%;\n}\n\n.board-workspace-drag-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 4px 0;\n  color: #9d9d9d;\n}\n\n.board-workspace-drag-box[_ngcontent-%COMP%]:hover   .board-workspace-drag-box-more[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.board-workspace-drag-box-more[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 6px;\n  right: 2px;\n}\n\n.board-workspace-drag-box-more[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n\n.board-workspace-drag-new[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 16px 9px;\n  border-radius: 2px;\n  font-size: 17px;\n  font-weight: 600;\n  color: #727272;\n  overflow: hidden;\n  margin-top: 4px;\n}\n\n.board-workspace-drag-new[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByby13b3Jrc3BhY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLHlCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBLDBCQUEwQjs7QUFFMUI7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLFdBQVc7RUFDWCx5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsK0NBQStDO0VBQy9DLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCOzBFQUN3RTtBQUMxRTs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNEQUFzRDtBQUN4RCIsImZpbGUiOiJwcm8td29ya3NwYWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgcGFkZGluZzogMThweCAyMHB4O1xufVxuXG4vKiBlbXB0eSBwYWdlICovXG4uZW1wdHktcGFnZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOTBweCAwcHg7XG59XG5cbi5lbXB0eS1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cblxuLmVtcHR5LXBhZ2UgPiBpIHtcbiAgZm9udC1zaXplOiA0NHB4O1xuICBjb2xvcjogIzZlNmU2ZTtcbiAgbWFyZ2luLXRvcDogLThweDtcbn1cblxuLmVtcHR5LXBhZ2UgPiBoMyB7XG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpblNhbnMtQm9sZCc7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGNvbG9yOiAjNmU2ZTZlO1xufVxuXG4vKiB0aXRsZSAqL1xuLmJvYXJkcy10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpblNhbnMtUmVndWxhcic7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYm9hcmRzLXRpdGxlIGkge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjMjIyO1xuICBwYWRkaW5nOiA0cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5ib2FyZHMtdGl0bGUgaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XG59XG5cbi5ib2FyZHMtdGl0bGUgcCB7XG4gIGZvbnQtZmFtaWx5OiAnSmFsZGktUmVndWxhcic7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICM0NDQ7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLyogYm9hcmQtZmlsdGVyLXNvcnQtYmFyICovXG5cbi5ib2FyZC1maWx0ZXItc29ydC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAwO1xufVxuXG4uYm9hcmQtZmlsdGVyLXNvcnQtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib2FyZC1maWx0ZXItc29ydC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlN2ZmO1xuICBjb2xvcjogIzY1NWRkNTtcbiAgcGFkZGluZzogMnB4IDlweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4vKiBib2FyZGVyIFdvcmtzcGFjZSAqL1xuLmJvYXJkLXdvcmtzcGFjZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4uYm9hcmQtd29ya3NwYWNlLWRyYWctY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjFmNDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtaW4td2lkdGg6IDI0MHB4O1xufVxuXG4uYm9hcmQtd29ya3NwYWNlLWRyYWctaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM3MjcyNzI7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm9hcmQtd29ya3NwYWNlLWRyYWctbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ib2FyZC13b3Jrc3BhY2UtZHJhZy1ib3gge1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxLjVweCAxcHggcmdiYSgyMywgNDMsIDc3LCAwLjIpO1xuICBwYWRkaW5nOiA2cHggNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib2FyZC13b3Jrc3BhY2UtZHJhZy1ib3ggaDUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ib2FyZC13b3Jrc3BhY2UtZHJhZy1ib3ggPiBkaXYgPiBtYXQtaWNvbiB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGNvbG9yOiAjMDA3NDE5O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ib2FyZC13b3Jrc3BhY2UtZHJhZy1ib3ggcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogNHB4IDA7XG4gIGNvbG9yOiAjOWQ5ZDlkO1xufVxuXG4uYm9hcmQtd29ya3NwYWNlLWRyYWctYm94OmhvdmVyIC5ib2FyZC13b3Jrc3BhY2UtZHJhZy1ib3gtbW9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYm9hcmQtd29ya3NwYWNlLWRyYWctYm94LW1vcmUge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNnB4O1xuICByaWdodDogMnB4O1xufVxuXG4uYm9hcmQtd29ya3NwYWNlLWRyYWctYm94LW1vcmUgbWF0LWljb24ge1xuICBmb250LXNpemU6IDE5cHg7XG59XG5cbi5ib2FyZC13b3Jrc3BhY2UtZHJhZy1uZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDZweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4IDlweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNzI3MjcyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5ib2FyZC13b3Jrc3BhY2UtZHJhZy1uZXc6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi13b3Jrc3BhY2VzL3Byb2plY3Qtd29ya3NwYWNlL3Byby13b3Jrc3BhY2UvcHJvLXdvcmtzcGFjZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLGVBQWU7QUFDZjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBLFVBQVU7QUFDVjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMseUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUEsMEJBQTBCOztBQUUxQjtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsV0FBVztFQUNYLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiwrQ0FBK0M7RUFDL0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEI7MEVBQ3dFO0FBQzFFOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usc0RBQXNEO0FBQ3hEOztBQUlBLG84TUFBbzhNIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIHBhZGRpbmc6IDE4cHggMjBweDtcbn1cblxuLyogZW1wdHkgcGFnZSAqL1xuLmVtcHR5LXBhZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDkwcHggMHB4O1xufVxuXG4uZW1wdHktcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG5cbi5lbXB0eS1wYWdlID4gaSB7XG4gIGZvbnQtc2l6ZTogNDRweDtcbiAgY29sb3I6ICM2ZTZlNmU7XG4gIG1hcmdpbi10b3A6IC04cHg7XG59XG5cbi5lbXB0eS1wYWdlID4gaDMge1xuICBmb250LWZhbWlseTogJ0pvc2VmaW5TYW5zLUJvbGQnO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBjb2xvcjogIzZlNmU2ZTtcbn1cblxuLyogdGl0bGUgKi9cbi5ib2FyZHMtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogJ0pvc2VmaW5TYW5zLVJlZ3VsYXInO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmJvYXJkcy10aXRsZSBpIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogIzIyMjtcbiAgcGFkZGluZzogNHB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uYm9hcmRzLXRpdGxlIGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xufVxuXG4uYm9hcmRzLXRpdGxlIHAge1xuICBmb250LWZhbWlseTogJ0phbGRpLVJlZ3VsYXInO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjNDQ0O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qIGJvYXJkLWZpbHRlci1zb3J0LWJhciAqL1xuXG4uYm9hcmQtZmlsdGVyLXNvcnQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMDtcbn1cblxuLmJvYXJkLWZpbHRlci1zb3J0LWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm9hcmQtZmlsdGVyLXNvcnQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTdmZjtcbiAgY29sb3I6ICM2NTVkZDU7XG4gIHBhZGRpbmc6IDJweCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLyogYm9hcmRlciBXb3Jrc3BhY2UgKi9cbi5ib2FyZC13b3Jrc3BhY2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLmJvYXJkLXdvcmtzcGFjZS1kcmFnLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmYxZjQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWluLXdpZHRoOiAyNDBweDtcbn1cblxuLmJvYXJkLXdvcmtzcGFjZS1kcmFnLWhlYWRpbmcge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNzI3MjcyO1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJvYXJkLXdvcmtzcGFjZS1kcmFnLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVweDtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYm9hcmQtd29ya3NwYWNlLWRyYWctYm94IHtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAxcHggMS41cHggMXB4IHJnYmEoMjMsIDQzLCA3NywgMC4yKTtcbiAgcGFkZGluZzogNnB4IDZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm9hcmQtd29ya3NwYWNlLWRyYWctYm94IGg1IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYm9hcmQtd29ya3NwYWNlLWRyYWctYm94ID4gZGl2ID4gbWF0LWljb24ge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBjb2xvcjogIzAwNzQxOTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYm9hcmQtd29ya3NwYWNlLWRyYWctYm94IHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDRweCAwO1xuICBjb2xvcjogIzlkOWQ5ZDtcbn1cblxuLmJvYXJkLXdvcmtzcGFjZS1kcmFnLWJveDpob3ZlciAuYm9hcmQtd29ya3NwYWNlLWRyYWctYm94LW1vcmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmJvYXJkLXdvcmtzcGFjZS1kcmFnLWJveC1tb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDZweDtcbiAgcmlnaHQ6IDJweDtcbn1cblxuLmJvYXJkLXdvcmtzcGFjZS1kcmFnLWJveC1tb3JlIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuXG4uYm9hcmQtd29ya3NwYWNlLWRyYWctbmV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA2cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzcyNzI3MjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uYm9hcmQtd29ya3NwYWNlLWRyYWctbmV3OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7997:
/*!*******************************************************************************!*\
  !*** ./src/app/main-workspaces/project-workspace/project-workspace.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectWorkspaceModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.module */ 1075);
/* harmony import */ var _project_workspace_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-workspace.routing */ 8205);
/* harmony import */ var _pro_boards_pro_boards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pro-boards/pro-boards.component */ 9043);
/* harmony import */ var _pro_workspace_pro_workspace_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pro-workspace/pro-workspace.component */ 3309);
/* harmony import */ var _pro_contributors_pro_contributors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pro-contributors/pro-contributors.component */ 8526);
/* harmony import */ var src_app_pipe_last_edit_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipe/last-edit-date.pipe */ 7683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);








class ProjectWorkspaceModule {}
ProjectWorkspaceModule.ɵfac = function ProjectWorkspaceModule_Factory(t) {
  return new (t || ProjectWorkspaceModule)();
};
ProjectWorkspaceModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: ProjectWorkspaceModule
});
ProjectWorkspaceModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [src_app_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _project_workspace_routing__WEBPACK_IMPORTED_MODULE_1__.ProjectWorkspaceRouting, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProjectWorkspaceModule, {
    declarations: [_pro_boards_pro_boards_component__WEBPACK_IMPORTED_MODULE_2__.ProBoardsComponent, _pro_workspace_pro_workspace_component__WEBPACK_IMPORTED_MODULE_3__.ProWorkspaceComponent, _pro_contributors_pro_contributors_component__WEBPACK_IMPORTED_MODULE_4__.ProContributorsComponent, src_app_pipe_last_edit_date_pipe__WEBPACK_IMPORTED_MODULE_5__.LastEditDatePipe],
    imports: [src_app_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _project_workspace_routing__WEBPACK_IMPORTED_MODULE_1__.ProjectWorkspaceRouting],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 8205:
/*!********************************************************************************!*\
  !*** ./src/app/main-workspaces/project-workspace/project-workspace.routing.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectWorkspaceRouting": () => (/* binding */ ProjectWorkspaceRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_guards_userAccessProject_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/userAccessProject.guard */ 8702);
/* harmony import */ var _pro_boards_pro_boards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pro-boards/pro-boards.component */ 9043);
/* harmony import */ var _pro_contributors_pro_contributors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pro-contributors/pro-contributors.component */ 8526);
/* harmony import */ var _pro_workspace_pro_workspace_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pro-workspace/pro-workspace.component */ 3309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [{
  path: '',
  component: _pro_boards_pro_boards_component__WEBPACK_IMPORTED_MODULE_1__.ProBoardsComponent
}, {
  path: 'boards/:id',
  component: _pro_workspace_pro_workspace_component__WEBPACK_IMPORTED_MODULE_3__.ProWorkspaceComponent,
  canActivate: [src_app_guards_userAccessProject_guard__WEBPACK_IMPORTED_MODULE_0__.userAccessProjectGuard]
}, {
  path: 'boards/:id/contributors',
  component: _pro_contributors_pro_contributors_component__WEBPACK_IMPORTED_MODULE_2__.ProContributorsComponent,
  canActivate: [src_app_guards_userAccessProject_guard__WEBPACK_IMPORTED_MODULE_0__.userAccessProjectGuard]
}];
class ProjectWorkspaceRouting {}
ProjectWorkspaceRouting.ɵfac = function ProjectWorkspaceRouting_Factory(t) {
  return new (t || ProjectWorkspaceRouting)();
};
ProjectWorkspaceRouting.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ProjectWorkspaceRouting
});
ProjectWorkspaceRouting.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProjectWorkspaceRouting, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 7683:
/*!*********************************************!*\
  !*** ./src/app/pipe/last-edit-date.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LastEditDatePipe": () => (/* binding */ LastEditDatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LastEditDatePipe {
  transform(value) {
    const dateNow = new Date();
    const dateEdited = new Date(value);
    let diff = (dateNow.getTime() - dateEdited.getTime()) / 1000;
    diff /= 60;
    let roundedDate = Math.abs(Math.round(diff));
    let outputDate = '';
    if (roundedDate < 60) {
      outputDate = `Edited ${roundedDate} mins ago`;
    } else if (roundedDate < 1440) {
      diff /= 60;
      roundedDate = Math.abs(Math.round(diff));
      outputDate = `Edited ${roundedDate} hrs ago`;
    } else if (roundedDate < 2880) {
      outputDate = `Edited ${1} day ago`;
    } else {
      outputDate = `Edited some days ago`;
    }
    return outputDate;
  }
}
LastEditDatePipe.ɵfac = function LastEditDatePipe_Factory(t) {
  return new (t || LastEditDatePipe)();
};
LastEditDatePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "lastEditDate",
  type: LastEditDatePipe,
  pure: true
});

/***/ })

}]);
//# sourceMappingURL=src_app_main-workspaces_project-workspace_project-workspace_module_ts.js.map