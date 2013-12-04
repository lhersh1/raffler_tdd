describe "App namespace", ->
  it "should be defined", ->
    expect(Raffler).toBeDefined()

describe "Raffler model", ->
    it "should exist", ->
      expect(Raffler.Models.Entry).toBeDefined()

    describe "Attributes", ->
      kip = new Raffler.Models.Entry

      it "should have default attributes", ->
        expect(kip.attributes.name).toBeDefined()
        expect(kip.attributes.winner).toBeDefined()
      
describe "Raffler collection", ->

    entries = new Raffler.Collections.Entries

    it "should exist", ->
      expect(Raffler.Collections.Entries).toBeDefined()

    it "should use the Raffler model", ->
      expect(entries.model).toEqual Raffler.Models.Entry

      describe "Raffler view", ->
     entry_data = [ 
       {
         id: 0
         name: 'Laura'
         winner: false
       },
       {
         id: 1
         name: 'Daisy'
         winner: true
        },
        {
         id: 2
         name: 'Alex'
         winner: false
        }
      ]
 
    invisible_table = document.createElement 'table'
 
  beforeEach ->
      @entry_collection = new Raffler.Collections.Entries entry_data
      @entry_view = new Raffler.Views.EntriesIndex
          collection: @entry_collection
          el: invisible_table

    it "should be defined", ->
        expect(Raffler.Views.EntriesIndex).toBeDefined()

    it "should have the right element", ->
      expect(@entry_view.el).toEqual invisible_table
 
    it "should have the right collection", ->
      expect(@entry_view.collection).toEqual @restaurants_collection

