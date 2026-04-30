$(document).ready(function () { // ← page ready event

  // ↓ action snippets ↓

  // on page load (ready): if window is narrow, add .hidden to nav ul
  // else if window is wide, remove .hidden from nav ul
  if (window.matchMedia("(max-width: 849px)").matches) { // ← get browser width

    // ↓ action snippets (< width) ↓
    $("nav ul").addClass("hidden");
    // ↑ action snippets (< width) ↑

  } else { // ← get browser width

    // ↓ action snippets (> width) ↓
    $("nav ul").removeClass("hidden");
    // ↑ action snippets (> width) ↑

  } // ← get browser width

  // ↑ action snippets ↑

}); // ← page ready event


// when #hamburger-button is clicked:
// if nav ul has .hidden, remove .hidden from nav ul
// else add .hidden to nav ul
$("#hamburger-button").on("click", function () { // ← click event

  // ↓ action snippets ↓

  if ($("nav ul").hasClass("hidden")) { // ← element has css class

    // ↓ action snippets (class on element) ↓
    $("nav ul").removeClass("hidden");
    // ↑ action snippets (class on element) ↑

  } else { // ← element has css class

    // ↓ action snippets (class not on element) ↓
    $("nav ul").addClass("hidden");
    // ↑ action snippets (class not on element) ↑

  } // ← element has css class

  // ↑ action snippets ↑

}); // ← click event


// on window resize: if window is narrow, add .hidden to nav ul
// else if window is wide, remove .hidden from nav ul
$(window).on("resize", function () { // ← resize browser window event

  // ↓ action snippets ↓

  if (window.matchMedia("(max-width: 849px)").matches) { // ← get browser width

    // ↓ action snippets (< width) ↓
    $("nav ul").addClass("hidden");
    // ↑ action snippets (< width) ↑

  } else { // ← get browser width

    // ↓ action snippets (> width) ↓
    $("nav ul").removeClass("hidden");
    // ↑ action snippets (> width) ↑

  } // ← get browser width

  // ↑ action snippets ↑

}); // ← resize browser window event


