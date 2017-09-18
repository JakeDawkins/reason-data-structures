// Generated by BUCKLESCRIPT VERSION 1.9.1, PLEASE EDIT WITH CARE
'use strict';

var List     = require("bs-platform/lib/js/list.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");

function sort(l) {
  if (List.length(l) > 1) {
    var hd = List.hd(l);
    return List.concat(/* :: */[
                sort(List.filter((function (x) {
                              return Caml_obj.caml_lessthan(x, hd);
                            }))(List.tl(l))),
                /* :: */[
                  /* :: */[
                    hd,
                    /* [] */0
                  ],
                  /* :: */[
                    sort(List.filter((function (x) {
                                  return Caml_obj.caml_greaterequal(x, hd);
                                }))(List.tl(l))),
                    /* [] */0
                  ]
                ]
              ]);
  } else {
    return l;
  }
}

exports.sort = sort;
/* No side effect */