import React, { useState, useRef, useEffect } from "react";

const initstate = {
  name: "",
  age: "",
  address: "",
  department: "",
  salary: "",
  isMarried: "",
  profilepic: "",
};

export const Userdetails = () => {
  const [form, setForm] = useState(initstate);
  const [details, setDetails] = useState([]);

  const fileref = useRef();

  useEffect(() => {
    getDetails();
  }, []);

  const handleChange = (e) => {
    let { name, value, checked, type } = e.target;
    value = type === "checkbox" ? checked : value;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const postData = () => {
    const payload = {
      name: form.name,
      age: form.age,
      address: form.address,
      salary: form.salary,
      department: form.department,
      isMarried: form.isMarried,
      status: false,
    };
    fetch("http://localhost:3005/users", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      getDetails();
      setForm("");
    });
  };

  const getDetails = () => {
    fetch("http://localhost:3005/users")
      .then((d) => d.json())
      .then((res) => {
        setDetails(res);
      });
  };

  const { name, age, address, salary, isMarried, department } = form;

  return (
    <>
      <div id="flex">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              name="name"
              value={name}
              onChange={handleChange}
              type="text"
              placeholder="Enter Your Name"
            />
          </div>
          <div>
            <label>Age</label>
            <input
              name="age"
              value={age}
              onChange={handleChange}
              type="number"
              placeholder="Enter your age"
            />
          </div>

          <div>
            <label>Address</label>
            <input
              name="address"
              value={address}
              onChange={handleChange}
              type="text"
              placeholder="Enter your address"
            />
          </div>

          <div>
            <select
              name="department"
              value={department}
              onChange={handleChange}
            >
              Department
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
            </select>
          </div>

          <div>
            <label>Salary</label>
            <input
              name="salary"
              value={salary}
              onChange={handleChange}
              type="number"
              placeholder="salary"
            />
          </div>

          <div>
            <label>isMarried</label>
            <input
              name="isMarried"
              checked={isMarried}
              onChange={handleChange}
              type="checkbox"
            />
          </div>

          <div>
            <label>Profile Pic</label>
            <input type="file" ref={fileref} />
          </div>

          <div>
            <input onClick={postData} id="submitbtn" type="submit" />
          </div>
        </form>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Department</th>
            <th>Married Status</th>
          </tr>

          {details.map((e, i) => (
            <tr key={i}>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.address}</td>
              <td>{e.salary}</td>
              <td>{e.department}</td>
              <td>{e.isMarried}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};
