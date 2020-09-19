const Hotelier = require("./Hotelier");
const HotelierItem = require("./HotelierItem");
const Location = require("./Location");
const Category = require("./Category");

Hotelier.hasMany(HotelierItem);
HotelierItem.belongsTo(Hotelier);

HotelierItem.belongsTo(Location, { onDelete: "cascade" });

module.exports = {
  Hotelier,
  HotelierItem,
  Location,
  Category,
};
