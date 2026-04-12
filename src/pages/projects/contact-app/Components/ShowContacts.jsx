import React, { useEffect, useMemo, useState } from "react";

const ShowContacts = ({ contacts }) => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  // console.log(contacts);

  const handleFilter = (value) => {
    setFilter(value);
  };

  // Filter contacts according to the filter type "all", "home", "office", "business"
  const filterTest = contacts.filter((item) =>
    filter === "all" ? true : item.group === filter,
  );
  useEffect(() => {
    // console.log(filterTest);
  }, [filter, filterTest]);

  const filteredContacts = useMemo(() => {
    return contacts
      .filter((item) => {
        // Filter by group
        return filter === "all" ? true : item.group === filter;
      })
      .filter((item) => {
        // Search by name or email (case insensitive)
        const search = searchTerm.toLowerCase();
        return (
          item.fullName.toLowerCase().includes(search) ||
          item.email.toLowerCase().includes(search)
        );
      });
  }, [filter, contacts, searchTerm]);

  // Exprimental filter 1
  const filteredMenual = (data, filterItem, searchItem) => {
    if (!data.length) return "No data available";
    return data
      .filter((item) =>
        filterItem === "all" ? true : item.group === filterItem,
      )
      .filter(
        (item) =>
          item.fullName.includes(searchItem) || item.email.includes(searchItem),
      );
  };
  const filteredContacts2 = filteredMenual(contacts, filter, searchTerm);

  // Exprimental filter 2
  const filteredMenual2 = contacts.reduce((accu, currentItem) => {
    const filterGroup = filter === "all" || currentItem.group === filter;
    const search = searchTerm.toLowerCase();
    const searchGroup =
      currentItem.fullName.toLowerCase().includes(search) ||
      currentItem.email.toLowerCase().includes(search);
    if (filterGroup && searchGroup) {
      accu.push(currentItem);
    }
    return accu;
  }, []);

  const filteredMenual3 = contacts.reduce((acc, item) => {
    const matchesGroup = filter === "all" || item.group === filter;
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      item.fullName.toLowerCase().includes(search) ||
      item.email.toLowerCase().includes(search);

    if (matchesGroup) {
      acc.push(item);
    }

    return acc;
  }, []);

  useEffect(() => {
    // console.log(filteredContacts2);
    console.log(filteredMenual2);
  }, [contacts, filter, searchTerm]);

  return (
    <div className="show-contacts-container">
      <h1 className="text-center">All Contacts</h1>
      <div className="show-contact-header">
        <select
          name="filter"
          value={filter}
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="home">home</option>
          <option value="office">office</option>
          <option value="business">business</option>
          <option value="none">None</option>
        </select>
        <input
          type="search"
          placeholder="Search contact..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul className="filter-text-container">
        {["all", "home", "office", "business", "none"].map((item) => (
          <li
            className={filter === item ? "active-contact" : ""}
            key={item}
            onClick={() => handleFilter(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {filteredMenual2.length > 0 ? (
            filteredMenual2.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.fullName}</td>
                <td>{contact.email}</td>
                <td>{contact.group}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center">
                No matching contacts found!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShowContacts;
