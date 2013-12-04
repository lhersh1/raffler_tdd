// Generated by CoffeeScript 1.6.3
var invisible_table;

describe("App namespace", function() {
  return it("should be defined", function() {
    return expect(Raffler).toBeDefined();
  });
});

describe("Raffler model", function() {
  it("should exist", function() {
    return expect(Raffler.Models.Entry).toBeDefined();
  });
  return describe("Attributes", function() {
    var kip;
    kip = new Raffler.Models.Entry;
    return it("should have default attributes", function() {
      expect(kip.attributes.name).toBeDefined();
      return expect(kip.attributes.winner).toBeDefined();
    });
  });
});

describe("Raffler collection", function() {
  var entries, entry_data;
  entries = new Raffler.Collections.Entries;
  it("should exist", function() {
    return expect(Raffler.Collections.Entries).toBeDefined();
  });
  it("should use the Raffler model", function() {
    expect(entries.model).toEqual(Raffler.Models.Entry);
    return describe("Raffler view", function() {});
  });
  return entry_data = [
    {
      id: 0,
      name: 'Laura',
      winner: false
    }, {
      id: 1,
      name: 'Daisy',
      winner: true
    }, {
      id: 2,
      name: 'Alex',
      winner: false
    }
  ];
});

invisible_table = document.createElement('table');

beforeEach(function() {
  this.entry_collection = new Raffler.Collections.Entries(entry_data);
  return this.entry_view = new Raffler.Views.EntriesIndex({
    collection: this.entry_collection,
    el: invisible_table
  });
});

it("should be defined", function() {
  return expect(Raffler.Views.EntriesIndex).toBeDefined();
});

it("should have the right element", function() {
  return expect(this.entry_view.el).toEqual(invisible_table);
});

it("should have the right collection", function() {
  return expect(this.entry_view.collection).toEqual(this.restaurants_collection);
});
