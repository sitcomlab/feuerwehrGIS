"use strict";

/**
 *  @desc definition mongodb schemata
 */

module.exports = function(mongoose) {
    var datensatz = new mongoose.Schema({
        Basiskarten: String,
        Fachkarten: Object,
        Daten_ohne_Raumbezug: [Object]
    });
    var einsatz = new mongoose.Schema({
 	    Einsatzstichwort: String,
    	Einsatzort: String,
    	Meldender: String,
    	Objektnummer: int,
    	Datum_Uhrzeitgruppe: Date,
    	Datensaetze: Object,
    	Zeichnungen: Object,
    	Kranzposition: int,
    	Kartenposition: Object,
        Zeichen: Object
    };
    var taktZeichen = new mongoose.Schema({
      zeichenJSON: Object
    });

    var models = {
        datensaetze = mongoose.model('Datensaetze', datensatz);
        einsaetze = mongoose.model('Einsatz', einsatz);
        taktZeichens = mongoose.model('TaktZeichen', taktZeichen);
    };

    return models;
}
