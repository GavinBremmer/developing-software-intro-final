import { House } from "./interfaces"

export function calcHouseMaterials(name:string,width:number,length:number,units:boolean):House{
    return {
        name: name,
        house: {
            width: width,
            length: length,
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
    }
}

export function getHouseMaterials(name:string):House{
    return {
        name: name ,
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
    }
}

export function calcWallLumber(inches:number){
    //take wall length in inches, remove corner post width, divide to get total 16 foot sections, one rounded, one unrounded

    const quotient = (inches - 7) / 192;
    const Section16 = Math.floor((inches - 7) / 192);

    //subtract rounded from unrounded and return measurement to inches to get length of remaining section, remove length of internal posts
    const remainderwall = (quotient - Section16) * 192 - Section16 * 3.5;

    //get studs for remainder wall, remove length of side baords and add them in manually after calculation
    const remainderwallstuds = Math.floor((remainderwall - 3) / 16) + 2;

    //get plates for remainder wall, multiply by 3 to allow for one floor plate and two roof plates
    const remainderwallplates = Math.ceil(remainderwall / 96) * 3;

    //populate studs var, each 16 foot section contains 13 studs including sideboards
    const studs = remainderwallstuds + Section16 * 13;

    //populate plates var, each 16 foot section contains 6 plates
    const plates = remainderwallplates + Section16 * 6;

    //populate posts var, each 16 foot section adds one post
    let posts = Section16;

    //handle edge case for walls between 16 and 20 feet in length
    if (inches < 240) {
        posts = 0;
    }

    return {
        posts,
        studs,
        plates,
    };
}

export function calcDrywall(width:number,length:number) {
    const sheets = Math.ceil((((length-7)/48)*2)+(((width-7)/48)*2)+(((width-7)*(length-7))/4608))
    return sheets
}

export function calcPlywood(width:number,length:number){
    const sheets = Math.ceil(((length/48)*2)+((width/48)*2))
    return sheets
}