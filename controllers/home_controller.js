// 20th June - Create, Read and delete contact from database

const Contact = require("../models/Contact");

// testing array
const contact_list = [
  {
    name: "Ruturaj Chaubey",
    phone: 8793090098,
  },
];

// controller action for home page and creating a contact list
module.exports.home = function (req, res) {
  // fetching or reading data from the database
  Contact.find({}, function (err, contacts) {
    if (err) {
      console.log("Error in displaying the contacts", err);
      return;
    }

    return res.render("home", {
      contact_list: contacts,
      title: "My Contact List",
    });
  });
};

module.exports.create = function (req, res) {
  const { name, phone } = req.body;

  // Creating contact in MongoDb
  Contact.create(
    {
      name: name,
      phone: phone,
    },
    function (err, contact) {
      if (err) {
        console.log("Error in creating contact, ", err);
        return;
      }

      contact_list.push(contact);
      res.redirect("back");
    }
  );
};

module.exports.delete = function (req, res) {
  console.log(req.params);

  // Deleting contact from mongoDB
  Contact.deleteOne(req.params._id, function (err, contact) {
    if (err) {
      console.log("Error in deleting contact from the database", err);
      return;
    }

    console.log("Deleted Contact: ", contact);
    return res.redirect("back");
  });
};
