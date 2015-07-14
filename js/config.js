"use strict";

module.exports = {
    "apps": {
        "traveler": {
            "name": "Condé Nast Traveler",
            "site": "cntraveler.com"
        },
        "newyorker": {
            "name": "The New Yorker",
            "site": "newyorker.com"
        }
    },
    "envs": {
		dev: "http://localhost:3000/api/assets",
		prod: "http://drm.conde.io/api/assets"
    }
};