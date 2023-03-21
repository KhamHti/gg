const sql = require("./db.js");

// constructor
const PersonInfo = function (personinfo) {
  this.guid = personinfo.guid;
  this.Name = personinfo.Name;
  this.PhNum = personinfo.PhNum;
  this.Org_Name = personinfo.Org_Name;
  this.NRC = personinfo.NRC;
  this.Address = personinfo.Address;
  this.City = personinfo.City;
  this.Country = personinfo.Country;
  this.Visited_Reason = personinfo.Visited_Reason;
  // this.images = personinfo.images;
};

PersonInfo.create = (newpersoninfo, result) => {
  sql.query("INSERT INTO GuestInfo SET ?", newpersoninfo, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created personinfo: ", {
      guid: res.insertId,
      ...newpersoninfo,
    });
    result(null, { guid: res.insertId, ...newpersoninfo });
  });
};

PersonInfo.findById = (guid, result) => {
  sql.query(`SELECT * FROM GuestInfo WHERE guid = ${guid}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found guid: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

PersonInfo.getAll = (guid, result) => {
  let query = "SELECT * FROM GuestInfo";
  console.log(query);
  if (guid) {
    query += ` WHERE guid LIKE '%${guid}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

PersonInfo.updateById = (guid, GuestInfo, result) => {
  sql.query(
    "UPDATE GuestInfo SET Name = ?, PhNum = ?, Org_Name = ?, NRC = ?, Address = ?, City = ?, Country = ?, Visited_Reason= ?  WHERE guid = ?",
    [
      GuestInfo.guid,
      GuestInfo.Name,
      GuestInfo.PhNum,
      GuestInfo.Org_Name,
      GuestInfo.NRC,
      GuestInfo.Address,
      GuestInfo.City,
      GuestInfo.Country,
      GuestInfo.Visited_Reason,
      guid,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated training: ", {
        guid: guid,
        ...GuestInfo,
      });
      result(null, { guid: guid, ...GuestInfo });
    }
  );
};

PersonInfo.remove = (guid, result) => {
  sql.query("DELETE FROM GuestInfo WHERE guid = ?", guid, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutorial with the guid
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted personinfo with guid: ", guid);
    result(null, res);
  });
};

module.exports = PersonInfo;
