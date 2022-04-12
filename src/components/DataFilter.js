import React from "react";

function DataFilter({ allData, filteredData, setFilteredData, setChartData }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(filteredData);
    setChartData([]);

    allData.map((index) => {
      const x = new Date(filteredData.date);
      const y = new Date(index.date.substring(0, 10));
      if (
        index.product[0].name.includes(filteredData.name) &&
        filteredData.amount >= index.amount &&
        x >= y
      ) {
        setChartData((state) => [...state, index]);
      }
    });
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    setFilteredData({
      ...filteredData,
      [name]: val,
    });
  };

  return (
    <div id="leftSide">
      <div className="filter-Box">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Search product"
            name="name"
          />
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            placeholder="Order amount"
            name="amount"
          />
          <input onChange={(e) => handleChange(e)} type="date" name="date" />
          <button className="btn">Filter</button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Order Date</th>
            <th>Order Amount</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {allData.map((index, key) => (
            <tr key={key}>
              <td>{index.product[0].name}</td>
              <td>{index.date.substring(0, 10)}</td>
              <td>{index.amount}</td>
              <td>{index.product[0].price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataFilter;
