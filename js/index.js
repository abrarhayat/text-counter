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
    $("#gen-text").addClass("dark");
    $("#copy").addClass("dark");
    $("#clear").addClass("dark");
    $("#footer").addClass("dark");
    $("a").addClass("dark");
  } else {
    $("#theme-toggle").html(`<img src="images/dark_mode.svg" alt="dark_mode">`);
    $("#body").removeClass("dark");
    $("#theme-toggle").removeClass("dark");
    $("#textarea").removeClass("dark");
    $("#gen-text").removeClass("dark");
    $("#copy").removeClass("dark");
    $("#clear").removeClass("dark");
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
    $("#gen-text-input").val('');
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

  $("#gen-text").click(() => {
    setRandomTextInTextArea();
  });

  $("#copy").click(() => {
    copyToClipboard();
  });

  $("#clear").click(() => {
    clearText();
  });

  $(() => {
    $('[data-toggle="tooltip"]').tooltip();
  });
  let theme = window.localStorage.getItem("theme");
  if (!theme) {
    try {
      theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
    } catch (err) {
      theme = "dark";
      console.log(err)
    }
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

const setRandomTextInTextArea = () => {
  let randomTextTargetLength = +$("#gen-text-input").val();
  let resultText = generateDummyTextOfLength(randomTextTargetLength);
  $(textarea).val(resultText);
  getCount();
}

const generateDummyTextOfLength = (target) => {
  const dummyText = "This is a random text. This is generated for a convenience of testing."
  let result = dummyText

  if ((target / dummyText.length) > 1) {
    while (result.length < target) {
      result = result + result
    }
    return checkForTrailingSpace(result.substring(0, target))
  }
  return checkForTrailingSpace(result.substring(0, target))
}

const checkForTrailingSpace = (result) => {
  if (result.charAt(result.length - 1) == ' ') {
    let maxLength = result.length
    result = result.trim()
    result = result.padEnd(maxLength, ".")
  }
  return result;
}

const clearText = () => {
  $('#textarea').val('');
  $("#gen-text-input").val('');
  $("#charDisplay").html(charLabel);
  $("#byteDisplay").html(byteLabel);
  $("#wordDisplay").html(wordLabel);
}

const copyToClipboard = () => {
  let textToCopy = $('#textarea').val();
  let clipboardSuccessMessage = $('#clipboard-success');
  if (textToCopy.length > 0) {
    navigator.clipboard.writeText(textToCopy);
    clipboardSuccessMessage.css('display', 'block');
    clipboardSuccessMessage.addClass('show');
    setTimeout(() => {
      clipboardSuccessMessage.removeClass('show');
      clipboardSuccessMessage.css('display', 'none');
    }, 2000);
  }
}
