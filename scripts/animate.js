document.addEventListener("DOMContentLoaded", function () {
  var animateButtons = document.querySelectorAll(".animate-button");
  var animateH1 = document.getElementById("animate-h1");
  var mainSection = document.getElementById("main");
  var contentBox = document.getElementById("content-box");
  var customCssInput = document.getElementById("custom-css-input");
  var applyCssButton = document.getElementById("apply-css-button");
  var cssBox = document.getElementById("text-field");

  animateButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      var buttonId = event.target.id;

      var cssRule = getCssRule(buttonId);

      if (buttonId.includes("bg-")) {
        animateH1.classList.value = "";
        mainSection.classList.value = "main";
        contentBox.classList.value = "content-box";
        setTimeout(function () {
          mainSection.classList.add(buttonId);
          cssBox.innerHTML = cssRule;
          console.log(cssBox.innerHTML);
        }, 1);
      } else if (buttonId.includes("-content")) {
        animateH1.classList.value = "";
        mainSection.classList.value = "main";
        contentBox.classList.value = "content-box";
        setTimeout(function () {
          contentBox.classList.add(buttonId);
          cssBox.innerHTML = cssRule;
          console.log(cssBox.innerHTML);
        }, 1);
      } else {
        animateH1.classList.value = "";
        mainSection.classList.value = "main";
        contentBox.classList.value = "content-box";
        setTimeout(function () {
          animateH1.classList.add(buttonId);
          cssBox.innerHTML = cssRule;
          console.log(cssBox.innerHTML);
        }, 1);
      }
    });
  });

  applyCssButton.addEventListener("click", function () {
    var customCss = customCssInput.value;

    // Apply the custom CSS to contentBox
    contentBox.style.cssText = customCss;
  });
});

function populateCssInput(button) {
  var buttonId = button.id;
  var cssRule = getCssRule(buttonId);

  var cssBox = document.getElementById("text-field");
  cssBox.innerHTML = cssRule;
}

function getCssRule(buttonId) {
  switch (buttonId) {
    case "enter-from-left-content":
      return `.enter-from-left-content {
    animation: slideInFromLeft 0.5s ease-in-out;
  }
  
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
  
    100% {
      transform: translateX(0);
    }
  }`;
    case "enter-from-right-content":
      return `.enter-from-right-content {
    animation: slideInFromRight 0.5s ease-in-out;
  }
  
  @keyframes slideInFromRight {
    0% {
      transform: translateX(-100%);
    }
  
    100% {
      transform: translateX(0);
    }
  }`;
  case "fade-in-content":
      return `.fade-in-content {
        animation: FadeIn 0.6s ease-in;
    }
    
    @keyframes FadeIn {
        0% {
            opacity: 0%;
        }
    
        100% {
            opacity: 100%;
        }
    }`;
    case "tracking-in-expand":
      return `.tracking-in-expand {
        -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
        animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    }
    
    @-webkit-keyframes tracking-in-expand {
        0% {
            letter-spacing: -0.5em;
            opacity: 0;
        }
    
        40% {
            opacity: 0.6;
        }
    
        100% {
            opacity: 1;
        }
    }`;
    case "text-shadow-pop-top":
      return `.text-shadow-pop-top {
        -webkit-animation: text-shadow-pop-top 0.6s both;
        animation: text-shadow-pop-top 0.6s both;
    }
    
    @-webkit-keyframes text-shadow-pop-top {
        0% {
            text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    
        100% {
            text-shadow: 0 -1px #555555, 0 -2px #555555, 0 -3px #555555, 0 -4px #555555, 0 -5px #555555, 0 -6px #555555, 0 -7px #555555, 0 -8px #555555;
            -webkit-transform: translateY(8px);
            transform: translateY(8px);
        }
    }
    
    @keyframes text-shadow-pop-top {
        0% {
            text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    
        100% {
            text-shadow: 0 -1px #555555, 0 -2px #555555, 0 -3px #555555, 0 -4px #555555, 0 -5px #555555, 0 -6px #555555, 0 -7px #555555, 0 -8px #555555;
            -webkit-transform: translateY(8px);
            transform: translateY(8px);
        }
    }`;
    case "text-pop-up-top":
      return `.text-pop-up-top {
        -webkit-animation: text-pop-up-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: text-pop-up-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    
    @-webkit-keyframes text-pop-up-top {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            text-shadow: none;
        }
    
        100% {
            -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
        }
    }
    
    @keyframes text-pop-up-top {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            text-shadow: none;
        }
    
        100% {
            -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
        }
    }`;
    case "bg-color-change-2x":
      return `.bg-color-change-2x {
        -webkit-animation: color-change-2x 2s linear infinite alternate both;
        animation: color-change-2x 2s linear infinite alternate both;
    }
    
    @-webkit-keyframes color-change-2x {
        0% {
            background: #19dcea;
        }
    
        100% {
            background: #b22cff;
        }
    }
    
    @keyframes color-change-2x {
        0% {
            background: #19dcea;
        }
    
        100% {
            background: #b22cff;
        }
    }`;
    case "shadow-pop-content":
      return `.shadow-pop-content {
        -webkit-animation: shadow-pop-tr 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
                animation: shadow-pop-tr 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
    }
    
    @-webkit-keyframes shadow-pop-tr {
        0% {
          -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
                  box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
          -webkit-transform: translateX(0) translateY(0);
                  transform: translateX(0) translateY(0);
        }
        100% {
          -webkit-box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;
                  box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;
          -webkit-transform: translateX(-8px) translateY(8px);
                  transform: translateX(-8px) translateY(8px);
        }
      }
      @keyframes shadow-pop-tr {
        0% {
          -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
                  box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
          -webkit-transform: translateX(0) translateY(0);
                  transform: translateX(0) translateY(0);
        }
        100% {
          -webkit-box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;
                  box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;
          -webkit-transform: translateX(-8px) translateY(8px);
                  transform: translateX(-8px) translateY(8px);
        }
      }`;
    default:
      return "";
  }
}
