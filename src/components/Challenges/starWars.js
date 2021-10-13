import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacterRequest } from '../../store/modules/star_wars_characters/actions';

const StarWars = () => {
  const dispatch = useDispatch();
  const { starWars } = useSelector(state => state);
  useEffect(() => {
    dispatch(getCharacterRequest());
  }, [dispatch])

  return (
    <DataTable
      noHeader
      pagination
      paginationRowsPerPageOptions={[5, 10, 15]}
      paginationComponentOptions={{
        rowsPerPageText: 'linhas por página:',
        rangeSeparatorText: 'de',
        noRowsPerPage: false,
        selectAllRowsItem: false,
        selectAllRowsItemText: 'All',
      }}
      paginationPerPage={5}
      columns={columns}
      data={starWars.characters}
      expandableRow
      expandOnRowClicked
      defaultSortField="name"
      expandableRowDisabled={row => row.disabled}
      highlightOnHover
      expandableRowsComponent={<ExpandedComponent />}
    />
  );
}

export default StarWars;

const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
    compact: true,
  },
  {
    name: 'Birth year',
    selector: 'birth_year',
    sortable: true,
  },
  {
    name: 'Eye color',
    selector: 'eye_color',
    sortable: true,
  }
];

const ExpandedComponent = (props) => {
  <div>
    <h1> {props.name}</h1>
  </div>
}
