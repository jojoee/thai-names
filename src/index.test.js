import {expect} from 'chai';
import thaiNames from './index';

describe('thai-names', function() {
  describe('all', function() {
    var allItems;

    before(function() {
      allItems = thaiNames.all();
    });

    it('should be an object', function() {
      expect(allItems).to.satisfy(function(items) {
        return items.every(function(item) {
          return (
            typeof item.name === 'string' &&
            typeof item.meaning.en === 'string' &&
            typeof item.meaning.th === 'string'
          );
        });
      });
    });

    it('should contain `Aileen`', function() {
      expect(allItems).to.include({
        "name": "Aileen",
        "meaning": {
          "en": "",
          "th": "อเมริกัน แปลว่า แสงสว่าง"
        }
      });
    });
  });

  describe('random', function() {
    var allItems;

    before(function() {
      allItems = thaiNames.all();
    });

    it('should return a random item from the thaiNames.all()', function() {
      var randomItem = thaiNames.random();

      expect(allItems).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = thaiNames.random(3);

      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(allItems).to.include(item);
      });
    });
  });
});
