(function(window, undefined) {
  var dictionary = {
    "fbd15ffc-bb18-4cba-9aa3-5381a7917d9a": "Surveycreated",
    "d7814f24-120d-4ea6-bc01-97e19ea666e9": "surveyanswer",
    "1a9f46a4-bf13-4a1e-ad01-5a0452e1a452": "Survey Create",
    "1d32bcdc-4671-4431-85b5-8a8191f82cb1": "survey answer link",
    "d8d8c3e7-ba4b-4d76-a2d5-b32c863c43de": "surveyanswer2",
    "d7e1e3c2-2ef7-471f-832c-26573f30cfca": "findsurveylink",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Open App",
    "771a69a2-b9c3-4b64-835d-e8d30260299e": "home",
    "aba1a5ae-a7eb-456d-af36-25de44081b1d": "surveyresults",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);