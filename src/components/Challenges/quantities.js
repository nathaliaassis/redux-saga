import { Button } from 'react-bootstrap';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../../store/modules/add_remove/actions';
const Quantities = () => {
  const dispatch = useDispatch();
  const { addRemove } = useSelector(state => state);

  return (
    <>
      <h5>Quantidade:</h5>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="success" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "32px", width: "32px" }}
          disabled={addRemove === 0}
          onClick={() => dispatch(remove())}
        >
          -
        </Button>
        <span className="ml-2 mr-2">{addRemove}</span>
        <Button
          variant="success" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "32px", width: "32px" }}
          onClick={() => dispatch(add())}
        >
          +
        </Button>
      </div>
    </>
  );
}

export default Quantities;