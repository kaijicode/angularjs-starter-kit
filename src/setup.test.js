import "angular";
import "angular-mocks/angular-mocks";
import "./index";


function importTests(requireFn) {
   requireFn.keys().forEach(requireFn);
}

importTests(require.context(".", true, /test.js$/));
