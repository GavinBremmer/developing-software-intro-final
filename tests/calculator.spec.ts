import { calcHouseMaterials } from "../src/calculator";
import { getHouseMaterials } from "../src/calculator";
import {calcWallLumber} from "../src/calculator"
import { expect } from "chai";
import "mocha";

describe("calcHouseMaterials", () => {
  it("should return the House interface with fields populated", () => {
    const result = calcHouseMaterials("Test",50,50,true);
    expect(result).to.eql({
        name: "Test" ,
        house: {
            width: 50,
            length: 50,
            outsideWallArea: 0,
            insideWallArea: 0,
            ceilingArea: 0
        },
        materials: {
            lumber: {
                "2x4": 0,
                "4x4": 0
            },
            plywood: {
                "4x8": 0
            },
            drywall: {
                "4x8": 0
            }
        },
        waste: {
            lumber: {
                "2x4": 0,
                "4x4": 0
            },
            plywood: {
                "4x8": 0
            },
            drywall: {
                "4x8": 0
            }
        },
        purchase: {
            lumber: {
                "2x4": 0,
                "4x4": 0
            },
            plywood: {
                "4x8": 0
            },
            drywall: {
                "4x8": 0
            }
        }
    });
  });
});

describe("getHouseMaterials", () => {
    it("should return the House interface with fields populated", () => {
      const result = getHouseMaterials("Test");
      expect(result).to.eql({
          name: "Test" ,
          house: {
              width: 0,
              length: 0,
              outsideWallArea: 0,
              insideWallArea: 0,
              ceilingArea: 0
          },
          materials: {
              lumber: {
                  "2x4": 0,
                  "4x4": 0
              },
              plywood: {
                  "4x8": 0
              },
              drywall: {
                  "4x8": 0
              }
          },
          waste: {
              lumber: {
                  "2x4": 0,
                  "4x4": 0
              },
              plywood: {
                  "4x8": 0
              },
              drywall: {
                  "4x8": 0
              }
          },
          purchase: {
              lumber: {
                  "2x4": 0,
                  "4x4": 0
              },
              plywood: {
                  "4x8": 0
              },
              drywall: {
                  "4x8": 0
              }
          }
      });
    });
  });

  describe("calcWallLumber", () => {
    it("should return 0 posts, 7 studs, 3 plates", () => {
      const result = calcWallLumber(100);
      expect(result).to.eql({ posts: 0, studs: 7, plates: 3 });
    });
    it("should return 2 posts, 34 studs, 18 plates", () => {
        const result = calcWallLumber(500);
        expect(result).to.eql({ posts: 2, studs: 34, plates: 18 });
      });
  });  