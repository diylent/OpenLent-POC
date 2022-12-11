const initSqlJS = require('sql.js')

const SQL = await initSqlJs({
    locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.js`
  });

const recepieDB = new SQL

// Boilerplate for nutrients
let nutrientProfile = {
    macroNutrients: {
        calories: {
            quantity: 0,
            max: 0,
            unit: "kcal"
        },
        carbohydrates: {
            quantity: 0,
            max: 0,
            unit: "g"
        },
        protien: {
            quantity: 0,
            max: 0,
            unit: "g"
        },
        fats: {
            totalFat: {
                quantity: 0,
                max: 0,
                unit: "g"
            },
            saturatedFat: {
                quantity: 0,
                max: 0,
                unit: "g"
            },
            monounsaturatedFat: {
                quantity: 0,
                max: 0,
                unit: "g"
            },
            polyunsaturatedFat: {
                quantity: 0,
                max: 0,
                unit: "g"
            },
            omega3FattyAcids: {
                quantity: 0,
                max: 0,
                unit: "g"
            },
            omega6FattyAcids: {
                quantity: 0,
                max: 0,
                unit: "g"
            },    
        },
        fibers: {
            totalFiber: {
                quantity: 0,
                max: 0,
                unit: "g"
            },
            solubleFiber: {
                quantity: 0,
                max: 0,
                unit: "g"
            },
            insolubleFiber: {
                quantity: 0,
                max: 0,
                unit: "g"
            },
        },
        cholestoral: {
            quantity: 0,
            max: 0,
            unit: "mg"
        },
    },
    vitamins: {
        A: {
            quantity: 0,
            max: 0,
            unit: "IU",
        },
        B6: {
            quantity: 0,
            max: 0,
            unit: "mg",
        },
        B12: {
            quantity: 0,
            max: 0,
            unit: "ug",
        },
        C: {
            quantity: 0,
            max: 0,
            unit: "mg",
        },
        D: {
            quantity: 0,
            max: 0,
            unit: "IU",
        },
        E: {
            quantity: 0,
            max: 0,
            unit: "IU",
        },
        K: {
            quantity: 0,
            max: 0,
            unit: "ug",
        },
        thlamin: {
            quantity: 0,
            max: 0,
            unit: "mg",
        },
        riboflavin: {
            quantity: 0,
            max: 0,
            unit: "mg",
        },
        niacin: {
            quantity: 0,
            max: 0,
            unit: "mg",
        },
        folate: {
            quantity: 0,
            max: 0,
            unit: "mg",
        },
        pantothenicAcid: {
            quantity: 0,
            max: 0,
            unit: "mg",
        },
        biotin: {
            quantity: 0,
            max: 0,
            unit: "ug",
        },
        choline: {
            quantity: 0,
            max: 0,
            unit: "mg",
        },
    },
    minerals: {
        calcium: {
            quantity: 0,
            max: 0,
            unit: "g"
        },
        chloride: {
            quantity: 0,
            max: 0,
            unit: "g"
        },
        chromium: {
            quantity: 0,
            max: 0,
            unit: "mg"
        },
        copper: {
            quantity: 0,
            max: 0,
            unit: "mg"
        },
        iodine: {
            quantity: 0,
            max: 0,
            unit: "ug"
        },
        iron: {
            quantity: 0,
            max: 0,
            unit: "mg"
        },
        magnesium: {
            quantity: 0,
            max: 0,
            unit: "mg"
        },
        manganese: {
            quantity: 0,
            max: 0,
            unit: "g"
        },
        molybdenum: {
            quantity: 0,
            max: 0,
            unit: "g"
        },
        phosphorus: {
            quantity: 0,
            max: 0,
            unit: "g"
        },
        potassium: {
            quantity: 0,
            max: 0,
            unit: "g"
        },
        selenium: {
            quantity: 0,
            max: 0,
            unit: "g"
        },
        sodium: {
            quantity: 0,
            max: 0,
            unit: "g"
        },
        sulfur: {
            quantity: 0,
            max: 0,
            unit: "g"
        },
        zinc: {
            quantity: 0,
            max: 0,
            unit: "g"
        },
    }
}

let recepie = {
    1: {
        name: "string",
        quantity: {
            amount: 0,
            unit: "string"
        },
        form: "string",
        source: {
            displayName: "string",
            link: "string"
        },
        containerSizeGrams: 0,
        ingredientCost: 0,
        costPerMeal: 0,
        mealsAvailble: 0, 
        // Import nutrient profile here
    }
}

let makeMeal = (name) => {
 
}

let recepieDB = openDatabse()