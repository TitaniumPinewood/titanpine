module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateHouseListingPics extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016052421111807;
    }

    up() {

      return [
        this.createTable("house_listing_pics", [])
      ];

    }

    down() {

      return [
        this.dropTable("house_listing_pics")
      ];

    }

  }

  return CreateHouseListingPics;

})();