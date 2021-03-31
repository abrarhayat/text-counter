const charLabel = "Characters: ";
const byteLabel = "Bytes: ";
const wordLabel = "Words: ";
const kiloByteLabel = "Kilobytes(KB): ";

const getCount = () => {
  let text = $("#textarea").val();
  let count = text.length;
  let blob = new Blob([`${text}`]);
  let blobSize = blob.size;
  $("#charDisplay").html(`${charLabel} ${count}`);
  blobSize >= 1000
    ? $("#byteDisplay").html(`${kiloByteLabel}${blobSize / 1000}`)
    : $("#byteDisplay").html(`${byteLabel}${blobSize}`);
  let matches = text.match(/[\w\d\’\'-]+/gi);
  $("#wordDisplay").html(`${wordLabel}${matches ? matches.length : 0}`);
};

const setTheme = (theme) => {
  if (theme === "dark") {  
    $("#theme-toggle").html(`<img src="images/light_mode.svg" alt="light_mode">`);
    $("#body").addClass("dark");
    $("#theme-toggle").addClass("dark");
    $("#textarea").addClass("dark");
    $("#footer").addClass("dark");
  } else {
    $("#theme-toggle").html(`<img src="images/dark_mode.svg" alt="dark_mode">`);
    $("#body").removeClass("dark");
    $("#theme-toggle").removeClass("dark");
    $("#textarea").removeClass("dark");
    $("#footer").removeClass("dark");
  }
};

const gitHub = () => {
  window.open("https://github.com/abrarhayat");
};

const twitter = () => {
  window.open("https://twitter.com/abrar_hayat");
};

const instagram = () => {
  window.open("https://www.instagram.com/abrarhayat");
};

$("document").ready(() => {
  $("#charDisplay").html(charLabel);

  $("#byteDisplay").html(byteLabel);

  $("#wordDisplay").html(wordLabel);

  $("#textarea").on("input", () => {
    getCount();
  });

  $("#github").click(() => {
    gitHub();
  });

  $("#twitter").click(() => {
    twitter();
  });

  $("#instagram").click(() => {
    instagram();
  });

  $(() => {
    $('[data-toggle="tooltip"]').tooltip();
  });
  const theme = window.localStorage.getItem("theme");
  if (!theme) {
    window.localStorage.setItem("theme", "light");
  }
  setTheme(theme);
});
$("#theme-toggle").click(() => {
  let theme = window.localStorage.getItem("theme");
  theme === "light" ? (theme = "dark") : (theme = "light");
  window.localStorage.setItem("theme", theme);
  setTheme(theme);
});
