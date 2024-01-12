import { useState } from "react";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function saveEmployee(e) {
    e.preventDefault();
    const employee = { firstName, lastName, email };
    console.log(employee);
  }

  return (
    <div className="container mt-2">
      <div className="card ">
        <h2 className="text-center">Add Employee</h2>
        <div className="card-body">
          <form>
            <div className="form-group mb-2">
              <label className="form-label">First Name:</label>
              <input
                type="text"
                placeholder="Enter First Name.."
                name="firstName"
                value={firstName}
                className="form-control"
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
            </div>
            <div className="form-group mb-2">
              <label className="form-label">Last Name:</label>
              <input
                type="text"
                placeholder="Enter Last Name.."
                name="lastName"
                value={lastName}
                className="form-control"
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </div>
            <div className="form-group mb-2">
              <label className="form-label">Email Id:</label>
              <input
                type="text"
                placeholder="Enter Last Name.."
                name="email"
                value={email}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <button className="btn btn-success" onClick={saveEmployee}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
