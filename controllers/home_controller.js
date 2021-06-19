// testing array
const contact_list = [
  {
    name: "Ruturaj Chaubey",
    phone: 8793090098,
  },
  {
    name: "Tony Stark",
    phone: 123456789,
  },
];

// controller action for home page and creating a contact list
module.exports.home = function (req, res) {
  return res.render("home", {
    contact_list: contact_list,
    title: "Contact List",
  });
};

module.exports.create = function (req, res) {
  const { name, phone } = req.body;

  contact_list.push({
    name: name,
    phone: phone,
  });

  return res.redirect("back");
};

module.exports.delete = function (req, res) {
  console.log(req.params);

  let contactIndex = contact_list.findIndex(
    (contact) => contact.phone == req.params.phone
  );
  if (contactIndex != -1) {
    contact_list.splice(contactIndex, 1);
  }

  return res.redirect("back");
};
