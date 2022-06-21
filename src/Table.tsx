import React, {FC} from 'react'

import {createTable, getCoreRowModel, useTableInstance,} from '@tanstack/react-table'
import {Person, defaultData} from './data';
import {GridTable} from './GridTable';

const table = createTable().setRowType<Person>()

export const defaultColumns = [
  table.createDataColumn('firstName', {
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
  table.createDataColumn(row => row.lastName, {
    id: 'lastName',
    cell: info => info.getValue(),
    header: () => <span>Last Name</span>,
    footer: props => props.column.id,
  }),
  table.createDataColumn('age', {
    header: () => 'Age',
    footer: props => props.column.id,
  }),
  table.createDataColumn('visits', {
    header: () => <span>Visits</span>,
    footer: props => props.column.id,
  }),
  table.createDataColumn('status', {
    header: 'Status',
    footer: props => props.column.id,
  }),
  table.createDataColumn('progress', {
    header: 'Profile Progress',
    footer: props => props.column.id,
  }),
]

export const Table: FC = () => {

  const instance = useTableInstance(table, {
    data: defaultData,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    // FIXME how to define the type of GridTable that I don't need to convert instance `as any`?
    <GridTable table={instance as any}/>
  )
};
