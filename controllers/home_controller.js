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
  const { name, phone } = req.body;

  contact_list.push({
    name: name,
    phone: phone,
  });

  return res.render("home", {
    contact_list: contact_list,
    title: "Contact List",
  });
};
