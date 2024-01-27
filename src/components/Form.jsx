function Form() {
  // let name = "Anant";
  return (
    <div className="form-div">
      <div className="waiting-list">
        <div>
          <h1 className="form-title">JOIN THE WAITING LIST</h1>
        </div>
        <table>
          <tr>
            <td>NAME</td>
            <td>EMAIL</td>
          </tr>

          <tr>
            <td>
              <input
                type="text"
                id="name"
                placeholder=" WRITE YOUR FULL NAME"
              />
            </td>
            <td>
              <input
                type="email"
                id="email"
                placeholder=" WRITE YOUR EMAIL ID"
              />
            </td>
          </tr>

          <tr>
            <td>PHONE NUMBER</td>
            <td>CITY</td>
          </tr>

          <tr>
            <td>
              <input
                type="tel"
                id="number"
                placeholder=" WRITE YOUR PHONE NUMBER"
              />
            </td>
            <td>
              <input type="text" id="city" placeholder=" WRITE YOUR CITY" />
            </td>
          </tr>
        </table>
        <button className="form-button">Submit</button>
      </div>
      <hr />
    </div>
  );
}
export default Form;
