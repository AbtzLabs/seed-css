/**!
 * Seed-CSS - Additional features for HTML Textareas.
 * @copyright 2019, Abtz Labs
 * @license MIT
 */

const seedTextarea = function() {
  'use strict';

  // Find all seed-file inputs.
  const inputs = document.querySelectorAll('.field > textarea');

  if (inputs !== null) {
    inputs.forEach(function(input, i) {
      let maxLength = 0;

      const parent = input.parentNode;
      const counterLabel = parent.querySelector('[role="counter"]');
      const template =
        counterLabel.getAttribute('data-template') ||
        'Typed %a out of %b. Remaining %c.';

      const fnCalc = () => {
        const typed = input.value.replace(/[\n\r]/g, '').length;
        const remaining = maxLength - typed;
        const minLength = Math.floor(maxLength * 0.1);

        counterLabel.innerHTML = template
          .replace('%a', typed)
          .replace('%b', maxLength)
          .replace(
            '%c',
            remaining <= minLength
              ? `<span class="red" >${remaining}</span>`
              : remaining
          );
      };

      maxLength = input.getAttribute('maxlength');

      // Ignore if maxlength is not given
      if (!maxLength) {
        return;
      }

      // Make sure the limit is an integer
      maxLength = parseInt(maxLength);

      // Attach the handlers
      'keypress keydown keyup'.split(' ').forEach((evt) => {
        input.addEventListener(evt, fnCalc, true);
      });

      // Initialize the utility label
      fnCalc();
    }); // inputs.forEach(function(input, i)
  } // if (inputs !== null)
}; // seedTextarea

if (typeof module !== 'undefined') {
  module.exports.seedTextarea = seedTextarea;
}

// Expose SeedCSS in the global scope
if (typeof window.SeedCSS === 'undefined') {
  window.SeedCSS = {};
}

// Expose textArea in the global scope
window.SeedCSS.textArea = seedTextarea;
