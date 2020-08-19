function autocomplete(objInput, hmOptions) {
  var currentFocus;
  objInput.addEventListener("input", function(e) {
    /* close any already open lists of autocompleted values */
    closeAllLists();
  
    inputText = this.value;
    if (!inputText) { return false; }

    currentFocus = -1;

    /* create a DIV element that will contain the items (values) */
    var divAutoOptions = document.createElement("DIV");
    divAutoOptions.setAttribute("id", this.id + "autocomp-items");
    divAutoOptions.setAttribute("class", "autocomp-items");

    /* append the DIV element as a child of the autocomplete container */
    this.parentNode.appendChild(divAutoOptions);

    /* for each item on the hmOptions array */
    var words, j, k;
    for (i = 0; i < hmOptions.length; i++) {
      words = hmOptions[i].split(" ");
      for (j = 0; j < words.length; j++) {
        /* check if the item starts with the same letters as the text field value */
        if (words[j].substr(0, inputText.length).toUpperCase() == inputText.toUpperCase()) {
          /* create d DIV element for each matching option */
          var divAutoOption = document.createElement("DIV");
 
          /* make the matching letters bold */
          divAutoOption.innerHTML = '';
          for (k = 0; k < words.length; k++) {
            if (k > 0) { divAutoOption.innerHTML += " "; }
            divAutoOption.innerHTML += (k == j) ? "<strong>" + words[k].substr(0, inputText.length) + "</strong>" + words[k].substr(inputText.length) : words[k];
          }

          /* insert a hidden input that will hold the current array item's value */
          divAutoOption.innerHTML += "<input type='hidden' value='" + hmOptions[i] + "'>";

          /* execute a function when user clicks on the item value (divAutoOption element) */
          divAutoOption.addEventListener("click", function(e) {
            /* insert the value for the autocomplete text field (objInput) */
            objInput.value = this.getElementsByTagName("input")[0].value;

            /* close the autocomplete list */
            closeAllLists();
          });
          divAutoOptions.appendChild(divAutoOption);
          break;
        }
      }
    }
  });

  /* execute a function when user presses a key on the keyboard */
  objInput.addEventListener("keydown", function(e) {
    var objAutocomp, autocompItems;
    objAutocomp = document.getElementById(this.id + "autocomp-items");
    if (objAutocomp) {
      autocompItems = objAutocomp.getElementsByTagName("div");
    }
    if (e.keyCode == 40) {
      /* if the arrow DOWN key is presses, increase the currentFocus variable; and make the current item more visible */
      currentFocus++;
      addActive(autocompItems);
    }
    else if (e.keyCode == 38) {
      /* if the arrow UP key is pressed, decrease the currentFocus variable; and make the current item more visible */
      currentFocus--;
      addActive(autocompItems);
    }
    else if (e.keyCode == 13) {
      /* if the ENTER key is pressed, prevent the form from being submitted; and simulate a click on the "active" item */
      e.preventDefault();
      if (currentFocus > -1) {
        if (autocompItems) { 
          autocompItems[currentFocus].click();
        }
      }
    }
  });
  
  /* a function to classify an item as "active" */
  function addActive(items) {
    if (!items) {
      return false;
    }
    /* start by removing the "active" class on all items */
    removeActive(items);
    if (currentFocus >= items.length) {
      currentFocus = 0;
    }
    if (currentFocus < 0) {
      currentFocus = items.length - 1;
    }
    /* add class "autocomp-active" */
    items[currentFocus].classList.add("autocomp-active");
  }
  
  /* a function to remove the "active" class from all autocomplete items */
  function removeActive(items) {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove("autocomp-active");
    }
  }

  /* a function to close all autocomplete lists in the document, except the one passed as an argument */
  function closeAllLists(ele) {
    var x = document.getElementsByClassName("autocomp-items");
    for (var i = 0; i < x.length; i++) {
      if ((ele != x[i]) && (ele != objInput)) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  /* class all autocomplete lists when user clicks in the document */
  document.addEventListener("click", function(e) {
    closeAllLists(e.target);
  });

  objInput.focus();
}

/*initiate the autocomplete function on the "myfind" input, and pass along the options array as possible autocomplete values */
//autocomplete(document.getElementById("myfind"), hmManagers);