// CUISINES PAGE - RESTAURANT MODALS
// when #bom-modal-button is clicked: remove .hidden from #bom-modal
$("#bom-modal-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#bom-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #bom-modal-close is clicked: add .hidden to #bom-modal
$("#bom-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#bom-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// when #howoo-modal-button is clicked: remove .hidden from #howoo-modal
$("#howoo-modal-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#howoo-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #howoo-modal-close is clicked: add .hidden to #howoo-modal
$("#howoo-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#howoo-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// when #torrisi-modal-button is clicked: remove .hidden from #torrisi-modal
$("#torrisi-modal-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#torrisi-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #torrisi-modal-close is clicked: add .hidden to #torrisi-modal
$("#torrisi-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#torrisi-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// when #donangie-modal-button is clicked: remove .hidden from #donangie-modal
$("#donangie-modal-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#donangie-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #donangie-modal-close is clicked: add .hidden to #donangie-modal
$("#donangie-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#donangie-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// when #quique-modal-button is clicked: remove .hidden from #quique-modal
$("#quique-modal-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#quique-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #quique-modal-close is clicked: add .hidden to #quique-modal
$("#quique-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#quique-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// when #taqueria-modal-button is clicked: remove .hidden from #taqueria-modal
$("#taqueria-modal-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#taqueria-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #taqueria-modal-close is clicked: add .hidden to #taqueria-modal
$("#taqueria-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#taqueria-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// when #bangkok-modal-button is clicked: remove .hidden from #bangkok-modal
$("#bangkok-modal-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#bangkok-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #bangkok-modal-close is clicked: add .hidden to #bangkok-modal
$("#bangkok-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#bangkok-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// when #soothr-modal-button is clicked: remove .hidden from #soothr-modal
$("#soothr-modal-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#soothr-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #soothr-modal-close is clicked: add .hidden to #soothr-modal
$("#soothr-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#soothr-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// CUISINES PAGE - DISH MODALS
// when #bluefin-button is clicked: remove .hidden from #bluefin-modal
$("#bluefin-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#bluefin-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #bluefin-modal-close is clicked: add .hidden to #bluefin-modal
$("#bluefin-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#bluefin-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// when #coldnoodles-button is clicked: remove .hidden from #coldnoodles-modal
$("#coldnoodles-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#coldnoodles-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #coldnoodles-modal-close is clicked: add .hidden to #coldnoodles-modal
$("#coldnoodles-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#coldnoodles-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// when #hamplatter-button is clicked: remove .hidden from #hamplatter-modal
$("#hamplatter-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#hamplatter-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #hamplatter-modal-close is clicked: add .hidden to #hamplatter-modal
$("#hamplatter-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#hamplatter-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// when #flatbread-button is clicked: remove .hidden from #flatbread-modal
$("#flatbread-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#flatbread-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #flatbread-modal-close is clicked: add .hidden to #flatbread-modal
$("#flatbread-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#flatbread-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// when #lobsterceviche-button is clicked: remove .hidden from #lobsterceviche-modal
$("#lobsterceviche-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#lobsterceviche-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #lobsterceviche-modal-close is clicked: add .hidden to #lobsterceviche-modal
$("#lobsterceviche-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#lobsterceviche-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// when #suadero-button is clicked: remove .hidden from #suadero-modal
$("#suadero-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#suadero-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #suadero-modal-close is clicked: add .hidden to #suadero-modal
$("#suadero-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#suadero-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// when #scallop-button is clicked: remove .hidden from #scallop-modal
$("#scallop-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#scallop-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #scallop-modal-close is clicked: add .hidden to #scallop-modal
$("#scallop-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#scallop-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// when #crabkaree-button is clicked: remove .hidden from #crabkaree-modal
$("#crabkaree-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#crabkaree-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #crabkaree-modal-close is clicked: add .hidden to #crabkaree-modal
$("#crabkaree-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#crabkaree-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// NEIGHBORHOODS PAGE - NEIGHBORHOOD MODALS
// when #flatiron-button is clicked: remove .hidden from #flatiron-modal
$("#flatiron-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#flatiron-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #flatiron-modal-close is clicked: add .hidden to #flatiron-modal
$("#flatiron-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#flatiron-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// when #eastvillage-button is clicked: remove .hidden from #eastvillage-modal
$("#eastvillage-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#eastvillage-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #eastvillage-modal-close is clicked: add .hidden to #eastvillage-modal
$("#eastvillage-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#eastvillage-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// when #lowereastside-button is clicked: remove .hidden from #lowereastside-modal
$("#lowereastside-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#lowereastside-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #lowereastside-modal-close is clicked: add .hidden to #lowereastside-modal
$("#lowereastside-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#lowereastside-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// when #williamsburg-button is clicked: remove .hidden from #williamsburg-modal
$("#williamsburg-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#williamsburg-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #williamsburg-modal-close is clicked: add .hidden to #williamsburg-modal
$("#williamsburg-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#williamsburg-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// PERFECT FOR PAGE - CATEGORY MODALS
// when #latenight-button is clicked: remove .hidden from #latenight-modal
$("#latenight-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#latenight-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #latenight-modal-close is clicked: add .hidden to #latenight-modal
$("#latenight-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#latenight-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// when #cheapeats-button is clicked: remove .hidden from #cheapeats-modal
$("#cheapeats-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#cheapeats-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #cheapeats-modal-close is clicked: add .hidden to #cheapeats-modal
$("#cheapeats-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#cheapeats-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event


// when #groupdinner-button is clicked: remove .hidden from #groupdinner-modal
$("#groupdinner-button").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#groupdinner-modal").removeClass("hidden");
  // ↑ action snippets ↑
}); // ← click event

// when #groupdinner-modal-close is clicked: add .hidden to #groupdinner-modal
$("#groupdinner-modal-close").on("click", function () { // ← click event
  // ↓ action snippets ↓
  $("#groupdinner-modal").addClass("hidden");
  // ↑ action snippets ↑
}); // ← click event
