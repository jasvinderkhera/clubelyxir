function Form() {
  return (
    <div className="form-div">
      <div className="waiting-list p-3">
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
                className="px-1 rounded-2"
              />
            </td>
            <td>
              <input
                type="email"
                id="email"
                placeholder=" WRITE YOUR EMAIL ID"
                className="px-1 rounded-2"
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
                className="px-1 rounded-2"
              />
            </td>
            <td>
              <input type="text" id="city" placeholder=" WRITE YOUR CITY" className="px-1 rounded-2 " />
            </td>
          </tr>
        </table>
        <button className="btn btn-danger px-4 pb-2">Submit</button>
      </div>
      <div className="waiting-list_md p-3">
        <label htmlFor="" className="pb-2 px-1 text-white">NAME</label>
        <input
                type="text"
                id="name"
                placeholder=" WRITE YOUR FULL NAME"
                className="px-1 rounded-2"
              />
              <label htmlFor="" className="pb-2 px-1 text-white">EMAIL</label>
              <input
                type="email"
                id="email"
                placeholder=" WRITE YOUR EMAIL ID"
                className="px-1 rounded-2"
              />
              <label htmlFor="" className="pb-2 px-1 text-white">PHONE NUMBER</label>
              <input
                type="tel"
                id="number"
                placeholder=" WRITE YOUR PHONE NUMBER"
                className="px-1 rounded-2"
              />
              <label htmlFor="" className="pb-2 px-1 text-white">CITY</label>
              <input type="text" id="city" placeholder=" WRITE YOUR CITY" className="px-1 rounded-2 " />

              <button class="btn btn-danger rounded-1 px-5 py-2 ms-5">Submit</button>

      </div>
      <hr />
    </div>
  );
}
export default Form;
