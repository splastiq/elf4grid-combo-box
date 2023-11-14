import { Component } from '@angular/core';

// elf 4 components
import '@elf/emerald-grid';
import '@elf/emerald-grid/themes/halo/light';
import '@elf/coral-combo-box';
import '@elf/elf-theme-halo/light/coral-combo-box';
import '@elf/elf-theme-halo/light/imports/native-elements';

// elf 7 components
import '@refinitiv-ui/elements/combo-box';
import '@refinitiv-ui/elements/combo-box/themes/halo/light';

import '@refinitiv-ui/efx-grid';
import '@refinitiv-ui/efx-grid/themes/halo/light';

import '@refinitiv-ui/halo-theme/light/imports/native-elements';

import { CompositeGrid } from 'tr-grid';
import { ComboBox } from '@refinitiv-ui/elements/combo-box';
import { ItemData } from '@refinitiv-ui/elements/item';
// import {
//   ColumnDefinition,
//   ColumnResizing,
//   CoreGrid,
//   RealtimeGrid,
// } from '@refinitiv-ui/efx-grid';

let dropdownItems: ItemData[] = [];
for (let i = 0; i < 50; i++) {
  dropdownItems.push({
    value: 'New Item ' + i,
    label: 'New Item ' + i,
  });
}

let tableData: any[][] = [];
for (let i = 0; i < 100; i++) {
  tableData.push([i, 'New Item ' + i, i, i]);
}

// let records: any[] = [];
// for (let i = 0; i < 100; i++) {
//   records.push({ intCol: i, strCol: 'New Item ' + i, floatCol: i });
// }

// const formatter = (e: any) => {
//   var cell = e.cell;
//   var element = cell.getContent();
//   if (!element) {
//     element = document.createElement('ef-combo-box');
//     (element as unknown as HTMLElement).style.width = '100%';
//     element.data = dropdownItems;
//   }
//   element.value = e.data;
//   cell.setContent(element);
// };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  data = tableData;

  columns: CompositeGrid.Column[] = [
    {
      title: '#',
      field: 'first',
      width: 30,
    },
    { title: 'Text', field: 'second' },
    {
      title: 'ELF7 ComboBox',
      field: 'third',
      formatter: this.elf7comboBox(dropdownItems),
    },
    {
      title: 'ELF4 ComboBox',
      field: 'forth',
      formatter: this.elf4comboBox(dropdownItems),
    },
  ];

  config: CompositeGrid.Options = {};

  ///

  // columns2: ColumnDefinition.Options[] = [
  //   { name: 'Integer', field: 'intCol' },
  //   { name: 'String', field: 'strCol' },
  //   { name: 'Float', field: 'floatCol', binding: formatter },
  // ];

  // configObj: RealtimeGrid.GridOptions = {
  //   columns: this.columns2,
  //   staticDataRows: records,
  // };

  // gridConfigured(e: any) {
  //   const api: RealtimeGrid = e.detail.api;
  //   const core: CoreGrid | null = api.getCoreGrid();

  //   console.log('Grid has been configured.', core);
  // }

  elf7comboBox(selectItems: ItemData[]): CompositeGrid.ColumnFormatter {
    return {
      render: (): void => {},
      bind: (
        rowIndex: number,
        columnIndex: number,
        value: string,
        cell: any
      ): void => {
        let element = cell.getContent() as ComboBox;
        if (!element) {
          element = document.createElement('ef-combo-box');
          (element as unknown as HTMLElement).style.width = '100%';
          element.data = selectItems;
        }
        cell.setContent(element);
      },
    };
  }

  elf4comboBox(selectItems: ItemData[]): CompositeGrid.ColumnFormatter {
    return {
      render: (): void => {},
      bind: (
        rowIndex: number,
        columnIndex: number,
        value: string,
        cell: any
      ): void => {
        let element = cell.getContent() as any;
        if (!element) {
          element = document.createElement('coral-combo-box');
          (element as unknown as HTMLElement).style.width = '100%';
          element.data = selectItems;
        }
        cell.setContent(element);
      },
    };
  }
}
