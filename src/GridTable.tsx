import React from 'react';
import {
  TableInstance,
  TableGenerics,
} from "@tanstack/react-table";

type Props<T> = {
  table: TableInstance<T>
}

export function GridTable<T extends TableGenerics>({table}: Props<T>) {
  return <div>
    <table border={1}>
      <thead>
      {table.getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map(header => (
            <th key={header.id} colSpan={header.colSpan}>
              {header.isPlaceholder ? null : header.renderHeader()}
            </th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody>
      {table.getRowModel().rows.map(row => (
        <tr key={row.id}>
          {row.getVisibleCells().map(cell => (
            <td key={cell.id}>{cell.renderCell()}</td>
          ))}
        </tr>
      ))}
      </tbody>
      <tfoot>
      {table.getFooterGroups().map(footerGroup => (
        <tr key={footerGroup.id}>
          {footerGroup.headers.map(header => (
            <th key={header.id} colSpan={header.colSpan}>
              {header.isPlaceholder ? null : header.renderFooter()}
            </th>
          ))}
        </tr>
      ))}
      </tfoot>
    </table>
    <div/>
  </div>;
}
