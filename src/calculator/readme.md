# calcHouseMaterials ( name:string , width:number , length:number , units:boolean )

This function takes a name, width, length and units and returns a House object with name, width and length populated.

## Parameters

  - `name:string` The name of the house to be calculated
  - `width:number` The width of the house
  - `length:number` The length of the house
  - `units:boolean` The units to be used, true for feet and false for inches

## Usage

Create a House object example:

```javascript
// example from location relative to src/index.ts
import { calcHouseMaterials } from './calculator'

calcHouseMaterials("Test",50,50,true);

returns {
  name: 'Test',
  house: {
    width: 50,
    length: 50,
    outsideWallArea: 0,
    insideWallArea: 0,
    ceilingArea: 0
  },
  materials: {
    lumber: { '2x4': 0, '4x4': 0 },
    plywood: { '4x8': 0 },
    drywall: { '4x8': 0 }
  },
  waste: {
    lumber: { '2x4': 0, '4x4': 0 },
    plywood: { '4x8': 0 },
    drywall: { '4x8': 0 }
  },
  purchase: {
    lumber: { '2x4': 0, '4x4': 0 },
    plywood: { '4x8': 0 },
    drywall: { '4x8': 0 }
  }
}
```

## Returns

Returns `object` matching House interface

# getHouseMaterials ( name:string )

This function takes a name and returns a House object with name populated.

## Parameters

  - `name:string` The name of the house to be recalled

## Usage

Create a House object example:

```javascript
// example from location relative to src/index.ts
import { getHouseMaterials } from './calculator'

getHouseMaterials("Test");

returns {
  name: 'Test',
  house: {
    width: 0,
    length: 0,
    outsideWallArea: 0,
    insideWallArea: 0,
    ceilingArea: 0
  },
  materials: {
    lumber: { '2x4': 0, '4x4': 0 },
    plywood: { '4x8': 0 },
    drywall: { '4x8': 0 }
  },
  waste: {
    lumber: { '2x4': 0, '4x4': 0 },
    plywood: { '4x8': 0 },
    drywall: { '4x8': 0 }
  },
  purchase: {
    lumber: { '2x4': 0, '4x4': 0 },
    plywood: { '4x8': 0 },
    drywall: { '4x8': 0 }
  }
}
```

## Returns

Returns `object` matching House interface

# calcWallLumber ( inches:number )

This function takes a measurement in inches and returns the lumber required to frame a single wall.

## Parameters

  - `inches:number` The length of the wall in inches

## Usage

Calculate lumber required to build a wall:

```javascript
// example from location relative to src/index.ts
import { calcWallLumber } from './calculator'

const result = calcWallLumber(100);
console.log(result); // { posts: 0, studs: 14, plates: 6 }
```

## Returns

Returns `object` containing posts:, studs:, plates:

# calcDrywall ( width:number, length:number )

This function takes the width and length of a house and returns the number of 4X8 foot sheets of drywall required for the interior walls and ceiling.

## Parameters

  - `width:number` The width of the house in inches
  - `length:number` The length of the house in inches

## Usage

Calculate drywall required for a house:

```javascript
// example from location relative to src/index.ts
import { calcDrywall } from './calculator'

const result = calcDrywall(199,199);
console.log(result); // 24
```

## Returns

Returns `number` of 4X8 foot sheets of drywall required

# calcPlywood ( width:number, length:number )

This function takes the width and length of a house and returns the number of 4X8 foot sheets of plywood required for the exterior walls.

## Parameters

  - `width:number` The width of the house in inches
  - `length:number` The length of the house in inches

## Usage

Calculate plywood required for a house:

```javascript
// example from location relative to src/index.ts
import { calcPlywood } from './calculator'

const result = calcPlywood(192,192);
console.log(result); // 16
```

## Returns

Returns `number` of 4X8 foot sheets of plywood required