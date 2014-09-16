function capitaliseFirstLetter(string) {
	if (string == null || string.length < 1) {
		return;
	}
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Remove acentos de caracteres
 * @param  {String} stringComAcento [string que contem os acentos]
 * @return {String}                 [string sem acentos]
 */
function removerAcentos(newStringComAcento) {
    if (newStringComAcento == null || newStringComAcento == '') {
        return;
    }
    var string = newStringComAcento;
    var mapaAcentos = {
        A : /[ÁÀÂÃáàâã]/g,
        E : /[ÉÈÊéèê]/g,
        I : /[ÍÌÎíìî]/g,
        O : /[ÓÒÔÕóòôõ]/g,
        U : /[ÚÙÛúùû]/g,
        C : /[Çç]/g,
        N : /\xF1/g
    };
 
    for ( var letra in mapaAcentos ) {
        var expressaoRegular = mapaAcentos[letra];
        string = string.replace( expressaoRegular, letra );
    }
 
    return string.toUpperCase();
}