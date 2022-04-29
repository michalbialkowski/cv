$('p, li').each(function() {
    var textReplace = $(this).html();
    var lettersToReplace = [
        'a', 'i', 'o', 'u', 'w', 'z',
        'na', 'od', 'za', 'we', 'dla', 'oraz', 'wraz'
    ];
    var arrayLength = lettersToReplace.length;
    for (var i = 0; i < arrayLength; i++) {
        var textSplit = textReplace.split(' ' + lettersToReplace[i] + ' ');
        var textReplace = textSplit.join(' ' + lettersToReplace[i] + '&nbsp;');
    }
    $(this).empty();
    $(this).html(textReplace);
});  