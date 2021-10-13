import React, { useEffect, useState } from 'react';
import { FormControl, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { filter_clothes, filter_color } from '../../store/modules/clothes/actions';

const Clothes = () => {
  const dispatch = useDispatch();

  const { data, filters } = useSelector(state => state.clothes);

  const [selectedColors, setSelectedColors] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showClothes, setShowClothes] = useState(data);

  const allColors = Array.from(new Set(data.map(item => item.color)));
  const checkColor = (e) => {
    const selectedItems = Array.from(new Set([...selectedColors, e.target.value]))
    if (e.target.checked) {
      setSelectedColors(selectedItems);
    } else {
      setSelectedColors(selectedItems.filter(color => color !== e.target.value));
    }
  }


  useEffect(() => {
    try {
      dispatch(filter_clothes({ name: 'colors', value: selectedColors }));
    } catch (err) {
      console.log(err)
    } finally {
      const filtered = data.filter(item => filters.colors.includes(item.color));
      filtered.length ? setShowClothes(filtered) : setShowClothes(data);
    }
  }, [dispatch, selectedColors]);

  useEffect(() => {
    try {
      dispatch(filter_clothes({
        name: 'prices',
        value: {
          min: Number(minPrice),
          max: Number(maxPrice),
        }
      }));
    } catch (err) {
      console.log(err)
    } finally {
      const filtered = data.filter(item =>
        (!filters.prices.min || item.price >= filters.prices.min) &&
        (!filters.prices.max || item.price <= filters.prices.max)
        && item
      );
      filtered.length ? setShowClothes(filtered) : setShowClothes(data);
    }
  }, [dispatch, minPrice, maxPrice]);


  return (
    <>
      <span style={{ fontSize: "14px" }}>Filtrar por cor:</span>
      <div className="d-flex">
        {allColors.map((color, idx) => (
          <label
            key={idx}
            className="d-flex"
            style={{ alignItems: "center", marginRight: "12px" }}
          >
            <input
              type="checkbox"
              value={color}
              style={{ marginRight: "4px" }}
              onChange={(e) => checkColor(e)}
            />
            {color}
          </label>
        ))}
      </div>
      <span style={{ fontSize: "14px" }}>Filtrar por preço:</span>
      <div className="d-flex">
        <FormControl
          type="number"
          min="0"
          value={minPrice}
          onChange={e => setMinPrice(e.target.value)}
          style={{ width: "60px" }}
        />
        <FormControl
          type="number"
          min="0"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
          style={{ width: "60px", marginLeft: "16px" }}
        />
      </div>
      <Table striped className='mt-4'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cor</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {showClothes.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>R$ {item.price},00</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Clothes;