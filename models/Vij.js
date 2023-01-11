const mongoose = require("mongoose");

const VijSchema = new mongoose.Schema({
  DairyDeluxe: {
    SKU: "kgs",
    pelletsize: "MM",
    packing: "pp",
    price: "pellet,mash",
    type: String,
    required: true,
  },
  DairyGold: {
    SKU: "kgs",
    pelletsize: "MM",
    packing: "pp",
    price: "pellet,mash",
    type: String,
    required: true,
  },
  DairyBypass: {
    SKU: "kgs",
    pelletsize: "MM",
    packing: "pp",
    price: "pellet,mash",
    type: String,
    required: true,
  },
  DairyPower: {
    SKU: "kgs",
    pelletsize: "MM",
    packing: "pp",
    price: "pellet,mash",
    type: String,
    required: true,
  },
});

//krishna region

const KrishnaSchema = new mongoose.Schema({
  content: String,
  user: { type: Schema.type.ObjectId, ref: "VijSchema" },
});

const Krishna = mongoose.model("krishna", KrishnaSchema);

//Wg region

const WgSchema = new mongoose.Schema({
  content: String,
  user: { type: Schema.type.ObjectId, ref: "VijSchema" },
});

const Wg = mongoose.model("Wg", WgSchema);

//Eg region

const EgSchema = new mongoose.Schema({
  content: String,
  user: { type: Schema.type.ObjectId, ref: "VijSchema" },
});

const Eg = mongoose.model("Eg", EgSchema);

module.exports = mongoose.model("Vij", VijSchema);
