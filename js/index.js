
const charLabel = 'Characters: ';
const byteLabel = 'Bytes: ';
const wordLabel = "Words: "
const kiloByteLabel = 'Kilobytes(KB): ';

const getCount = () => {
    let text = $('#textarea').val();
    let count = text.length;
    let blob = new Blob([`${text}`]);
    let blobSize = blob.size;
    $('#charDisplay').html(`${charLabel} ${count}`);
    blobSize >= 1000
        ? $('#byteDisplay').html(`${kiloByteLabel}${blobSize / 1000}`)
        : $('#byteDisplay').html(`${byteLabel}${blobSize}`);
    let matches = text.match(/[\w\d\’\'-]+/gi);    
    $('#wordDisplay').html(`${wordLabel}${matches ? matches.length : 0}`);    
}

const gitHub = () => {
    window.open("https://github.com/abrarhayat");
}

const twitter = () => {
    window.open("https://twitter.com/abrar_hayat");
}

const instagram = () => {
    window.open("https://www.instagram.com/abrarhayat");
}

$('document').ready(() => {
    $('#charDisplay').html(charLabel);

    $('#byteDisplay').html(byteLabel);

    $('#wordDisplay').html(wordLabel);

    $("#textarea").on("input", () => {
        getCount();
    });

    $('#github').click(() => {
        gitHub();
    });

    $('#twitter').click(() => {
        twitter();
    });

    $('#instagram').click(() => {
        instagram();
    });

    $(() => {
        $('[data-toggle="tooltip"]').tooltip()
    })
});