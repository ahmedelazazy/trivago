const Hotelier = require("./Hotelier");
const HotelierItem = require("./HotelierItem");
const Location = require("./Location");
const Category = require("./Category");

Hotelier.hasMany(HotelierItem);
HotelierItem.belongsTo(Hotelier);

Location.belongsTo(HotelierItem);
HotelierItem.hasOne(Location);

module.exports = {
  Hotelier,
  HotelierItem,
  Location,
  Category,
};
