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
    $("a").addClass("dark");
  } else {
    $("#theme-toggle").html(`<img src="images/dark_mode.svg" alt="dark_mode">`);
    $("#body").removeClass("dark");
    $("#theme-toggle").removeClass("dark");
    $("#textarea").removeClass("dark");
    $("#footer").removeClass("dark");
    $("a").removeClass("dark");
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

// initializaing the page
$("document").ready(() => {
  $("#charDisplay").html(charLabel);

  $("#byteDisplay").html(byteLabel);

  $("#wordDisplay").html(wordLabel);

  $("#textarea").on("input", () => {
    getCount();
  });

  $("#footer-text").html(
    `<a href="https://abrarhayat.vercel.app" target="_blank">© ${new Date().getFullYear()} Abrar Hayat</a>`
  );

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
  let theme = window.localStorage.getItem("theme");
  if (!theme) {
    theme = "dark";
    window.localStorage.setItem("theme", theme);
  }
  setTheme(theme);
});
$("#theme-toggle").click(() => {
  let theme = window.localStorage.getItem("theme");
  theme === "light" ? (theme = "dark") : (theme = "light");
  window.localStorage.setItem("theme", theme);
  setTheme(theme);
});
