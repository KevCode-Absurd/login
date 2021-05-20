import React,{ useMemo} from 'react'
import {useTable} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './columns'
import './table.css'

export const Table = () => {
    const columns = useMemo  (()=> COLUMNS, [])
    const data = useMemo(()=> MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data,

    })

    const { getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow, } = tableInstance

    return (
        <table {...getTableProps}>
            <thead>
                {headerGroups.map((headerGroups) =>(
                <tr {...headerGroups.getHeaderGroupProps()}>
                    {headerGroups.headers.map( columns =>(
                        <th {...columns.getHeaderProps()}>{columns.render('Header')}

                    </th>
                        ))}
                </tr>
                ))}
                
            </thead>
            <tbody  { ...getTableBodyProps()}>
                {rows.map((rows) => {
                    prepareRow(rows)
                    return(
                        <tr {...rows.getRowProps()} >
                            {rows.cells.map((cell) =>{
                                return <td{...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                            </tr>
                    )
                })}
                   
            </tbody>
            
        </table>
        
    )
    
}
export default Table
