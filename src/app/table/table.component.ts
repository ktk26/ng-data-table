import { Component, OnInit } from '@angular/core';
import { locationData, colType } from './tableData';

const LOCATION = "location";
const BRANCH_NAME = "Branch Name";
@Component({
    selector: 'ng-table',
    templateUrl: './table.component.html',
    styleUrls: [
        './table.component.less'
    ]
})
export class TableComponent implements OnInit {
    tableData;
    view;
    locationData = locationData;
    totalData = [];
    colType;
    entryIndex;

    /* createLocationData() {
         for (const key in responseData) {
             if (Object.prototype.hasOwnProperty.call(responseData, key)) {
                 const element = responseData[key];
                 if (element.countryData && element.countryData.length) {
                     for (const country of element.countryData) {
                         if (country.areaData && country.areaData.length) {
                             for (const area of country.areaData) {
                                 let obj = {
                                     localData: [],
                                     branchData: []
                                 };
                                 for (const key2 in area) {
                                     if (Object.prototype.hasOwnProperty.call(area, key2)) {
                                         const element2 = area[key2];
                                         if (key2 !== "branchData") {
                                             obj.localData.push(element2);
                                         } else {
                                             for (const branch of element2) {
                                                 let branchArr = [];
                                                 for (const key3 in branch) {
                                                     if (Object.prototype.hasOwnProperty.call(branch, key3)) {
                                                         const element3 = branch[key3];
                                                         branchArr.push(element3);
                                                     }
                                                 }
                                                 obj.branchData.push(branchArr);
                                             }
                                         }
                                     }
                                 }
                                 this.locationData.push(obj);
                             }
                         }
                     }
                 }
             }
         }
     } */

    updateTable(event) {
        this.view = (event ? event.target.value : LOCATION);
        this.tableData = [];
        if (this.view !== LOCATION) {
            for (let data of locationData[this.entryIndex].countryData) {
                for (let branchData of data.branchData) {
                    this.tableData.push(branchData);
                }
            }
        } else {
            for (let data of this.locationData[this.entryIndex].countryData) {
                this.tableData.push(data.localData);
            }
        }
        this.calcTotal();
    }

    calcTotal() {
        this.totalData = [];
        if (this.tableData.length) {
            if (this.view === LOCATION) {
                this.totalData.push(locationData[this.entryIndex].countryName);
            } else {
                this.totalData.push(BRANCH_NAME);
            }
            for (let i = 0; i < this.tableData.length; i++) {
                for (let j = 1; j < this.tableData[i].length; j++) {
                    if (!this.totalData[j]) {
                        this.totalData[j] = 0;
                    }
                    this.totalData[j] += this.tableData[i][j];
                }
            }

        }
    }

    sort(sortOrder, index) {
        this.tableData = this.tableData.sort((a, b) => {
            if (a[index] > b[index]) {
                if (sortOrder === 'asc') {
                    return 1;
                } else {
                    return -1;
                }
            }
            if (a[index] < b[index]) {
                if (sortOrder === 'asc') {
                    return -1;
                } else {
                    return 1;
                }
            }
            return 0;
        });
    }

    deleteRow(rowIndex) {
        this.tableData = this.tableData.filter((val, ind) => { return ind !== rowIndex; });
        this.calcTotal();
    }

    loadBranch(index) {
        this.tableData = locationData[this.entryIndex].countryData[index].branchData;
        this.calcTotal();
        document.querySelector(".view-container__type")["value"] = "";
        this.view = "";
    }

    showEntry(index) {
        if (index >= 0
            && index < locationData.length - 1
            && index != this.entryIndex) {
            this.entryIndex = index;
            this.updateTable(null);
        }
    }

    ngOnInit() {
        this.view = LOCATION;
        this.entryIndex = 0;
        //this.createLocationData();
        this.updateTable(null);
        this.colType = colType;
        this.calcTotal();
    }
}