
const getCount = () => {
    let text = $('#textarea').val();
    let count = text.length;
    let blob = new Blob([`${text}`]);
    let blobSize = blob.size;
    $('#charDisplay').html(`Characters: ${count}`);
    blobSize > 1000
        ? $('#byteDisplay').html(`Megabytes: ${blobSize / 1024}`)
        : $('#byteDisplay').html(`Bytes: ${blobSize}`);

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
    $('#textarea').change(() => {
        getCount();
    });

    $('#textarea').hover(() => {
        getCount();
    });

    $('#button').click(() => {
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

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});
